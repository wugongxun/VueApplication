<template>
    <div class="cart">
        <h4>全部商品</h4>
        <div class="cart-main">
            <div class="cart-th">
                <div class="cart-th1">全部</div>
                <div class="cart-th2">商品</div>
                <div class="cart-th3">单价（元）</div>
                <div class="cart-th4">数量</div>
                <div class="cart-th5">小计（元）</div>
                <div class="cart-th6">操作</div>
            </div>
            <div class="cart-body">
                <ul class="cart-list" v-for="cartItem in cartInfoList" :key="cartItem.id">
                    <li class="cart-list-con1">
                        <input type="checkbox" name="chk_list" :checked="cartItem.isChecked" @change="updateChecked(cartItem.skuId, $event.target.checked)">
                    </li>
                    <li class="cart-list-con2">
                        <img :src="cartItem.imgUrl">
                        <div class="item-msg">{{cartItem.skuName}}</div>
                    </li>
                    <li class="cart-list-con3">
                        <span class="price">{{cartItem.skuPrice}}</span>
                    </li>
                    <li class="cart-list-con4">
                        <div class="num-controller">
                            <a href="javascript:void(0)" class="mins" @click="changeSkuNum($event, cartItem.skuId, cartItem.skuNum - 1)">-</a>
                            <input autocomplete="off" type="number" :value="cartItem.skuNum" class="itxt" @change="changeSkuNum($event, cartItem.skuId, $event.target.value)">
                            <a href="javascript:void(0)" class="plus" @click="changeSkuNum($event, cartItem.skuId, cartItem.skuNum + 1)">+</a>
                        </div>
                    </li>
                    <li class="cart-list-con5">
                        <span class="sum">{{cartItem.skuPrice * cartItem.skuNum}}</span>
                    </li>
                    <li class="cart-list-con6">
                        <a @click="delCart(cartItem.skuId)">删除</a>
                        <br>
                        <a>移到收藏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="cart-tool">
            <div class="select-all">
                <input class="chooseAll" type="checkbox" :checked="allCheck" @change="updateAllChecked">
                <span>全选</span>
            </div>
            <div class="option">
                <a @click="delAllChecked">删除选中的商品</a>
                <a>移到我的关注</a>
                <a>清除下柜商品</a>
            </div>
            <div class="money-box">
                <div class="chosed">已选择
                    <span>{{total.totalNum}}</span>件商品</div>
                <div class="sumprice">
                    <em>总价（不含运费） ：</em>
                    <i class="summoney">{{total.totalPrice}}</i>
                </div>
                <div class="sumbtn">
                    <a class="sum-btn" href="###" target="_blank">结算</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import throttle from "lodash/throttle";

export default {
    name: "ShopCart",
    methods: {
        ...mapActions("cart", ["getCartList", "deleteCart", "updateCheckedById", "deleteAllChecked", "updateAllCheckedAction"]),
        ...mapActions("detail", ["addOrUpdateCart"]),
        changeSkuNum: throttle(function (e, skuId, skuNum) {
            let reg = /^[1-9][0-9]{0,2}$/;
            if (reg.test(skuNum) && skuNum > 0) {
                this.cartInfoList.forEach(item => {
                    if (item.skuId == skuId) {
                        skuNum -= item.skuNum;
                        item.skuNum += skuNum;
                    }
                });
                try {
                    this.addOrUpdateCart({skuId, skuNum: skuNum});
                } catch (e) {
                    alert(e.message);
                    console.error(e);
                }
            } else {
                this.cartInfoList.forEach(item => {
                    if (item.skuId == skuId) {
                        e.target.value = item.skuNum;
                    }
                });
            }
        }, 1000),
        async delCart(skuId) {
            try {
                await this.deleteCart(skuId);
                this.getCartList();
            } catch (e) {
                alert(e.message);
                console.error(e);
            }
        },
        async updateChecked(skuId, isChecked) {
            try {
                await this.updateCheckedById({skuId, isChecked: isChecked ? 1 : 0});
                this.getCartList();
            } catch (e) {
                alert(e.message);
                console.log(e);
            }
        },
        async delAllChecked() {
            try {
                await this.deleteAllChecked();
                this.getCartList();
            } catch (e) {
                alert(e.message);
                console.error(e);
            }
        },
        async updateAllChecked(event) {
            try {
                let isChecked = event.target.checked ? "1" : "0";
                await this.updateAllCheckedAction(isChecked);
                this.getCartList();
            } catch (e) {
                alert(e.message);
                console.error(e);
            }
        }
    },
    computed: {
        ...mapGetters("cart", ["cartList"]),
        cartInfoList() {
            if (this.cartList.length) {
                return this.cartList[0].cartInfoList;
            } else {
                return [];
            }
        },
        total() {
            let totalPrice = 0;
            let totalNum = 0;
            this.cartInfoList.forEach(item => {
                if (item.isChecked) {
                    totalPrice += item.skuPrice * item.skuNum;
                    totalNum += item.skuNum;
                }
            });
            return {totalPrice, totalNum};
        },
        allCheck() {
            if (this.cartInfoList.length == 0) {
                return false;
            } else {
                return this.cartInfoList.every(item => item.isChecked);
            }
        }
    },
    async mounted() {
        await this.getCartList();
    },
    beforeRouteEnter(to, from, next) {
        //未登录，也没有游客登录信息，跳转到登录页面
        if (sessionStorage.getItem("UUIDTOKEN") || localStorage.getItem("TOKEN")) {
            next();
        } else {
            next("/login");
        }
    }
}
</script>

<style scoped lang="less">
    .cart {
        width: 1200px;
        margin: 0 auto;

        h4 {
            margin: 9px 0;
            font-size: 14px;
            line-height: 21px;
        }

        .cart-main {
            text-align: center;

            .cart-th {
                background: #f5f5f5;
                border: 1px solid #ddd;
                padding: 10px;
                overflow: hidden;

                &>div {
                    float: left;
                }

                .cart-th1 {
                    width: 5%;

                    input {
                        vertical-align: middle;
                    }

                    span {
                        vertical-align: middle;
                    }
                }

                .cart-th2 {
                    width: 35%;
                }

                .cart-th3, .cart-th4, .cart-th5 {
                    width: 12.5%;
                }
                .cart-th6 {
                    width: 22.5%;
                }
            }

            .cart-body {
                margin: 15px 0;
                border: 1px solid #ddd;

                .cart-list {
                    padding: 10px;
                    border-bottom: 1px solid #ddd;
                    overflow: hidden;

                    &>li {
                        float: left;
                    }

                    .cart-list-con1 {
                        width: 5%;
                    }

                    .cart-list-con2 {
                        width: 35%;

                        img {
                            width: 82px;
                            height: 82px;
                            float: left;
                        }

                        .item-msg {
                            float: left;
                            width: 300px;
                            margin: 20px 10px;
                            line-height: 18px;
                        }
                    }

                    .cart-list-con3 {
                        width: 12.5%;
                        margin: 20px 0;
                    }

                    .cart-list-con4 {
                        width: 12.5%;
                        margin: 20px auto;

                        .num-controller {
                            display: inline-block;

                            .mins {
                                border: 1px solid #ddd;
                                border-right: 0;
                                float: left;
                                color: #666;
                                width: 6px;
                                text-align: center;
                                padding: 8px;
                            }

                            input {
                                border: 1px solid #ddd;
                                width: 40px;
                                height: 36.8px;
                                float: left;
                                text-align: center;
                                font-size: 14px;
                                outline: none;
                            }

                            .plus {
                                border: 1px solid #ddd;
                                border-left: 0;
                                float: left;
                                color: #666;
                                width: 6px;
                                text-align: center;
                                padding: 8px;
                            }
                        }
                    }

                    .cart-list-con5 {
                        width: 12.5%;
                        margin: 20px 0;

                        .sum {
                            font-size: 16px;
                        }
                    }

                    .cart-list-con6 {
                        width: 22.5%;
                        margin: 20px 0;

                        a {
                            color: #666;
                        }
                        a:hover {
                            color: #0037ff;
                        }
                    }
                }
            }
        }

        .cart-tool {
            overflow: hidden;
            border: 1px solid #ddd;

            .select-all {
                padding: 10px;
                overflow: hidden;
                float: left;

                span {
                    vertical-align: middle;
                }

                input {
                    vertical-align: middle;
                }
            }

            .option {
                padding: 10px;
                overflow: hidden;
                float: left;

                a {
                    float: left;
                    padding: 0 10px;
                    color: #666;
                }
                a:hover {
                    color: #0037ff;
                }
            }

            .money-box {
                float: right;

                .chosed {
                    line-height: 26px;
                    float: left;
                    padding: 10px;
                }

                .sumprice {
                    width: 200px;
                    line-height: 22px;
                    float: left;
                    padding: 13px;

                    .summoney {
                        color: #c81623;
                        font-size: 16px;
                    }
                }

                .sumbtn {
                    float: right;

                    a {
                        display: block;
                        position: relative;
                        width: 96px;
                        height: 52px;
                        line-height: 52px;
                        color: #fff;
                        text-align: center;
                        font-size: 18px;
                        font-family: "Microsoft YaHei";
                        background: #e1251b;
                        overflow: hidden;
                    }
                }
            }
        }
    }
</style>
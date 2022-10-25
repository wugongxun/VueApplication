<template>
    <div class="type-nav">
        <div class="container w">
            <h2 @mouseenter="showList" @mouseleave="showList">全部商品分类</h2>
            <nav class="nav">
                <a href="#">服装城</a>
                <a href="#">美妆馆</a>
                <a href="#">尚品汇超市</a>
                <a href="#">全球购</a>
                <a href="#">闪购</a>
                <a href="#">团购</a>
                <a href="#">有趣</a>
                <a href="#">秒杀</a>
            </nav>
            <transition name="sort">
                <div class="sort" @click="goSearch" v-show="show" @mouseenter="showList" @mouseleave="showList">
                    <div class="item" @mouseenter="changeActive(index)" @mouseleave="changeActive(-1)" v-for="(c1, index) in categoryList.slice(0, 15)" :key="c1.categoryId">
                        <h3 :class="{active: active === index}"><a :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a></h3>
                        <div class="item-list" v-show="active === index">
                            <dl v-for="c2 in c1.categoryChild.slice(0, 9)" :key="c2.categoryId">
                                <dt><a :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a></dt>
                                <dd>
                                    <em v-for="c3 in c2.categoryChild.slice(0, 7)" :key="c3.categoryId"><a :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a></em>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";
import throttle from "lodash/throttle";
export default {
    name: "TypeNav",
    data() {
        return {
            active: -1,
            show: true
        }
    },
    methods: {
        // changeActive(index) {
        //     this.active = index;
        // }
        //对changeActive进行节流
        changeActive: throttle(function (index) {
            this.active = index;
        }, 20),
        goSearch(event) {
            let {categoryname, category1id, category2id, category3id} = event.target.dataset;
            if (categoryname) {
                let location = {name: "search"}
                let query = {categoryName: categoryname}
                if (category1id) {
                    query.category1Id = category1id;
                } else if (category2id) {
                    query.category2Id = category2id;
                } else {
                    query.category3Id = category3id;
                }
                location.query = query;
                if (this.$route.params) {
                    location.params = this.$route.params;
                }
                this.$router.push(location);
            }
        },
        showList() {
            if (this.$route.path !== "/home") {
                this.show = !this.show;
            }
        }
    },
    mounted() {
        if (this.$route.path != "/home") {
            this.show = false;
        }
    },
    computed: {
        ...mapState("home", ["categoryList"])
    }
}
</script>

<style scoped>
    .type-nav {
        border-bottom: 2px solid #e1251b;
    }
    .container {
        position: relative;
        height: 45px;
        line-height: 45px;
    }
    .container h2 {
        display: inline-block;
        width: 200px;
        height: 45px;
        background-color: #e1251b;
        color: #fff;
        text-align: center;
        font-size: 16px;
    }
    .nav {
        display: inline-block;
    }
    .nav a {
        padding: 0 20px;
    }
    .sort {
        position: absolute;
        padding-top: 5px;
        height: 463px;
        width: 200px;
        background-color: #fafafa;
        transition: all .5s linear;
        z-index: 999;
    }
    .item h3 {
        width: 200px;
        text-align: center;
        font-weight: normal;
        color: #333;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
    }
    .item .active {
        background-color: #e1251b;
        cursor: pointer;
    }
    .item .active>a {
        cursor: pointer;
        color: #ffffff;
    }
    .item-list {
        position: absolute;
        left: 200px;
        top: 0;
        width: 730px;
        min-height: 467px;
        background: #f7f7f7;
        border: 1px solid #ddd;
        font-size: 12px;
    }
    .item-list dl {
        display: block;
        height: 45px;
    }
    .item-list dl dt {
        float: left;
        font-weight: 600;
        margin: 0 5px 0 15px;
    }
    .item-list dl dd {
        float: left;
    }
    .item-list dl dd em {
        padding: 0 10px;
        border-left: 1px solid #ccc;
    }
    .sort-enter, .sort-leave-to {
        height: 0;
    }
    .sort-enter-to, .sort-leave {
        height: 463px;
    }
    .sort-enter-active, .sort-leave-active {
        transition: all .5s linear;
    }
</style>
<template>
    <div class="fr page">
        <div class="sui-pagination clearfix">
            <ul>
                <li class="prev" :class="{'disabled':pageNo == 1}" @click="changePage(pageNo - 1)">
                    <a>«上一页</a>
                </li>
                <li v-show="pageNo > Math.ceil(continues / 2)" @click="changePage(1)">
                    <a>1</a>
                </li>
                <li class="dotted" v-show="pageNo > Math.ceil(continues / 2) + 1"><span>...</span></li>
                <li v-for="(page, index) in continues" :key="index" :class="{'active': pageNo == page + plusPage}" @click="changePage(page + plusPage)">
                    <a>{{page + plusPage}}</a>
                </li>
                <li class="dotted" v-show="pageNo < totalPages - Math.floor(continues / 2) - 1"><span>...</span></li>
                <li v-show="pageNo < totalPages - Math.floor(continues / 2)" @click="changePage(totalPages)">
                    <a>{{totalPages}}</a>
                </li>
                <li class="next" :class="{'disabled':pageNo == totalPages}" @click="changePage(pageNo + 1)">
                    <a>下一页»</a>
                </li>
            </ul>
            <div><span>共{{total}}条&nbsp;</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {pageNo:Number, pageSize:Number, total:Number, continues:Number},
    methods: {
        changePage(pageNo) {
            if (pageNo > 0 && pageNo <= this.totalPages && pageNo != this.pageNo)
                this.$emit("getPageNo", pageNo);
        }
    },
    computed: {
        totalPages() {
            return Math.ceil(this.total / this.pageSize);
        },
        //v-for时需要增加的页数
        plusPage() {
            const {pageNo, totalPages, continues} = this;
            let plus = 0;
            if (continues > totalPages) {
                plus = 1;
            } else {
                plus = pageNo - Math.ceil(continues / 2);
                if (plus < 0) {
                    plus = 0;
                }
                if (plus > totalPages - continues) {
                    plus = totalPages - continues;
                }
            }
            return plus;
        }
    }
}
</script>

<style scoped lang="less">
.page {
    width: 100%;
    height: 66px;
    overflow: hidden;
    text-align: center;

    .sui-pagination {
        display: inline-block;
        margin: 18px auto;

        ul {
            margin-left: 0;
            margin-bottom: 0;
            vertical-align: middle;
            float: left;

            li {
                line-height: 18px;
                display: inline-block;

                a {
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    border: 1px solid #e0e9ee;
                    margin-left: -1px;
                    font-size: 14px;
                    padding: 9px 18px;
                    color: #333;
                }

                &.active {
                    a {
                        background-color: #fff;
                        color: #e1251b;
                        border: 0;
                        cursor: default;
                        margin-left: 0;
                    }
                }

                &.prev {
                    a {
                        background-color: #fafafa;
                        margin-left: 0;
                    }
                }

                &.disabled {
                    a {
                        color: #999;
                        cursor: default;
                    }
                }

                &.dotted {
                    span {
                        position: relative;
                        float: left;
                        line-height: 18px;
                        text-decoration: none;
                        background-color: #fff;
                        font-size: 14px;
                        border: 0;
                        padding: 9px 18px;
                        color: #333;
                    }
                }

                &.next {
                    a {
                        background-color: #fafafa;
                    }
                }
            }
        }

        div {
            display: inline-block;
            color: #333;
            font-size: 14px;
            width: 100px;
            line-height: 42px;
        }
    }
}
</style>
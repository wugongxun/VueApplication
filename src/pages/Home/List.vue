<template>
    <div class="list">
        <div class="w container clearfix">
            <Carousel :list="bannerList"></Carousel>
            <div class="right">
                <div class="news">
                    <h4 class="title">
                        <em>尚品汇快报</em>
                        <span><a href="#">更多></a></span>
                    </h4>
                    <ul class="news-list">
                        <li><span>[特惠]</span>备战开学季 全民半价购数码</li>
                        <li><span>[公告]</span>备战开学季 全民半价购数码</li>
                        <li><span>[特惠]</span>备战开学季 全民半价购数码</li>
                        <li><span>[公告]</span>备战开学季 全民半价购数码</li>
                        <li><span>[特惠]</span>备战开学季 全民半价购数码</li>
                    </ul>
                </div>
                <div class="life-services">
                    <ul>
                        <li class="lift-item" v-for="(liftItem, index) in lifeServices" :key="index">
                            <i v-position="liftItem"></i>
                            <span>{{ liftItem.title }}</span>
                        </li>
                    </ul>
                </div>
                <div class="ads">
                    <img src="/images/ad1.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "List",
    data() {
        return {
            lifeServices: [
                {title: "话费", positionX: 0, positionY: 0},
                {title: "机票", positionX: -65, positionY: 0},
                {title: "电影票", positionX: -130, positionY: 0},
                {title: "游戏", positionX: -190, positionY: 0},
                {title: "彩票", positionX: 0, positionY: -70},
                {title: "加油站", positionX: -65, positionY: -70},
                {title: "酒店", positionX: -130, positionY: -70},
                {title: "火车票", positionX: -190, positionY: -70},
                {title: "众筹", positionX: -3, positionY: -140},
                {title: "理财", positionX: -65, positionY: -143},
                {title: "礼品卡", positionX: -130, positionY: -140},
                {title: "白条", positionX: -195, positionY: -140}
            ],
            curIndex: 0
        }
    },
    computed: {
        ...mapState("home", ["bannerList"])
    },
    directives: {
        //指令与元素成功绑定时调用
        //指令所在的模板重新解析时被调用
        position(element, binding) {
            element.style.backgroundPositionX = binding.value.positionX + "px";
            element.style.backgroundPositionY = binding.value.positionY + "px";
        }
    }
}
</script>

<style scoped>
.swiper-container {
    float: left;
    position: relative;
    width: 730px;
    height: 466px;
    margin-left: 200px;
}

.right {
    float: right;
    width: 249px;
    height: 467px;
}

.news {
    width: 247px;
    border: 1px solid #e4e4e4;
    border-bottom: 0;
}

.title {
    height: 35px;
    color: #333333;
    font-size: 14px;
    margin: 0 7px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 35px;
}

.title em {
    float: left;
}

.title span {
    float: right;
}

.news-list {
    font-size: 12px;
    line-height: 25px;
    text-align: center;
    color: #333;
    border-bottom: 1px solid #e4e4e4;
}

.news-list li {
    height: 30px;
}

.news-list li span {
    font-weight: 600;
}

.lift-item {
    float: left;
    width: 61px;
    border-left: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    text-align: center;
}

.lift-item:nth-child(4n + 4) {
    border-right: 1px solid #e4e4e4;
}

.lift-item i {
    display: block;
    height: 40px;
    background: url("@/assets/Home/icons.png") no-repeat;
}

.ads img {
    width: 249px;
    margin-top: 10px;
}
</style>
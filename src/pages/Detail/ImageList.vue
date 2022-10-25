<template>
    <div class="image-list">
        <!--下方的缩略图-->
        <div class="specScroll">
            <!--左按钮-->
            <a class="prev">&lt;</a>
            <div class="swiper-container" ref="swiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(img, index) in skuImageList" :key="img.id">
                        <img :src="img.imgUrl" :class="{active: curIndex == index}" @click="changeCurIndex(index)">
                    </div>
                </div>
            </div>
            <!--右按钮-->
            <a class="next">&gt;</a>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    name: "ImageList",
    data() {
        return {
            curIndex: 0
        }
    },
    props: {
        skuImageList: {
            type: Array,
            default: () => []
        }
    },
    watch: {
        skuImageList() {
            this.$nextTick(() => {
                new Swiper(this.$refs.swiper, {
                    // 如果需要前进后退按钮
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev',
                    },
                    //设置网格组件的参数来启用网格功能
                    slidesPerView: 5
                });
            })
        }
    },
    methods: {
        changeCurIndex(index) {
            this.curIndex = index;
            this.$bus.$emit("changePic", this.skuImageList[index].imgUrl);
        }
    }
}
</script>

<style scoped lang="less">
.image-list {
    float: left;
    width: 402px;
    position: relative;

    .specScroll {
        margin-top: 5px;
        width: 100%;
        overflow: hidden;

        .prev, .next {
            text-align: center;
            width: 10px;
            height: 54px;
            line-height: 54px;
            border: 1px solid #CCC;
            background: #EBEBEB;
            cursor: pointer;
        }

        .prev {
            float: left;
        }

        .next {
            float: right;
        }
    }

    .swiper-container {
        height: 56px;
        width: 378px;
        box-sizing: border-box;
        display: inline-block;
        padding: 0 6px;

        .swiper-slide {
            width: 56px;
            height: 56px;
            padding: 0 9px;

            img {
                width: 100%;
                height: 100%;
                border: 1px solid #ccc;
                padding: 2px 0;
                width: 50px;
                height: 50px;
                display: inline-block;
                cursor: pointer;

                &.active {
                    border: 2px solid #f60;
                    padding: 1px;
                }
            }
        }

        .swiper-button-next {
            left: auto;
            right: 0;
        }
    }
}
</style>
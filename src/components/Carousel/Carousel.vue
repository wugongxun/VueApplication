<template>
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="img in list" :key="img.id">
                <img :src="img.imgUrl">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from "swiper";

export default {
    name: "Carousel",
    props: ["list"],
    watch: {
        list: {
            immediate: true,//初始化时让handler调用一下
            handler() {
                this.$nextTick(() => {
                    new Swiper(this.$refs.swiper, {
                        autoplay: true,//自动播放
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }
                    });
                });
            }
        }
    }
}
</script>

<style scoped>
    .swiper-container .swiper-wrapper .swiper-slide img {
        height: 100%;
    }
</style>
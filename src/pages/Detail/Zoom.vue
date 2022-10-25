<template>
    <!-- 左侧放大镜区域 -->
    <div class="zoom">
        <!--放大镜效果-->
        <div class="preview">
            <div class="jqzoom" @mousemove="moveZoom" @mouseenter="showZoom = true" @mouseleave="showZoom = false">
                <img :src="skuDefaultImg"/>
                <div class="mask" ref="mask" v-show="showZoom"></div>
            </div>
            <div class="maxbox" v-show="showZoom">
                <img :src="skuDefaultImg" ref="bigImg"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Zoom",
    props: ["skuDefaultImg"],
    data() {
        return {
            showZoom: false
        }
    },
    methods: {
        moveZoom(event) {
            let mask = this.$refs.mask;
            let bigImg = this.$refs.bigImg;
            let left = event.offsetX - mask.offsetWidth / 2;
            let top = event.offsetY - mask.offsetHeight / 2;
            left = left < 0 ? 0 : left;
            left = left > event.target.width - mask.offsetWidth ? event.target.width - mask.offsetWidth : left;
            top = top < 0 ? 0 : top;
            top = top > event.target.height - mask.offsetHeight ? event.target.height - mask.offsetHeight : top;
            mask.style.left = left + "px";
            mask.style.top = top + "px";
            bigImg.style.left = -left * 2 + "px";
            bigImg.style.top = -top * 2 + "px";
        }
    },
    mounted() {
        this.$bus.$on("changePic", imgUrl => {
            this.$emit("update:skuDefaultImg", imgUrl);
        });
    }
}
</script>

<style scoped lang="less">
.zoom {
    float: left;
    width: 400px;
    position: relative;

    .preview {
        width: 400px;
        height: 400px;
        border: 1px solid #DFDFDF;

        .jqzoom {
            cursor: pointer;
            width: 400px;
            height: 400px;
            position: relative;

            img {
                width: 100%;
            }

            .mask {
                width: 200px;
                height: 200px;
                background: rgba(95, 218, 95, 0.3);
                position: absolute;
                left: 0;
                top: 0;
                border: 1px solid #e4e4e4;
                pointer-events: none;
            }
        }

        .maxbox {
            width: 400px;
            height: 400px;
            position: absolute;
            left: 410px;
            top: 0px;
            overflow: hidden;
            z-index: 20;
            border: 1px solid #ddd;

            img {
                position: absolute;
                width: 800px;
                height: 800px;
                display: block;
            }
        }
    }
}
</style>
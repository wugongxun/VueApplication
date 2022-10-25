<template>
    <div>
        <Header></Header>
        <router-view></router-view>
        <Footer v-show="$route.meta.showFooter"></Footer>
    </div>
</template>

<script>
    import Header from "@/components/Header/Header";
    import Footer from "@/components/Footer/Footer";

    export default {
        name: 'App',
        components: {Header, Footer},
        mounted() {
            this.$store.dispatch("home/categoryList");
            this.$store.dispatch("home/bannerList");
        }
    }
</script>
<style>
/*内外边距清零*/
* {
    margin: 0;
    padding: 0;
}
/*让em和i的文字不倾斜*/
em, i {
    font-style: normal;
}
/*去掉li的小圆点*/
li {
    list-style: none;
}
img {
    /*低版本浏览器如果图片包含了链接外面会有边框的问题*/
    border: 0;
    /*取消图片底侧有空白缝隙*/
    vertical-align: middle;
}
/*鼠标经过button的时候，编程小手*/
button {
    cursor: pointer;
}
/*修改所有链接的颜色和取消下划线*/
a {
    text-decoration: none;
    cursor: pointer;
}
body {
    /*抗锯齿形，让文字显示更清晰*/
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    color: #333;
}
/*清除浮动*/
.clearfix::after {
    visibility: hidden;
    clear: both;
    display: block;
    content: ".";
    height: 0;
}
.clearfix {
    *zoom: 1;
}
.w {
    width: 1200px;
    margin: 0 auto;
}
/*删除input的样式*/
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
}
</style>

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";

Vue.use(VueRouter);

//重写push和replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}

export default new VueRouter({
    //配置路由
    routes,
    //让路由跳转之后，滚动条停留在最上面
    scrollBehavior(to, from, savedPosition) {
        return {y: 0}
    }
})
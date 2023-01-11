import Vue from "vue";
import VueRouter from "vue-router";
import routes from "@/router/routes";
import store from "@/store";

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

let router = new VueRouter({
    //配置路由
    routes,
    //让路由跳转之后，滚动条停留在最上面
    scrollBehavior(to, from, savedPosition) {
        return {y: 0}
    }
});

//全局路由守卫
router.beforeEach(async (to, from, next) => {
    if (localStorage.getItem("TOKEN")) {
        if (to.path != "/login") {
            if (!store.state.user.userInfo.name) {
                try {
                    //有TOKEN正常进入非login页面，如果没有userInfo，先获取userInfo
                    await store.dispatch("user/toUserInfo");
                } catch (e) {
                    //出现异常，TOKEN过期，删除TOKEN
                    await store.dispatch("user/toLogout");
                }
            }
            next();
        } else {
            //有登录TOKEN，不让再次进login页面，跳转到首页
            next("/home");
        }
    } else {
        let path = to.path;
        //未登录去交易页，支付页，订单页，跳转到登录页
        if (path.indexOf("trade") != -1 || path.indexOf("pay") != -1 || path.indexOf("center") != -1) {
            next("/login?redirect=" + path);
        } else {
            next();
        }
    }
});

export default router;
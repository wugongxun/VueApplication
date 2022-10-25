import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav/TypeNav";
import store from "@/store";
import "@/mock/mockServe";
import "swiper/css/swiper.css";
import Carousel from "@/components/Carousel/Carousel";
import "@/assets/iconfont.css"
import Pagination from "@/components/Pagination/Pagination";

Vue.config.productionTip = false

Vue.component(TypeNav.name, TypeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

new Vue({
  render: h => h(App),
  //注册路由
  router,
  //注册仓库
  store,
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app');

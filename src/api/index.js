//对所有的API接口统一管理
import ajax from "@/api/ajax";
import mock from "@/api/mock";

//三级联动接口
export const reqCategoryList = () =>
    ajax({url: "/product/getBaseCategoryList", method: "get"});

//轮播图接口
export const reqBannerList = () =>
    mock({url: "/banner", method: "get"});

//floor数据接口
export const reqFloorList = () =>
    mock({url: "/floor", method: "get"});

//搜索页list数据接口
export const reqSearchList = (params) =>
    ajax({
        url: "/list",
        method: "post",
        data: params
    });

export const reqGoodsDetail = (goodsId) => ajax({url: "/item/" + goodsId, method: "get"});

//添加商品到购物车
export const reqAddOrUpdateCart = (skuId, skuNum) => ajax({url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post"});

//获取购物车列表
export const reqCartList = () => ajax({url: "/cart/cartList", method: "get"});

//删除购物车商品
export const reqDeleteCart = (skuId) => ajax({url: `/cart/deleteCart/${skuId}`, method: "delete"});

//切换商品选中状态
export const reqCheckCart = (skuId, isChecked) => ajax({url: `/cart/checkCart/${skuId}/${isChecked}`, method: "get"});
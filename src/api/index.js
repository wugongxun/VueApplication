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

//获取验证码
export const reqAuthCode = (phone) => ajax({url: `/user/passport/sendCode/${phone}`, method: "get"});

//注册
export const reqRegister = (params) => ajax({
    url: "/user/passport/register",
    method: "post",
    data: params
});

//登录
export const reqLogin = (params) => ajax({
    url: `/user/passport/login`,
    data: params,
    method: "post"
});

//获取用户信息
export const reqUserInfo = () => ajax({url: "/user/passport/auth/getUserInfo", method: "get"});

//退出登录
export const reqLogout = () => ajax({url: "/user/passport/logout", method: "get"});

//获取用户地址信息
export const reqUserAddress = () => ajax({url: "/user/userAddress/auth/findUserAddressList", method: "get"});

//获取商品清单
export const reqOrderInfo = () => ajax({url: "/order/auth/trade", method: "get"});

//提交订单
export const reqSubmitOrder = (tradeNo, data) => ajax({
    url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
    data,
    method: "post"
});

//获取支付订单信息
export const reqPaymentInfo = (orderId) => ajax({url: `/payment/weixin/createNative/${orderId}`, method: "get"});

//获取支付订单状态
export const reqPaymentStatus = (orderId) => ajax({url: `/payment/weixin/queryPayStatus/${orderId}`, method: "get"});

//获取我的订单列表
export const reqMyOrderList = (page, limit) => ajax({url: `/order/auth/${page}/${limit}`, method: "get"});

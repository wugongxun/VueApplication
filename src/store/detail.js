import {reqAddOrUpdateCart, reqGoodsDetail} from "@/api";

const actions = {
    async goodsDetail(context, goodsId) {
        let res = await reqGoodsDetail(goodsId);
        if (res.code == 200) {
            context.commit("GOODSDETAIL", res.data);
        }
    },
    async addOrUpdateCart(context, {skuId, skuNum}) {
        await reqAddOrUpdateCart(skuId, skuNum);
    }
};
const mutations = {
    GOODSDETAIL(state, goodsDetail = {}) {
        state.goodsDetail = goodsDetail;
    }
};
const state = {
    goodsDetail: {}
};
const getters = {
    categoryView(state) {
        return state.goodsDetail.categoryView || {};
    },
    skuInfo(state) {
        return state.goodsDetail.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodsDetail.spuSaleAttrList || [];
    }
}

export default {
    namespaced: true,
    actions, mutations, state, getters
}
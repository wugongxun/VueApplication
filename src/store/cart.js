import {reqCartList, reqCheckCart, reqDeleteCart} from "@/api";

const actions = {
    async getCartList({commit}) {
        let res = await reqCartList();
        if (res.code == 200) {
            commit("CARTLIST", res.data);
        }
    },
    async deleteCart({commit}, skuId) {
        await reqDeleteCart(skuId);
    },
    async updateCheckedById({commit}, {skuId, isChecked}) {
        await reqCheckCart(skuId, isChecked);
    },
    deleteAllChecked({dispatch, getters}) {
        let promiseAll = []
        getters.cartList[0].cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch("deleteCart", item.skuId) : "";
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    },
    updateAllCheckedAction({dispatch, getters}, isChecked) {
        let promiseAll = [];
        getters.cartList[0].cartInfoList.forEach(item => {
            let promise = item.isChecked == isChecked ? "" : dispatch("updateCheckedById", {skuId: item.skuId, isChecked});
            promiseAll.push(promise);
        });
        return Promise.all(promiseAll);
    }
};
const mutations = {
    CARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};
const state = {
    cartList: []
};
const getters = {
    cartList(state) {
        return state.cartList || [];
    }
};

export default {
    namespaced: true,
    actions, mutations, state, getters
}
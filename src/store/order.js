import {reqMyOrderList} from "@/api";

const actions = {
    async toMyOrderList({commit}, {page, limit}) {
        let res = await reqMyOrderList(page, limit);
        if (res.code == 200) {
            commit("TOMYORDERLIST", res.data);
        } else {
            return Promise.reject(new Error(res.message));
        }
    }
};
const mutations = {
    TOMYORDERLIST(state, myOrderInfo) {
        state.myOrderInfo = myOrderInfo;
    }
};
const state = {
    myOrderInfo: {}
};
const getters = {};

export default {
    namespaced: true,
    actions, mutations, state, getters
}
import {reqOrderInfo, reqUserAddress} from "@/api";

const actions = {
    async toUserAddress({commit}) {
        let res = await reqUserAddress();
        if (res.code == 200) {
            commit("TOUSERADDRESS", res.data);
        } else {
            return Promise.reject(new Error(res.message));
        }
    },
    async toOrderInfo({commit}) {
        let res = await reqOrderInfo();
        if (res.code == 200) {
            commit("TOORDERINFO", res.data);
        } else {
            return Promise.reject(new Error(res.message));
        }
    }
};
const mutations = {
    TOUSERADDRESS(state, userAddress) {
        state.userAddress = userAddress;
    },
    TOORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    }
};
const state = {
    userAddress: [],
    orderInfo: {}
};
const getters = {};

export default {
    namespaced: true,
    actions, mutations, state, getters
}
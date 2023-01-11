import {reqPaymentInfo, reqPaymentStatus} from "@/api";

const actions = {
    async toPaymentInfo({commit}, orderId) {
        let res = await reqPaymentInfo(orderId);
        if (res.code == 200) {
            commit("TOPAYMENTINFO", res.data);
        } else {
            return Promise.reject(new Error(res.message));
        }
    },
    async toPaymentStatus({commit}, orderId) {
        let res = await reqPaymentStatus(orderId);
        commit("TOPAYMENTSTATUS", res.code);
    }
}
const mutations = {
    TOPAYMENTINFO(state, paymentInfo) {
        state.paymentInfo = paymentInfo;
    },
    TOPAYMENTSTATUS(state, code) {
        state.code = code;
    }
}
const state = {
    paymentInfo: {},
    code: ""
}
const getters = {}

export default {
    namespaced: true,
    actions, mutations, state, getters
}
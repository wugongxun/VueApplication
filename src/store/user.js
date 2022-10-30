import {reqAuthCode, reqLogin, reqLogout, reqRegister, reqUserInfo} from "@/api";

const actions = {
    async toAuthCode({commit}, phone) {
        let res = await reqAuthCode(phone);
        if (res.code == 200) {
            commit("TOAUTHCODE", res.data);
        }
    },
    async toRegister({commit}, params) {
        let res = await reqRegister(params);
        if (res.code != 200) {
            return Promise.reject(new Error(res.message));
        }
    },
    async toLogin({commit}, params) {
        let res = await reqLogin(params);
        if (res.code == 200) {
            localStorage.setItem("TOKEN", res.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error(res.message));
        }
    },
    async toUserInfo({commit}) {
        let res = await reqUserInfo();
        if (res.code == 200) {
            commit("TOUSERINFO", res.data);
            return "ok";
        } else {
            return Promise.reject(new Error(res.message));
        }
    },
    async toLogout({commit}) {
        let res = await reqLogout();
        if (res.code == 200) {
            commit("TOLOGOUT");
            localStorage.removeItem("TOKEN");
            return "ok"
        } else {
            return Promise.reject(new Error(res.message));
        }
    }
};
const mutations = {
    TOAUTHCODE(state, authCode) {
        state.authCode = authCode;
    },
    TOUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    TOLOGOUT(state) {
        state.userInfo = {};
    }
};
const state = {
    authCode: "",
    userInfo: {}
};
const getters = {};

export default {
    namespaced: true,
    actions, mutations, state, getters
}
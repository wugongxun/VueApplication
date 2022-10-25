import {reqSearchList} from "@/api";

//准备actions-用于响应组件中的动作
const actions = {
    async searchList(context, params={}) {
        let res = await reqSearchList(params);
        if (res.code == 200) {
            context.commit("SEARCHLIST", res.data);
        }
    }
};

//准备mutations-用于操作数据(state)
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};

//简化数据获取
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || [];
    },
    attrsList(state) {
        return state.searchList.attrsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList || [];
    },
    total() {
        return state.searchList.total;
    }
}

//准备state-用于存储数据
const state = {
    searchList: {}
};

export default {
    namespaced: true,
    actions, mutations, state, getters
}
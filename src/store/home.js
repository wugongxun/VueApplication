import {reqCategoryList, reqBannerList, reqFloorList} from "@/api";

//准备actions-用于响应组件中的动作
const actions = {
    async categoryList(context) {
        let res = await reqCategoryList();
        if (res.code == 200) {
            context.commit("CATEGORYLIST", res.data);
        }
    },
    async bannerList(context) {
        let res = await reqBannerList();
        if (res.code == 200) {
            context.commit("BANNERLIST", res.data);
        }
    },
    async floorList(context) {
        let res = await reqFloorList();
        if (res.code == 200) {
            context.commit("FLOORLIST", res.data);
        }
    }
};

//准备mutations-用于操作数据(state)
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
    FLOORLIST(state, floorList) {
        state.floorList = floorList;
    }
};

//准备state-用于存储数据
const state = {
    categoryList: [],
    bannerList: [],
    floorList: []
};

export default {
    namespaced: true,
    actions, mutations, state
}
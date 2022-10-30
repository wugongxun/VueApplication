<template>
    <div class="header">
        <div class="top">
            <div class="container">
                <div class="login">
                    <p>尚品汇欢迎您!</p>
                    <p v-if="!userInfo.name">
                        请<router-link to="/login">登录</router-link>
                        <router-link to="/register" class="register">免费注册</router-link>
                    </p>
                    <p v-else>
                        <a>{{userInfo.nickName}}</a>
                        <a class="register" @click="logout">退出登录</a>
                    </p>
                </div>
                <div class="type-list">
                    <ul>
                        <li><a href="#">我的订单</a></li>
                        <li><router-link to="/shopcart">我的购物车</router-link></li>
                        <li><a href="#">我的尚品汇</a></li>
                        <li><a href="#">尚品汇会员</a></li>
                        <li><a href="#">企业采购</a></li>
                        <li><a href="#">关注尚品汇</a></li>
                        <li><a href="#">合作招商</a></li>
                        <li><a href="#">商家后台</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="bottom">
            <router-link to="/home" class="logo">
                <img src="@/assets/Header/logo.png" alt="">
            </router-link>
            <div class="search">
                <input type="text" v-model="keyword"  @keydown.enter="search">
                <button @click="search">搜索</button>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "Header",
    data() {
        return {
            keyword: ""
        }
    },
    methods: {
        search() {
            let location = {name: "search", params: {keyword: this.keyword}};
            if (this.$route.query) {
                location.query = this.$route.query;
            }
            this.$router.push(location);
        },
        async logout() {
            try {
                await this.$store.dispatch("user/toLogout");
                this.$router.push({name: "home"});
            } catch (e) {
                alert(e.message);
            }
        }
    },
    computed: {
        ...mapState("user", ["userInfo"])
    },
    mounted() {
        this.$bus.$on("removeKeyword", () => {
            this.keyword = "";
        });
    }
}
</script>

<style scoped>
    .top {
        background-color: #eaeaea;
    }
    .container {
        height: 30px;
        width: 1200px;
        font-size: 12px;
        margin: auto;
    }
    .container a:hover {
        color: #4f4cd4;
    }
    .login {
        float: left;
        height: 30px;
        line-height: 30px;
        color: #333;
    }
    .login a {
        margin-left: 5px;
    }
    .login p:first-child {
        float: left;
        margin-right: 5px;
    }
    .login p:last-child {
        float: right;
    }
    .register {
        padding: 0 5px;
        text-align: center;
        border-left: 1px solid #b3aeae;
    }
    .type-list {
        float: right;
        width: 600px;
        line-height: 30px;
    }
    .type-list ul li {
        display: inline-block;
    }
    .type-list ul li a {
        padding: 0 10px;
        border-right: 1px solid #b3aeae;
    }
    .type-list ul li:last-child a {
        border: 0px;
    }
    .bottom {
        width: 1200px;
        height: 100px;
        margin: auto;
    }
    .logo {
        position: relative;
        float: left;
        width: 265px;
        height: 100%;
    }
    .logo img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .search {
        float: right;
        margin-top: 30px;
    }
    .search input {
        float: left;
        height: 30px;
        width: 490px;
        outline: none;
        border: 3px solid #ea4a36;
        padding: 0 5px;
        font-size: 16px;
    }
    .search button {
        float: right;
        height: 36px;
        width: 60px;
        background-color: #ea4a36;
        border: 0;
        color: #fff;
    }
</style>
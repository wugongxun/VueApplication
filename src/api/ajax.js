//对axios进行二次封装
import axios from "axios";
//使用nprogress控制进度条
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const requests = axios.create({
    baseURL: "/api",
    timeout: 5000
});

//请求拦截器
requests.interceptors.request.use(config => {
    //进度条的开始
    nprogress.start();
    let uuid_token = sessionStorage.getItem("UUIDTOKEN");
    if (uuid_token) {
        config.headers.userTempId = uuid_token;
    }
    let token = localStorage.getItem("TOKEN");
    if (token) {
        config.headers.token = token;
    }
    return config;
});

//响应拦截器
requests.interceptors.response.use(res => {
    //进度条的结束
    nprogress.done();
    return res.data;
}, err => {
    return Promise.reject(new Error("fail"));
});

export default requests;
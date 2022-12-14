import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Search from "@/pages/Search/Search";
import Detail from "@/pages/Detail/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess/AddCartSuccess";
import ShopCart from "@/pages/ShopCart/ShopCart";
import Trade from "@/pages/Trade/Trade";
import Pay from "@/pages/Pay/Pay";
import PaySuccess from "@/pages/Pay/PaySuccess";
import Center from "@/pages/Center/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

export default [
    {
        path: "/home",
        name: "home",
        component: Home,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/login",
        name: "login",
        component: Login,
        meta: {
            showFooter: false
        }
    },
    {
        path: "/register",
        name: "register",
        component: Register,
        meta: {
            showFooter: false
        }
    },
    {
        path: "/search/:keyword?",
        name: "search",
        component: Search,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/detail/:goodsId",
        name: "detail",
        component: Detail,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/addcartsuccess",
        name: "addcartsuccess",
        component: AddCartSuccess,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: ShopCart,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/paySuccess",
        name: "paySuccess",
        component: PaySuccess,
        meta: {
            showFooter: true
        }
    },
    {
        path: "/center",
        component: Center,
        children: [
            {
                path: "myOrder",
                name: "myOrder",
                component: MyOrder
            },
            {
                path: "groupOrder",
                name: "groupOrder",
                component: GroupOrder
            },
            {
                path: "",
                redirect: "myOrder"
            }
        ],
        meta: {
            showFooter: true
        }
    },
    {
        path: "*",
        redirect: "/home"
    }
]
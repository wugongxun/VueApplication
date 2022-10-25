<template>
    <div class="footer">
        <div class="container">
            <div class="footer-list clearfix">
                <div class="footer-item">
                    <h4>购物指南</h4>
                    <ul>
                        <li>购物流程</li>
                        <li>会员介绍</li>
                        <li>生活旅行/团购</li>
                        <li>常见问题</li>
                        <li>购物指南</li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>配送方式</h4>
                    <ul>
                        <li>上门自提</li>
                        <li>211限时达</li>
                        <li>配送服务查询</li>
                        <li>配送费收取标准</li>
                        <li>海外配送</li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>支付方式</h4>
                    <ul>
                        <li>货到付款</li>
                        <li>在线支付</li>
                        <li>分期付款</li>
                        <li>邮局汇款</li>
                        <li>公司转账</li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>售后服务</h4>
                    <ul>
                        <li>售后政策</li>
                        <li>价格保护</li>
                        <li>退款说明</li>
                        <li>返修/退换货</li>
                        <li>取消订单</li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>特色服务</h4>
                    <ul>
                        <li>夺宝岛</li>
                        <li>DIY装机</li>
                        <li>延保服务</li>
                        <li>尚品汇E卡</li>
                        <li>尚品汇通信</li>
                    </ul>
                </div>
                <div class="footer-item">
                    <h4>帮助中心</h4>
                    <img src="@/assets/Footer/wx_cz.jpg" alt="">
                </div>
            </div>
            <div class="copyright">
                <ul class="help-link">
                    <li>关于我们</li>
                    <li>联系我们</li>
                    <li>关于我们</li>
                    <li>商家入驻</li>
                    <li>营销中心</li>
                    <li>友情链接</li>
                    <li>关于我们</li>
                    <li>营销中心</li>
                    <li>友情链接</li>
                    <li>关于我们</li>
                </ul>
                <p>地址：北京市昌平区宏福科技园综合楼6层</p>
                <p>京ICP备19006430号</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
    .footer {
        background-color: #eaeaea;
    }
    .container {
        width: 1200px;
        margin: auto;
    }
    .footer-list {
        height: 170px;
        padding: 20px;
        border-bottom: 1px solid #e4e1e1;
    }
    .footer-list .footer-item {
        float: left;
        width: 190px;
        height: 130px;
        font-size: 14px;
    }
    .footer-list .footer-item img {
        width: 121px;
        height: 145px;
    }
    .footer-list .footer-item h4 {
        color: #333333;
    }
    .copyright {
        padding: 20px;
        text-align: center;
    }
    .help-link li {
        display: inline-block;
        width: 80px;
        font-size: 12px;
        color: #333333;
        border-right: 1px solid #b3aeae;
    }
    .help-link li:last-child {
        border: 0;
    }
    .copyright p {
        margin-top: 5px;
        font-size: 12px;
        color: #333;
    }
</style>
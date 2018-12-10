<template>
    <div class="login">
        <div>
            <p>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步更可以发布微头条</p>
            <a href="javascript:;" class="btn btn-danger">登录</a>
            <ul>
                <li>
                    <a href="">
                        <img src="../../../assets/images/icon_qq_pc.5baa07b.svg" alt="">
                        <span>QQ</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <img src="../../../assets/images/wechat.svg" alt="">
                        <span>微信</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style scoped>
    .login {
        width: 100%;
        margin: 16px 0;
        padding: 20px;
        border: none;
        background-color: #f4f5f6;
    }

    .login > div {
        border: 1px solid #e8e8e8;
        text-align: center;
        background-color: #ffffff;
        padding: 20px 28px 15px;
    }

    p {
        font-size: 12px;
        color: #777777;
        margin-bottom: 15px;
    }

    .btn {
        width: 100%;
        background-color: #ed4040;
        color: #ffffff;
        padding: 9px 0;
    }

    ul {
        padding: 16px 0 0 0;
        margin-bottom: 0;
    }

    li {
        display: inline-block;
        padding: 0 15px;
    }

    img {
        width: 35px;
        height: 35px;
    }

    span {
        display: block;
        padding-top: 5px;
    }

    ul li a {
        color: #777777;
        font-size: 12px;
    }

    .btn:hover, ul li a:hover {
        opacity: .9;
    }
</style>

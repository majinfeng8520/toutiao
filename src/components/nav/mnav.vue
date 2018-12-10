<template>
    <div class="content">
        <div class="logo">
            <a href="">
                <img :src="logoUrl" alt="">
            </a>
        </div>
        <ul>
            <li v-for="(item, index) in navList" @click="addClass(index)" :class="current == index ? 'active':''">
                <router-link to="">
                    {{ item }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mnav",
        data() {
            return {
                logoUrl: require('../../assets/images/nav/logo.png'),
                navList: ['推荐', '阳光宽频', '热点', '图片', '科技', '娱乐', '游戏', '体育', '汽车', '财经', '搞笑', '更多'],
                // 定义一个current为0
                current: 0
            }
        },
        methods: {
            // 点击以后的索引值赋值current内
            addClass: function (index) {
                this.current = index;
            }
        }
    }
</script>

<style scoped>
    a {
        display: block;
        width: 110px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        margin-bottom: 2px;
        border-radius: 4px;
        color: #000000;
        font-size: 16px;
        transition: color, background-color .3s;
        text-decoration: none;
    }

    .logo a {
        display: block;
        margin-bottom: 16px;
        height: 28px;
        line-height: 28px;
        font-size: 0;
    }

    .logo a img {
        height: 27px;
        width: 100%;
    }

    .content ul {
        padding-left: 0;
    }

    .content ul li a:hover {
        background: #ed4040;
        color: #ffffff;
    }

    .active a {
        background: #ed4040;
        color: #fff;
    }
</style>

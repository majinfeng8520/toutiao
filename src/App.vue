<template>
    <div id="app">
        <Mheader class="header"/>
        <div class="main">
            <div>
                <Mnav class="nav" :class="navBarFixed == true ? 'navBarWrap' :''"/>
            </div>
            <router-view class="mainBanner">
            </router-view>
            <div class="right">
                <Advertising/>
            </div>
        </div>
    </div>
</template>

<script>
    import Mheader from '@/components/header/mhead'
    import Mnav from '@/components/nav/mnav'
    import Advertising from '@/components/advertising/advertising'
    // import Recommend from '@/components/recommend/recommend'

    export default {
        name: 'App',
        components: {
            Mheader,
            Mnav,
            Advertising
        },
        data() {
            return {
                navBarFixed: ''
            }
        },
        methods: {
            // 定义方法
            handleScroll: function () {
                let scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
                // console.log(scrollTop);
                // 判断滑动是否超过34px 如果超过更改navBarFixed
                if (scrollTop > 34) {
                    this.navBarFixed = true;
                } else {
                    this.navBarFixed = false;
                }
            },
        },
        // 滚动监听事件
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style>
    #app {
        font-family: PingFang SC, Hiragino Sans GB, Microsoft YaHei, WenQuanYi Micro Hei, Helvetica Neue, Arial, sans-serif;
        height: 1000px;
        width: 100%;
    }

    a:visited {
        text-decoration: none;
    }

    a {
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
    }
    ul{
        padding-left: 0;
    }
    li {
        list-style: none;
    }

    .main {
        width: 1170px;
        margin: 16px auto 0 auto;
        position: relative;
        /*display: flex;*/
    }

    .header {
        z-index: 100;
        width: 100%;
    }

    .nav {
        display: inline-block;
        width: 110px;
        margin-right: 30px;
    }

    .navBarWrap {
        position: fixed;
        top: 0;
        z-index: 999;
    }

    .mainBanner{
        position: absolute;
        top: 0px;
        left: 140px;
        width: 660px;
    }
    .right{
        position: absolute;
        top: 0;
        right: 0;
        width: 340px;
    }
</style>

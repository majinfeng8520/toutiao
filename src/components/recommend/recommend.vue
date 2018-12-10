<template>
    <div>
        <div class="ag7-main">
            <div class="ag7-bannerslide">
                <ul class="slidebox">
                    <li v-for="(item, index) in bannerList">
                        <a :href="item.newUrl" target="_blank">
                            <img :src="item.picUrl">
                        </a>
                    </li>
                </ul>
                <div class="slideinfo">
                    <div class="slidetitle">
                        <h2></h2>
                    </div>
                    <div class="slidelist">
                        <ul>
                            <li v-for="item in bannerList" :data-h1="item.title">{{item.name}}</li>
                        </ul>
                        <span class="mask"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="recommendNews">
            <RecommendNews/>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery-1.8'
    import 'jquery-easing/dist/jquery.easing.1.3.umd.min'
    import '@/assets/js/banner/main'
    import RecommendNews from '../recommendnews/recommendnews'

    export default {
        name: "recommend",
        components:{
            RecommendNews
        },
        data(){
            return{
                bannerList:[
                    {
                        name: '要闻',
                        title: '又来了！希拉里跟特朗普杠上 节目上表态2020年要当总统',
                        picUrl: require('../../assets/images/picture/da9f0000d14d8e02db7b.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6617973868130730510/'
                    },
                    {
                        name: '社会',
                        title: '10岁娃两次遇“死神”，全身换血两次，“A”型变“B”型',
                        picUrl: require('../../assets/images/picture/daa40000a5f1ffc3f4b9.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6617752246530605575/'
                    },
                    {
                        name: '娱乐',
                        title: '韩寒黄景瑜再拍赛车手故事，曾是帅哥的沈腾如今胖成球',
                        picUrl: require('../../assets/images/picture/da9500003391549203ae.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6617720985749553677/'
                    },
                    {
                        name: '体育',
                        title: '跳水女神因长得美被国家队开除 网友：这是羡慕嫉妒恨？',
                        picUrl: require('../../assets/images/picture/da5f000809f32a88b787.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6611345567199003144/'
                    },
                    {
                        name: '军事',
                        title: '人被加特林扫射什么感觉，一组数据给你答案',
                        picUrl: require('../../assets/images/picture/da6400036ee0575338f0.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6615753721387155982/'
                    },
                    {
                        name: '明星',
                        title: '朱亚文亮相东京电影节斯文潇洒 与宋佳饰演夫妻CP感满满',
                        picUrl: require('../../assets/images/picture/daca0000a4af5ce3a362.jpeg'),
                        newUrl: 'https://www.toutiao.com/a6617753280493650439/'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    html {
        -webkit-tap-highlight-color: transparent;
        -webkit-overflow-scrolling: touch;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -ms-overflow-style: -ms-autohiding-scrollbar
    }

    body {
        background-color: #434343
    }

    body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, code, form, fieldset, legend, input, textarea, p, blockquote, th, td {
        margin: 0;
        padding: 0
    }

    table {
        border-collapse: collapse;
        border-spacing: 0
    }

    fieldset, img {
        border: 0
    }

    address, caption, cite, code, dfn, em, strong, th, var {
        font-style: normal;
        font-weight: 400
    }

    li {
        list-style: none
    }

    caption, th {
        text-align: left
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: 100%;
        font-weight: 400
    }

    .ag7-main {
        width: 660px;
        /*margin: 0 auto;*/
    }

    .ag7-main .phone-index-banner {
        display: none
    }

    .ag7-bannerslide {
        position: relative;
        margin-bottom: 6px
    }

    .ag7-bannerslide .slidebox {
        position: relative;
        height: 300px
    }

    .ag7-bannerslide .slidebox li {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0
    }

    .ag7-bannerslide a img {
        display: block;
        width: 600px;
        height: 300px
    }

    .ag7-bannerslide .slideinfo {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 10
    }

    .ag7-bannerslide .slidetitle {
        width: 600px;
        color: #fff;
        background: -webkit-linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)); /* Firefox 3.6 - 15 */
        background: linear-gradient(rgba(0,0,0,.1), rgba(0,0,0,.8)); /* 标准的语法 */
    }

    .ag7-bannerslide .slidetitle h2 {
        font-size: 20px;
        height: 44px;
        line-height: 44px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 15px;
        font-weight: 700;
    }

    .ag7-bannerslide .slidelist {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 60px;
        height: 300px;
        color: #fff;
        font-size: 14px;
        background-color: #222
    }

    .ag7-bannerslide .slidelist ul {
        position: absolute;
        z-index: 10;
        width: 100%;
        text-align: center
    }

    .ag7-bannerslide .slidelist ul li {
        width: 100%;
        line-height: 40px;
        margin: 5px 0 10px;
        cursor: pointer
    }

    .ag7-bannerslide .slidelist .mask {
        width: 70px;
        height: 40px;
        position: absolute;
        left: -10px;
        top: 5px;
        background: url(../../assets/images/banner/mask_03.png) no-repeat center center;
        display: block
    }
</style>

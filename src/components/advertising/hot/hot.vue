<template>
    <div class="hot">
        <div>
            <img :src="titleUrl" alt="" class="pull-left">
            <a href="" class="pull-right">更多<span class="icon icon-right"></span></a>
            <div class="clearfix"></div>
        </div>
        <ol>
            <li v-for="(item, index) in hotTitles">
                <a href="">
                    {{ index +1 }}&nbsp{{ item.title }}
                </a>
            </li>
        </ol>
    </div>
</template>

<script>
    export default {
        name: "hot",
        data() {
            return {
                titleUrl: require('../../../assets/images/icon_tt_hot_search.4ccd360.png'),
                hotTitles: [
                    {
                        title: '江疏影怒斥京东'
                    },
                    {
                        title: '陈冠希发文'
                    },
                    {
                        title: '马化腾回应'
                    },
                    {
                        title: '直播泡油漆澡溺亡'
                    },
                    {
                        title: '学区房降价没人买'
                    },
                    {
                        title: '炎亚纶男友b澄清'
                    },
                    {
                        title: '父子拔枪互射儿死亡'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .hot {
        border-top: 2px solid #ed4040;
        padding: 22px 20px 10px;
        background-color: #f4f5f6;
    }

    a {
        color: #000000;
        font-size: 14px;
    }

    a span.icon {
        font-size: 10px;
    }

    .hot > div {
        margin-bottom: 5px;
    }

    .hot img.pull-left {
        height: 17px;
        width: 66px;
    }

    ol {
        padding-left: 0;
        margin-bottom: 0;
    }

    ol li a {
        display: block;
        padding: 12px 0;
        transition: color, .4s;
    }

    ol li a:hover {
        color: #ed4040;
    }

    ol li {
        border-bottom: 1px solid #e8e8e8;
    }
</style>

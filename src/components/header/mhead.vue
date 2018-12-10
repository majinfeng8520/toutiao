<template>
    <div class="row">
        <ul class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clearfix">
            <li class="pull-left bder">
                <a href="">
                    下载APP
                </a>
            </li>
            <li class="pull-left weather-content" @mouseover="ShowWeather" @mouseout="HideWeather">
                <a href="">
                    <span>北京</span>
                    <span>晴</span>
                    <span>{{ latelyWeather[0].temperature }}</span>
                    <span class="icon icon-down"></span>
                </a>
                <div v-show="weather" class="weather">
                    <div class="w-weather">
                        <span>
                            <a href="">
                                北京
                            </a>
                        </span>
                        <span>西北风</span>
                        <span>优 34</span>
                    </div>
                    <ul>
                        <li v-for="(item, index) in latelyWeather">
                            <span>{{item.day}}</span>
                            <div>
                                <img :src="item.dayWeather" alt="">
                            </div>
                            <span>{{item.temperature}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <ul class="col-lg-6 col-md-6 col-sm-6 col-xs-6 clearfix">
            <li class="pull-right">
                <a href="">
                    头条产品
                </a>
            </li>
            <li class="pull-right bder">
                <a href="https://www.toutiao.com/complain/" target="_blank">
                    侵权投诉
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "mhead",
        data() {
            return {
                weather: false,
                latelyWeather: [
                    {
                        day: '今天',
                        dayWeather: require('../../assets/images/weather/cloudy.png'),
                        temperature: '3°' + ' ' + '/' + ' ' + '14°'
                    },
                    {
                        day: '明天',
                        dayWeather: require('../../assets/images/weather/fairness.png'),
                        temperature: '3°' + ' ' + '/' + ' ' + '14°'
                    },
                    {
                        day: '后天',
                        dayWeather: require('../../assets/images/weather/cloudy.png'),
                        temperature: '3°' + ' ' + '/' + ' ' + '14°'
                    }
                ]
            }
        },
        methods: {
            ShowWeather: function () {
                this.weather = true;
            },
            HideWeather: function () {
                this.weather = false;
            }
        }
    }
</script>

<style scoped>
    ul {
        margin-bottom: 0;
        line-height: 34px;
    }

    a {
        color: #ffffff;
        font-size: 14px;
    }
    .row {
        background-color: #000;
        line-height: 34px;
        margin: 0;
    }
    .clearfix{
        padding: 0;
    }
    .row > ul > li {
        display: inline-block;
        line-height: 34px;
        padding: 0 10px;
    }

    .bder {
        border-right: 1px solid #3a3a3a;
    }

    .row > ul > li a span {
        margin-right: 7px;
    }

    .weather-content {
        position: relative;
        top: 0;
        left: 0;
    }

    .weather {
        position: absolute;
        top: 34px;
        left: -1px;
        padding: 0 10px;
        color: #444;
        border: 1px solid #e8e8e8;
        background: #ffffff;
        z-index: 100;
    }

    .weather a {
        color: #406599;
        font-size: 13px;
    }

    .weather span {
        font-size: 13px;
        margin-right: 7px;
    }
    .weather .w-weather span:last-child{
        background-color: rgb(92, 191, 76);
        color: #fff;
        padding: 0 4px;
        line-height: 18px;
        height: 18px;
        border-radius: 4px;
    }

    .weather ul {
        padding-left: 0;
        display: flex;
    }

    .weather ul li {
        text-align: center;
        list-style: none;
        width: 33%;
        padding: 0 10px;
    }

    .weather ul li img {
        width: 28px;
        height: 28px;
    }
    .weather ul li span:last-child{
        white-space: nowrap;
    }

</style>

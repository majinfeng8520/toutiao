<template>
    <div>
        <ul>
            <li v-for="(item, index) in newList" class="clearfix">
                <a :href="item.newUrl" target="_blank">
                    <div class="pull-left">
                        <img :src="item.picUrl" alt="" class="newImg">
                    </div>
                    <div class="pull-right">
                        <h1>{{item.title}}</h1>
                        <span>{{item.author}}</span>
                        <span>{{item.quantity}}</span>
                    </div>
                    <div class="clear"></div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recommendnews",
        data() {
            return {
                newList:[
                    {
                        title: '习近平主持政治局会议 分析研究当前经济形势和经济工作',
                        author: '央视网新闻',
                        quantity: '11万次播放',
                        newUrl: 'https://www.toutiao.com/a6618480437788410381/',
                        picUrl: require('../../assets/images/news/new.jpeg')
                    },
                    {
                        title: '8岁男孩考试零分逗留江边不敢回家，深夜被宜宾民警救助',
                        author: '成都商报',
                        quantity: '2万次观看',
                        newUrl: 'https://www.toutiao.com/a6618841640184316420/',
                        picUrl: require('../../assets/images/news/5.jpeg')
                    },
                    {
                        title: '河北魏县：易地搬迁助脱贫',
                        author: '人民网',
                        quantity: '1万次观看',
                        newUrl: 'https://m2.people.cn/r/MV8xXzMwMzc1NDE2XzQwNjcyNV8xNTQxMDMxNjgz?source=da&tt_group_id=6618681485299810823',
                        picUrl: require('../../assets/images/news/2.jpeg')
                    },
                    {
                        title: '重庆坠江公交仍有2人失联 目前已找到的13名遇难者身份全部确认',
                        author: '人民网',
                        quantity: '9000次观看',
                        newUrl: 'https://m2.people.cn/r/MV8wXzExODI5MjMyXzE0NTZfMTU0MTExNDEzMA==?source=da&tt_group_id=6619035419570864653',
                        picUrl: require('../../assets/images/news/1.jpeg')
                    },
                    {
                        title: '男子野外拍照，回家细看照片才知自己与死神擦肩而过',
                        author: '光明网',
                        quantity: '11万次观看',
                        newUrl: 'http://m.gmw.cn/gallery/201811/02/31886382.html?tt_group_id=6619075578936967688',
                        picUrl: require('../../assets/images/news/3.jpeg')
                    },
                    {
                        title: '桂阳：千株红豆杉挂果 村民拾果酿酒',
                        author: '红网',
                        quantity: '11万次播放',
                        newUrl: 'https://www.toutiao.com/a6618815114663461389/',
                        picUrl: require('../../assets/images/news/4.jpeg')
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    a{
        color: #000000;
    }
    h1{
        font-size: 20px;
        margin: 10px 0;
    }
    li{
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid #e8e8e8;
    }
    .pull-left{
        width: 156px;
        height: 108px;
        line-height: 108px;
        overflow: hidden;
    }
    .pull-left img{
        width: 100%;
        cursor: pointer;
        transition: all 1s;
    }
    .pull-left img:hover{
        transform: scale(1.06);
    }
    .pull-right{
        width: 504px;
        padding: 0 10px;
    }
    .pull-right span{
        color: #777777;
        font-size: 14px;
    }
    .pull-right h1:hover, .pull-right span:hover{
        color: #222222;
    }
</style>

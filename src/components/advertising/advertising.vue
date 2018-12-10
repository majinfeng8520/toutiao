<template>
    <div>
        <div class="input-group">
            <input type="text" class="form-control" aria-label="..." placeholder="请输入要搜索的内容">
            <div class="input-group-btn">
                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">搜索
                </button>
            </div><!-- /btn-group -->
        </div><!-- /input-group -->
        <Login class="login"/>
        <Hot/>
    </div>
</template>

<script>
    import Login from '@/components/advertising/login/login'
    import Hot from '@/components/advertising/hot/hot'
    export default {
        name: "advertising",
        components: {
            Login,
            Hot
        }
    }
</script>

<style scoped>
    .input-group {
        height: 44px;
        margin-bottom: 16px;
    }

    .btn-default {
        background-color: #208eda;
        color: #ffffff;
        border: 1px solid #208eda;
        padding: 11px 24px;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
    }

    .form-control {
        height: 44px;
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
        padding: 3px 10px;
        background-color: #f5f6f7;
        font-size: 14px;
        border: 1px solid #e8e8e8;
        color: #1f2d3d;
    }

    ::-webkit-input-placeholder { /* WebKit browsers */
        color: #1f2d3d;
    }

    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color: #1f2d3d;
    }

    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #1f2d3d;
    }

    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #1f2d3d;
    }
    .login{
        margin-bottom: 16px;
    }
</style>

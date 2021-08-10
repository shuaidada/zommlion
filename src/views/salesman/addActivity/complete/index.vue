<template>
    <div>
        <p class="icon-style">
            <i class="cubeic-right"></i>
        </p>
        <div class="title-style">
            <p>恭喜你成功创建活动</p>
            <p>请长按并保存下方活动签到二维码</p>
        </div>
        <p class="img-style">
            <img src="https://img1.baidu.com/it/u=2877499757,3239316825&fm=224&fmt=auto&gp=0.jpg" alt="加载失败">
        </p>
        <cube-button class="submit-style" @click="$router.push({path: '/'})">点击此处返回首页</cube-button>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.icon-style {
    margin-top: 24px;
    font-size: 77px;
    color: #7AC756;
}
.title-style{
    margin: 22px 0 37px 0;
    &>p {
        font-size: 16px;
        font-weight: 600;
        line-height: 25px;
        color: #101010;
    }
    
}
.img-style>img {
    width: 264px;
}
.submit-style {
    margin: auto;
    margin-top: 37px;
    width: 160px;
    border-radius: 25px;
    background-color: #7AC756;
}
</style>
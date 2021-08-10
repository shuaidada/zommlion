<template>
    <ul class="detailsForm">
        <li class="titleBox plc-style">
            <p class="title">活动名称：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox plc-style">
            <p class="title">活动类型：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox plc-style">
            <p class="title">开始时间：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox plc-style">
            <p class="title">结束时间：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox plc-style">
            <p class="title">活动地址：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox plc-style">
            <p class="title">详情地址：</p>
            <p class="content">长沙大型活动</p>
        </li>
        <li class="titleBox">
            <p class="title">主视觉：</p>
            <p class="imgs-container">
                <img v-for="(item, index) in imgarr1" :key="index" :src="item" @click="handleImgsClick(imgarr1)">
            </p>
        </li>
        <li class="titleBox">
            <p class="title">活动流程：</p>
            <p class="imgs-container">
                <img v-for="(item, index) in imgarr1" :key="index" :src="item" @click="handleImgsClick(imgarr1)">
            </p>
        </li>
        <li class="titleBox">
            <p class="title">签到二维码：</p>
            <p class="imgs-container">
                <img v-for="(item, index) in imgarr1" :key="index" :src="item" @click="handleImgsClick(imgarr1)">
            </p>
        </li>
    </ul>
</template>
<script>
export default {
    data () {
        return {
            imgarr1: ['https://fanyi-cdn.cdn.bcebos.com/static/translation/img/header/logo_e835568.png']
        }
    },
    methods: {
        handleImgsClick (imgarr) {
            this.$createImagePreview({
                imgs: imgarr
            }).show()
        }
    }
}
</script>
<style lang="less" scoped>
.detailsForm {
    padding-top: 55px;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow-x: auto;
    box-sizing: border-box;
    .titleBox {
        margin-bottom: 10px;
        display: flex;
        min-height: 35px;
        font-size: 15px;
        border-bottom: 1px solid #e7e7e7;
        .title {
            padding-right: 5px;
            font-weight: 600;
            width: 100px;
            text-align: right;
        }
        .imgs-container {
            padding: 4px;
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            max-width: 100px;
            height: 120px;
            border-radius: 4px;
            border: 1px dashed #e7e7e7;
            &>img {
                width: 100%;
            }
        }
    }
    .plc-style {
        align-items: center;
    }
    &>li:last-child {
        border: none
    }
}

</style>
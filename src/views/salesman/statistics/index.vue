<template>
<div class="statisticsMain">
    <div class="table-li-title">
        <span>长沙2021-08-05 19:00:00小型座谈会</span>
        <span>导出表格 <i class="cubeic-arrow"></i></span>
    </div>
    <div class="table-title-style">
        <span>姓名</span>
        <span>手机号</span>
        <span>意向机型</span>
        <span>业务员</span>
        <span>施工地点</span>
    </div>
    <ul class="table-style">
        <li class="table-li-style" v-for="item in 50" :key="item">
            <span>姓名</span>
            <span>手机号</span>
            <span>意向机型</span>
            <span>业务员</span>
            <span>施工地点</span>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.statisticsMain {
    padding-top: 55px;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    box-sizing: border-box;
    background-color: #fff;
    .table-li-title {
        margin-bottom: 14px;
        padding: 0 5px;
        color: #101010;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        &>span:nth-child(1){
            font-size: 16px;
            font-weight: 600;
        }
        &>span:nth-child(2){
            font-size: 14px;
            font-weight: 600;
            color: #7AC756;
        }
    }
    .table-style {
        height: 534px;
        overflow-x: auto;
        &>li:last-child{
            border-bottom: none
        }
    }
    .table-title-style,
    .table-li-style {
        height: 48px;
        line-height: 48px;
        display: flex;
        font-size: 14px;
        color: #415058;
        box-sizing: border-box;
        border-bottom: 1px solid rgb(200, 200, 200);
        &>span {
            flex-grow: 1
        }
        &>span:nth-child(2) {
            flex-grow: 2
        }
    }

    .table-title-style>span {
        font-weight: 600;
    }
    
}
</style>
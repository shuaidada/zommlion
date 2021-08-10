<template>
    <div>
        <li class="title">2021-08-05 19:00:00 长沙座谈会</li>
        <ul class="table">
            <li>
                <p>姓名: </p>
                <p>张三</p>
            </li>
            <li>
                <p>手机号:</p>
                <p>13786614567</p>
            </li>
            <li>
                <p>意向机型:</p>
                <p>13786614567</p>
            </li>
            <li>
                <p>施工地点:</p>
                <p>13786614567</p>
            </li>
            <li>
                <p>业务员:</p>
                <p>13786614567</p>
            </li>
        </ul>
        <div class="success">
            <i class="cubeic-right"></i>
            <p class="success-title">签到成功</p>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {}

    }
}
</script>

<style lang="less" scoped>

.title {
    margin-top: 17px;
    font-weight: 600;
    font-size: 16px;
    color: #101010;
}
.table {
    margin-top: 48px;
    &>li {
        display: flex;
        height: 45px;
        line-height: 45px;
        font-size: 14px;
        color: #101010;
        &>p{
            width: 50%;
            box-sizing: border-box;
        }
        &>p:nth-child(1){
            padding-right: 10px;
            text-align: right;
        }
        &>p:nth-child(2){
            padding-left: 10px;
            text-align: left;
        }
    }
}
.success {
    margin-top: 30px;
    .cubeic-right {
        font-size: 77px;
        color: #7AC756;
    }
    .success-title {
        margin-top: 10px;
        font-size: 16px;
        font-weight: 600;
        color: #101010;
    }
}
</style>
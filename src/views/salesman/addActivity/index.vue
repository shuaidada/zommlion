<template>
    <div class="addActivity">
        <cube-form :model="model" @submit="submitHandler">
            <cube-form-group legend='活动名称：'>
                <cube-input v-model="model.name" placeholder='可不填，系统将根据时间地点自动创建'></cube-input>
            </cube-form-group>
            <cube-form-group legend='活动类型：'>
                <cube-select v-model="model.name" :options="options" placeholder='请选择活动类型'></cube-select>
            </cube-form-group>
            <cube-form-group legend='开始时间：'>
                <cube-input  v-model="model.name" placeholder='请选择开始时间' @focus='startTime()'></cube-input>
            </cube-form-group>
            <cube-form-group legend='结束时间：'>
                <cube-input  v-model="model.name" placeholder='请选择结束时间' @focus='startTime()'></cube-input>
            </cube-form-group>
            <cube-form-group legend='省 市 区：'>
                <cube-input  v-model="model.name" placeholder='请选择省 市 区' @focus='showAddressPicker()'></cube-input>
            </cube-form-group>
            <cube-form-group legend='详情地址：'>
                <cube-textarea v-model="model.name" placeholder='请输入详情地址'></cube-textarea>
            </cube-form-group>
            <cube-form-group legend='主视觉：'>
                <cube-upload action="//jsonplaceholder.typicode.com/photos/" :simultaneous-uploads="1" @files-added="filesAdded" />
            </cube-form-group>
            <cube-form-group legend='活动流程：'>
                 <cube-upload action="//jsonplaceholder.typicode.com/photos/" :simultaneous-uploads="1" @files-added="filesAdded" />
            </cube-form-group>
            <div>
                <cube-button class="submit-style" @click="$router.push({path: '/complete'})">提交</cube-button>
            </div>
        </cube-form>
    </div>
</template>
<script>
import { regionData } from 'element-china-area-data'

export default {
    data () {
        return {
            areaData: regionData,
            model: {
                name: ''
            },
            options: [{
                value: '小型活动',
                text: '小型活动'
            },{
                value: '试乘试驾',
                text: '试乘试驾'
            }],
        }
    },
    mounted () {
        this.initAreaData(this.areaData)
        this.cascadePicker = this.$createCascadePicker({
            title: '省 市 区',
            data: this.areaData,
            selectedIndex: [0, 1, 0],
            onSelect: this.selectHandle,
            onCancel: this.cancelHandle
        })

    },
    methods: {
        submitHandler() {
            console.log('submit')
        },
        startTime () {
            if (!this.dateTimePicker) {
                this.dateTimePicker = this.$createDatePicker({
                title: '开始时间',
                min: new Date(2008, 7, 8, 8, 0, 0),
                max: new Date(2020, 9, 20, 20, 59, 59),
                value: new Date(),
                columnCount: 5,
                onSelect: this.selectHandle,
                onCancel: this.cancelHandle
                })
            }
            this.dateTimePicker.show()
        },
        showAddressPicker() {
            this.cascadePicker.show()
        },
        selectHandle(selectedVal, selectedIndex, selectedText) {
            this.$createDialog({
                type: 'warn',
                content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
                icon: 'cubeic-alert'
            }).show()
        },
        cancelHandle() {
            this.$createToast({
                type: 'correct',
                txt: 'Picker canceled',
                time: 1000
            }).show()
        },
         filesAdded(files) {
            let hasIgnore = false
            const maxSize = 1 * 1024 * 1024 // 1M
            for (let k in files) {
                const file = files[k]
                if (file.size > maxSize) {
                file.ignore = true
                hasIgnore = true
                }
            }
            hasIgnore && this.$createToast({
                type: 'warn',
                time: 1000,
                txt: 'You selected >1M files'
            }).show()
        },
        initAreaData (data) {
            data.forEach(item => {
                item.text = item.label
                if (item.children) {
                    this.initAreaData(item.children)
                } else {
                    return
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.addActivity{
    padding-top: 55px;
    position: absolute;
    top: 0px;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    overflow-x: auto;
    box-sizing: border-box;
    background-color: #fff;
}
/deep/.cube-form {
    .cube-form-group {
        margin-bottom: 5px;
        display: flex;
    }
    .cube-form-group-legend {
        text-align: right;
        line-height: 46px;
        width: 90px;
        color: #101010;
        font-size: 15px;
        background-color: #fff;
    }
    .cube-form-group-content {
        display: flex;
        align-items: center;
        padding-right: 20px;
        width: calc(100% - 90px);
        box-sizing: border-box;
        .cube-input{
            width: 100%;
            .cube-input-field{
                font-size: 14px;
                padding: 7px 5px;
                border: 1px solid #DCE0E7;
                box-sizing: border-box;
            }
        }
        .cube-select,
        .cube-textarea-wrapper{
            text-align: left;
            padding: 7px 5px;
            width: 100%;
            border: 1px solid #DCE0E7;
        }
    }
    .submit-style {
        margin: auto;
        margin-top: 20px;
        width: 160px;
        border-radius: 25px;
        background-color: #7AC756;
    }
}
</style>

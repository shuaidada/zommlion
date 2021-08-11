<template>
  <div class="coustomer">
    <div class="top-style">
      <p class="tatle-style">2021-08-05 19:00 长沙座谈会</p>
    </div>
    <ul class="nav-style">
      <li>活动地址：湖南省长沙市岳麓区中联科技园</li>
      <li>活动时间：2021-08-05 19:00 至 2021-08-05 22:00</li>
    </ul>
    <div class="img-style">
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs16%2FM00%2F79%2F04%2FCoUBUl_hnDaAb8vsAAEeWevbnhw68.jpeg&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631178435&t=05d655652fdee902b71a2d404832d295"
        alt=""
      />
      <img
        src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fn1-q.mafengwo.net%2Fs16%2FM00%2F79%2F04%2FCoUBUl_hnDaAb8vsAAEeWevbnhw68.jpeg&refer=http%3A%2F%2Fn1-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1631178435&t=05d655652fdee902b71a2d404832d295"
        alt=""
      />
    </div>
    <div class="input-style">
      <cube-form :model="model" @submit="submitHandler">
        <cube-form-group legend='姓名：'>
                <cube-input v-model="model.name" style="width: 200px;" placeholder=''></cube-input>
            </cube-form-group>
            <cube-form-group legend='手机号：'>
                <cube-input v-model="model.name" style="width: 200px;" placeholder=''></cube-input>
                <span class="" style="font-size: 15px; text-align: left; margin-left:10px; color:#1684FC;">发送验证码</span>
            </cube-form-group>
            <cube-form-group legend='验证码：'>
                <cube-input  v-model="model.name" style="width: 80px;" placeholder=''></cube-input>
            </cube-form-group>
            <cube-form-group legend='意向机型：'>
                <cube-input  v-model="model.name" style="width: 200px;" placeholder=''></cube-input>
            </cube-form-group>
            <cube-form-group legend='意向时间：'>
                <cube-select  v-model="model.name" style="width: 200px;" placeholder='' @focus='startTime()'></cube-select>
            </cube-form-group>
            <cube-form-group legend='施工地点：'>
                <cube-select v-model="model.name" style="width: 200px;" :options="options"  placeholder=''></cube-select>
            </cube-form-group>
            <cube-form-group legend='业务员：'>
                <cube-input v-model="model.name" style="width: 200px;" placeholder=''></cube-input>
            </cube-form-group>
        <div>
          <cube-button class="submit-style" @click="$router.push({ path: '/success' })">提交签到</cube-button>
        </div>
      </cube-form>
    </div>
  </div>
</template>

<script>
import { regionData } from "element-china-area-data";

export default {
  data() {
    return {
      areaData: regionData,
      model: {
        name: "",
      },
       options: [
           '小型活动',
           '中型活动',
           '大型活动',
           ],
    };
  },
  mounted() {
    this.initAreaData(this.areaData);
    
  },
  methods: {
    submitHandler() {
      console.log("submit");
    },
    
       startTime () {
            if (!this.dateTimePicker) {
                this.dateTimePicker = this.$createDatePicker({
                title: '开始时间',
                min: new Date(2008, 7, 8, 8, 0, 0),
                max: new Date(2021, 9, 20, 20, 59, 59),
                value: new Date(),
                columnCount: 5,
                onSelect: this.selectHandle,
                onCancel: this.cancelHandle
                })
            }
            this.dateTimePicker.show()
        },
 
    cancelHandle() {
      this.$createToast({
        type: "correct",
        txt: "Picker canceled",
        time: 1000,
      }).show();
    },
 
    initAreaData(data) {
      data.forEach((item) => {
        item.text = item.label;
        if (item.children) {
          this.initAreaData(item.children);
        } else {
          return;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.coustomer {
  width: 100%;
  overflow-x: auto;
}
.top-style {
  height: 44px;
  border-bottom: 1px solid #bbbbbb;
  .tatle-style {
    line-height: 44px;
    margin-top: 10px;
    font-weight: 700;
    font-size: 17px;
  }
}
.nav-style {
  height: 100px;
  font-size: 16px;
  //   background-color: #e1e1e1;
  margin-top: 5px;
  & > li:nth-child(1) {
    // margin-top: 5px;
    padding-top: 5px;
    line-height: 50px;
    text-align: left;
  }
  & > li:nth-child(2) {
    // margin-top: 5px;
    padding-top: 5px;
    line-height: 30px;
    text-align: left;
  }
}
.img-style{
    margin-bottom: 30px;
}
.img-style > img {
  width: 100%;
  height: 100px;
  background-color: #e1e1e1;
}
/deep/.cube-form {
  .cube-form-group {
    margin-bottom: 5px;
    display: flex;
  }
  .cube-form-group-legend {
    text-align: right;
    line-height: 46px;
    width: 100px;
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
    .cube-input {
      width: 100%;
      .cube-input-field {
        font-size: 14px;
        padding: 7px 5px;
        border: 1px solid #dce0e7;
        box-sizing: border-box;
      }
    }
    .cube-select,
    .cube-textarea-wrapper {
      text-align: left;
      padding: 7px 5px;
      width: 100%;
      border: 1px solid #dce0e7;
    }
  }
  .submit-style {
    margin: auto;
    margin-top: 20px;
    margin-bottom: 50px;
    width: 160px;
    border-radius: 25px;
    background-color: #7ac756;
  }
}
</style>
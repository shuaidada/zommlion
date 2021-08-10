

<template>
  <div class="salesmanMain">
    <cube-tab-bar v-model="selectedLabel" show-slider>
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
        </cube-tab>
    </cube-tab-bar>
    <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="index">
            <ul>
                <li class="tab-panel-li" v-for="(hero, index) in 20" :key="index">
                    <div class="tab-panel-li-left">
                        <p>长沙2021年一月一号小型座谈会</p>
                        <p> <span>开始时间:</span> <span>2021-08-09 18:00</span> </p>
                        <p> <span>结束时间:</span> <span>2021-08-09 18:00</span> </p>
                    </div>
                    <div class="tab-panel-li-right">
                        <p @click="$router.push({path: '/details'})">查看详情 <i class="cubeic-arrow"></i> </p>
                        <p>编辑活动 <i class="cubeic-arrow"></i> </p>
                        <p @click="$router.push({path: '/statistics'})">签到统计 <i class="cubeic-arrow"></i> </p>
                    </div>
                </li>
                <!-- <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
                    {{hero}}
                </li> -->
            </ul>
        </cube-tab-panel>
    </cube-tab-panels>
    <cube-button class="add-style" @click="$router.push({path: '/addActivity'})" >点击此处创建新活动</cube-button>
  </div>
</template>


<script>
// import {  } from '@/api/apiRequest'
export default {
  data () {
    return {
      selectedLabel: '进行中',
      tabs: [{
        label: '进行中',
        heroes: [
            {

            }
        ]
      }, {
        label: '待开始'
      },{
        label: '已结束'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      console.log(label)
    }
  }
}
</script>

<style lang="less" scoped>
.salesmanMain {
    width: 100%;
    /deep/.cube-tab-bar {
        margin-bottom: 5px;
        .cube-tab {
            height: 32px;
            line-height: 32px;
            font-size: 16px;
        }
        .cube-tab-bar-slider {
            display: none;
        }
        .cube-tab_active{
            color: #fff;
            background-color: #7AC756;
        }
    }
    /deep/.cube-tab-panel {
        padding-bottom: 5px;
        box-sizing: border-box;
        &>ul {
            height: 515px;
            overflow-x: hidden;
            .tab-panel-li {
                padding: 0 7px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 5px;
                height: 90px;
                border-bottom: 1px solid rgb(216, 216, 216);
                .tab-panel-li-left {
                    text-align: left;
                    &>p:nth-child(1) {
                        font-size: 16px;
                        font-weight: 600;
                    }
                    &>p:nth-child(2),
                    &>p:nth-child(3) {
                        font-size: 16px;
                    }
                    &>p:nth-child(2) {
                        margin: 10px 0 8px 0;
                    }
                }

                .tab-panel-li-right {
                    font-size: 16px;
                    color: #8997B3;
                    &>p:nth-child(2) {
                        margin: 10px 0;
                    }
                }
            }
            &>li:last-child {
                border-bottom-color: #fff;
            }
        }
        
    }
    .add-style {
        background-color: #7AC756;
    }
}
</style>
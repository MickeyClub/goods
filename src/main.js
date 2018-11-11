// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// axios
// import axios from "axios"
// Vue.prototype.$axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})

// 使用 Mock
var Mock = require('mockjs')
var data = Mock.mock('http://192.168.2.10:90/app/mock/21/list', 'get',{
  "info": {
      "activityList": [
          {
              "actId": 1,
              "actName": "潮生活赢iPhone",
              "actPic": "img/actpic1.jpg",
              "issuedCnt": 10,
              "requiredCnt": 100,
              "schedule":1
          },{
              "actId": 2,
              "actName": "蓝牙音箱夺宝活动",
              "actPic": "img/actpic2.jpg",
              "issuedCnt": 23,
              "requiredCnt": 200,
              "schedule":2
          },{
              "actId": 3,
              "actName": "苹果X夺宝大活动",
              "actPic": "img/actpic3.jpg",
              "issuedCnt": 100,
              "requiredCnt": 300,
              "schedule":2
          },{
              "actId": 5,
              "actName": "潮人吃货节赢华为Mate 10",
              "actPic": "img/actpic5.jpg",
              "issuedCnt": 130,
              "requiredCnt": 280,
              "schedule":10
          },{
              "actId": 11,
              "actName": "相机夺宝活动",
              "actPic": "img/actpic11.jpg",
              "issuedCnt": 1000,
              "requiredCnt": 1000,
              "schedule":2
          },{
              "actId": 13,
              "actName": "女手表夺宝活动",
              "actPic": "img/actpic13.jpg",
              "issuedCnt": 799,
              "requiredCnt": 800,
              "schedule":1
          },{
              "actId": 14,
              "actName": "食上嘻哈赢iphone",
              "actPic": "img/actpic14.jpg",
              "issuedCnt": 1,
              "requiredCnt": 600,
              "schedule":1
          },{
              "actId": 15,
              "actName": "食上嘻哈赢300元霸王餐券",
              "actPic": "img/actpic15.jpg",
              "issuedCnt": 49,
              "requiredCnt": 150,
              "schedule":1
          },{
              "actId": 16,
              "actName": "撸串游戏活动赢松哥油焖大虾6.8折vip卡",
              "actPic": "img/actpic16.jpg",
              "issuedCnt": 540,
              "requiredCnt": 800,
              "schedule":10
          },{
              "actId": 17,
              "actName": "跳一跳赢沙发",
              "actPic": "img/actpic17.jpg",
              "issuedCnt": 540,
              "requiredCnt": 800,
              "schedule":10
          }
      ],
      "page": {
          "page": 1,
          "perSize": 10,
          "totalPage": 30,
          "totalSize": 25
      }
  }
})
// 输出结果
// console.log(JSON.stringify(data, null, 4))
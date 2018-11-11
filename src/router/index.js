import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import life from '@/components/life'
import axios from "axios";
Vue.prototype.$axios = axios
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'life',
      component: life,
      meta:{
        title: "潮生活积分夺宝"
      }
    }
  ]
 
})

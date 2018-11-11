<template>
  <div>
    <div class="tab-box">
      <ul class="tabBar">
        <li @click="selectIndex(0)" :class="tabIndex == 0 ? 'active':''"><a href="#">全部</a></li>
        <li @click="selectIndex(1)" :class="tabIndex == 1 ? 'active':''"><a href="#">进度</a></li>
        <li @click="selectIndex(2)" :class="tabIndex == 2 ? 'active':''"><a href="#">总需人数</a></li>
        <li @click="selectIndex(3)" :class="tabIndex == 3 ? 'active':''"><a href="#">即将揭晓</a></li>
      </ul>
    </div>
    <div class="container">
      <div v-show="tabIndex==0" v-for="(item, index) in goodsList" :key="item.actId" class="goods-list">
        <div class="left">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="right">
          <div class="title">{{item.actName}}<span>{{item.schedule}}</span> </div>
          <div class="progress">
            <span class="bar">
              <span class="bar-in"></span>
            </span>
            <span class="percen">8%</span>
          </div>
          <div class="info">
            <span>总需人次{{item.requiredCnt}}</span>
            <span>{{item.issuedCnt}}已参与</span>
          </div>
          <div class="btn">立即参与</div>
        </div>
      </div>
      <div v-show="tabIndex==1" class="goods-list">进度</div>
      <div v-show="tabIndex==2" class="goods-list">总需人数</div>
      <div v-show="tabIndex==3" class="goods-list">即将揭晓</div>
    </div>
  </div>
</template>
<script>


export default {
  name: 'life',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      page: {},
      type: 0,
      goodsList: [],
      tabIndex:0
    }
  },
  created() {
    this.getList()
  },
  methods: {
    selectIndex(index){
      this.tabIndex = index
    },
    getList() {
      this.$axios.get('http://192.168.2.10:90/app/mock/21/list')
        .then((res) => {
          console.log(res)
          this.goodsList = res.data.info.activityList
          this.page = res.data.info.page
        })
    }
  },
}
</script>


<style scoped>
/* 初始化默认样式 */
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px "宋体", "Arial Narrow", HELVETICA;
  background: #fff;
  -webkit-text-size-adjust: 100%;
}
a {
  color: #2d374b;
  text-decoration: none;
}
a:hover {
  color: #cd0200;
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}

/* 选显卡 */
.tab-box {
  height: 90px;
  width: 100%;
  border-bottom: 2px solid #f6f4f2;
}
.tab-box .tabBar {
  display: flex;
}
.tab-box .tabBar li {
  width: 25%;
  text-align: center;
  line-height: 90px;
}
.tab-box .tabBar li a {
  color: #4f5159;
  font-size: 30px;
  text-decoration: none;
}
.tab-box .tabBar li.active a {
  color: #b18421;
}
.goods-list {
  height: 270px;
  padding: 25px;
  box-sizing: border-box;
  border-bottom: 2px solid #f6f4f2;
  display: flex;
}
.goods-list .left {
}
.goods-list .left img {
  width: 210px;
  height: 210px;
  padding-right: 20px;
}
.goods-list .right {
}
.goods-list .right .title {
  font-size: 30px;
}
.goods-list .right .title span {
  font-size: 24px;
  color: #ffd274;
  background-color: #4f5159;
  padding: 5px;
}
.goods-list .right .title span::before {
  content: "";
  background-color: red;
  width: 5px;
  height: 5px;
}
.goods-list .right .progress {
  display: flex;
  width: 100%;
  height: 10px;
  margin-top: 30px;
}
.goods-list .right .progress .bar {
  border-radius: 5px;
  width: 390px;
  height: 100%;
  background-color: #fcf0dd;
}
.goods-list .right .progress .bar .bar-in {
  border-radius: 5px;
  background-color: #f1c75c;
  width: 50px;
  height: 100%;
  display: block;
}
.goods-list .right .progress .percen {
  line-height: 10px;
  padding-left: 16px;
  font-size: 22px;
  color: #c09f57;
}
.goods-list .right .info {
  font-size: 28px;
  color: #9e9e9e;
  margin-top: 14px;
}
.goods-list .right .info span:nth-child(2) {
  padding-left: 30px;
}
.goods-list .right .btn {
  width: 200px;
  height: 60px;
  border-radius: 30px;
  background-color: #f0b240;
  font-size: 30px;
  color: #fff;
  text-align: center;
  line-height: 60px;
  margin-top: 30px;
}
</style>

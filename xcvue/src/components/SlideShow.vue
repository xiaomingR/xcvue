<template>
  <div>
    <div class="big-div">
      <!-- 轮播图 -->
      <div id="parent" class="carousel" data-ride="carousel">
        <!--1轮播的图片  -->
        <div class="carousel-inner">
          <div class="carousel-item active">
            <a href="#"><img class="w-100" src="../../public/img/1.jpg"/></a>
          </div>
          <div class="carousel-item">
            <a href="#"><img class="w-100" src="../../public/img/2.jpg"/></a>
          </div>
          <div class="carousel-item">
            <a href="#"><img class="w-100" src="../../public/img/3.jpg"/></a>
          </div>
          <div class="carousel-item">
            <a href="#"><img class="w-100" src="../../public/img/4.jpg"/></a>
          </div>
          <div class="carousel-item">
            <a href="#"><img class="w-100" src="../../public/img/5.jpg"/></a>
          </div>
        </div>
        <!--2轮播指示器 -->
        <ul class="carousel-indicators">
          <li data-target="#parent" data-slide-to="0" class="active"></li>
          <li data-target="#parent" data-slide-to="1"></li>
          <li data-target="#parent" data-slide-to="2"></li>
          <li data-target="#parent" data-slide-to="3"></li>
          <li data-target="#parent" data-slide-to="4"></li>
        </ul>
        <!-- 搜索栏 -->
        <div class="searchBox d-flex">
          <!-- 左边的div -->
          <ul class="s_tab">
            <li class="s_tab_nocurrent ft"><b>酒店</b></li>
            <li class="s_tab_nocurrent"><b>机票</b></li>
            <li class="s_tab_nocurrent"><b>旅游</b></li>
            <li class="s_tab_nocurrent"><b>跟团游</b></li>
            <li class="s_tab_nocurrent"><b>打包订</b></li>
            <li class="s_tab_nocurrent"><b>火车</b></li>
            <li class="s_tab_nocurrent">
              <b class="border-0">
                用车
              </b>
              <span class="label-cn"><i class="hire">租车周三惠</i></span>
              <i class="triangle"></i>
            </li>
          </ul>
          <!-- 右边的div -->
          <div class="s_content">
            <div class="d-flex hotelSwitch">
              <p class="pr-3">国内酒店</p>
              <p>海外酒店</p>
            </div>
            <!-- 目的地 -->
            <div class="s_item">
              目的地<input type="text" placeholder="中文/拼音" />
            </div>
            <!-- 入住日期 -->
            <div class="s_item_hotel">
              <!-- 引入Element UI 时间控件 -->
              入住日期<el-date-picker
                :style="{
                  width: '146px',
                  marginLeft: '12px',
                  marginRight: '15px',
                }"
                v-model="value1"
                type="date"
                placeholder="选择日期"
                size="mini"
              >
              </el-date-picker>
              退房日期<el-date-picker
                :style="{ width: '146px', marginLeft: '12px' }"
                v-model="value1"
                type="date"
                placeholder="选择日期"
                size="mini"
              >
              </el-date-picker>
            </div>
            <!-- 房间数 -->
            <div class="s_item_cont">
              房间数
              <select id="J_roomCountList" class="firstInput">
                <option value="1" selected>1间</option>
                <option value="2">2间</option>
                <option value="3">3间</option>
                <option value="4">4间</option>
                <option value="5">5间</option>
                <option value="6">6间</option>
                <option value="7">7间</option>
                <option value="8">8间</option>
                <option value="9">9间</option>
                <option value="10">10间</option>
              </select>
              住客数
              <select id="J_roomCountList">
                <option value="1" selected>1人</option>
                <option value="2">2人</option>
                <option value="3">3人</option>
                <option value="4">4人</option>
                <option value="5">5人</option>
                <option value="6">6人</option>
                <option value="7">7人</option>
                <option value="8">8人</option>
                <option value="9">9人</option>
                <option value="10">10人</option>
              </select>
            </div>

            <!-- 酒店级别 -->
            <div class="s_item_hotel">
              酒店级别
              <select id="J_roomCountList" class="firstInput">
                <option value="1" selected>不限</option>
                <option value="2">五星级/豪华</option>
                <option value="3">四星级/高档</option>
                <option value="4">三星级/舒适</option>
                <option value="4">二星级以下/经济</option>
              </select>
              关键词<input
                type="text"
                placeholder="(选填)酒店名/地标/商圈"
                class="keyWord"
              />
            </div>
            <!-- 搜索 -->
            <div class="s_button_area">
              <button>搜索</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
    };
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
img {
  display: inline-block;
  height: 100%;
  padding: 10px 0;
}
.carousel-item {
  height: 360px;
}
.carousel-indicators {
  width: 200px;
  height: 20px;
  margin-left: 1200px;
}
.carousel-indicators li {
  width: 15px;
  height: 15px;
  border-radius: 100%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.2);
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  opacity: 1 !important;
}
.carousel-indicators .active {
  background: #fff !important;
  opacity: 1 !important;
  width: 24px !important;
  border-radius: 10px !important;
}
.carousel {
  position: relative;
}
.searchBox {
  position: absolute;
  left: 19%;
  top: 3%;
  margin: 20px 0;
  background-color: #fff;
  width: 580px;
  height: 300px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}
.s_tab {
  width: 90px;
  height: 300px;
  background-color: #2577e3;
}
.s_tab_nocurrent {
  display: inline-block;
  width: 94px;
  height: 42px;
  padding: 0 17px 0 13px;
  color: #fff;
  line-height: 42px;
  /* vertical-align: middle; */
}
.s_tab b {
  display: inline-block;
  height: 42px;
  width: 60px;
  border-bottom: 1px dashed #aac3f1;
}
.s_tab_nocurrent:hover {
  border-left: 4px solid #ff9915;
  background-color: #fff;
  color: #06c;
  cursor: pointer;
}
.ft {
  border-left: 4px solid #ff9915;
  background-color: #fff;
  color: #06c;
}
.label-cn {
  position: relative;
  left: 15px;
  top: -60px;
  display: inline-block;
  width: 70px;
  height: 20px;
  font-size: 10px;
  background: #ff9915;
}
.label-cn .hire {
  position: absolute;
  left: 4px;
  top: -12px;
}
.s_content {
  width: 491px;
  height: 300px;
  padding: 20px 20px 5px;
  text-align: left;
}
.hotelSwitch {
  padding-bottom: 7px;
  border-bottom: 2px solid #c4c4c4;
}
.hotelSwitch p {
  color: #06c;
  font-size: 14px;
  font-weight: bold;
}
.s_item {
  width: 451px;
  font: 14px/28px "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  margin-left: 20px;
  margin-top: 15px;
}
.s_item input {
  width: 376px;
  height: 28px;
  box-shadow: 1px 1px 1px #ddd inset;
  border: 1px solid #bbb;
  outline: none;
  padding: 5px;
  margin-left: 13px;
}
.s_item_hotel {
  width: 451px;
  font: 14px/28px "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  margin-top: 14px;
  margin-left: 6px;
}

.s_item_cont {
  width: 451px;
  font: 14px/28px "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  margin-top: 14px;
  margin-left: 20px;
}
#J_roomCountList {
  width: 146px;
  height: 28px;
  box-shadow: 1px 1px 1px #ddd inset;
  border: 1px solid #bbb;
  outline: none;
  margin-left: 9px;
}
.firstInput {
  margin-right: 26px;
}
.s_button_area button {
  display: block;
  margin-top: 13px;
  margin-left: 310px;
  width: 145px;
  height: 33px;
  color: #fff;
  font-size: 16px;
  font-family: "Microsoft YaHei", SimSun, Tahoma, Verdana, Arial, sans-serif;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  letter-spacing: 0.4em;
  text-indent: 0.4em;
  box-shadow: 0 1px 0 rgba(95, 50, 0, 0.7);
  border-radius: 3px;
  text-shadow: 1px 1px 0 #cf7000;
  background-color: #ffb000;
  border: solid 1px #e77c00;
  outline: 0;
}
.s_item_hotel .keyWord {
  width: 146px;
  height: 28px;
  box-shadow: 1px 1px 1px #ddd inset;
  border: 1px solid #bbb;
  outline: none;
  padding: 5px;
  margin-left: 13px;
}
</style>

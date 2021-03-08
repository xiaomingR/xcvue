<template>
  <div id="app">
    <my-header></my-header>
    <router-view />
    <slide-show></slide-show>

    <my-footer></my-footer>
  </div>
</template>

<style>
/** 一级容器定宽居中 */
body > .container {
  width: 1180px;
  min-width: 980px;
  margin: 0 auto;
}
.font_sm {
  font-size: 12px;
  color: #666;
}
.container {
  box-sizing: border-box;
}
</style>

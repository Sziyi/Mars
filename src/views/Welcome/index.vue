<template>
  <div class="wrapper">
    <div class="welcome">
      <div class="content">
        <div class="sub-title">欢迎体验</div>
        <div class="title">慕课通用后台管理系统</div>
        <div class="desc">
          - Vue3.0+ElementPlus+Node+Mongo打造通用后台管理系统
        </div>
      </div>
      <div class="img"></div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped lang="scss">
.wrapper {
  background: #eef0f3;
  padding: 20px;
  height: calc(100vh - 50px);
}
.welcome {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #fff;
}
.welcome .content {
  position: relative;
  bottom: 40px;
}
.sub-title {
  font-size: 30px;
  line-height: 42px;
  color: #333;
}
.title {
  font-size: 40px;
  line-height: 62px;
  color: #409eff;
}
.desc {
  text-align: right;
  font-size: 14px;
  color: #999;
}
.img {
  margin-left: 105px;
  background-image: url(../../assets/welcome.png);
  width: 371px;
  height: 438px;
}
</style>

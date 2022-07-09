<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import AppAside from './Aside'
import AppMain from './Main'
import AppHeader from './Header'
</script>
<style scoped lang="scss">
.el-header {
  height: 50px;
  //   background-color: aqua;
  border-bottom: 1px solid #ddd;
}
.el-main {
  padding: 0px;
}
</style>

<template>
  <div class="aside">
    <div class="t">
      <img src="../../assets/1.png" alt="" class="titleImg" />
      <span class="title">Manager</span>
    </div>
    <aside-menu></aside-menu>

    <!-- <el-menu
      active-text-color="#409EFF"
      background-color="#001529"
      :default-active="$router.path"
      text-color="#fff"
      router
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Setting /></el-icon>
          <span>系统管理</span>
        </template>
        <el-menu-item index="/system/user">用户管理</el-menu-item>
        <el-menu-item index="/system/muser">菜单管理</el-menu-item>
        <el-menu-item index="/system/dept">角色管理</el-menu-item>
        <el-menu-item index="/system/role">部门管理</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>审批管理</span>
        </template>
        <el-menu-item index="/audit/leave">休假申请</el-menu-item>
        <el-menu-item index="/audit/approve">待审批</el-menu-item>
      </el-sub-menu>
    </el-menu> -->
  </div>
</template>

<script setup>
import AsideMenu from './AsideMenu'
</script>
<style scoped lang="scss">
.aside {
  width: 200px;
  height: 100vh;
  background-color: #001529;
}
.t {
  height: 50px;
  .titleImg {
    width: 32px;
    height: 32px;
    margin: 7px 15px 3px 10px;
    float: left;
  }
  .title {
    color: #fff;
    font-size: 18px;
    line-height: 50px;
  }
  .el-menu {
    height: 100vh;
    .el-sub-menu {
      background-color: #001529;
    }
    .el-menu-item {
      background-color: #001529;
    }
  }
}
</style>

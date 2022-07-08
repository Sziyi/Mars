<template>
  <div class="nav_top">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ router.meta }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link"> admin </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">邮箱</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const handleCommand = (command) => {
  // console.log(command)
  switch (command) {
    case 'a':
      handleToHome()
      break
    case 'logout':
      handleLogout()
      break
  }
}

const handleToHome = () => {
  console.log('a')
}
const handleLogout = async () => {
  console.log('退出登录')
  localStorage.removeItem('router')
  localStorage.removeItem('authorization')
  localStorage.removeItem('token')
  router.push('/login')
}
</script>
<style scoped lang="scss">
.nav-top {
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ddd;
  padding: auto 20px;
}
.left {
  height: 50px;
  float: left;
  .el-breadcrumb {
    line-height: 50px;
  }
}
.r {
  height: 50px;
  float: right;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  display: flex;
  align-items: center;
}
</style>

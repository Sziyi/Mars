<template>
  <div></div>
  <!-- <el-menu
    active-text-color="#409EFF"
    background-color="#001529"
    :default-active="$route.path"
    text-color="#fff"
    router
  >
    <aside-menu-item v-for="item in menuList" :key="item" :menuList="item">
    </aside-menu-item>
  </el-menu> -->
</template>

<script setup>
// import { computed } from 'vue'
// import { useRouter } from 'vue-router'
// import { filterMenuData } from '../../utils/menu'
// import { filterRouters, generateMenus } from '../../utils/router'
// import AsideMenuItem from './AsideMenuItem'

// const router = useRouter()
// // console.log('routes=>', router.getRoutes())
// const menuList = computed(() => {
//   const routes = filterRouters(router.getRoutes())
//   return filterMenuData(generateMenus(routes))
// })
</script>
<style scoped lang="scss">
// .el-menu {
//   height: 100vh;
//   .el-sub-menu {
//     background-color: #001529;
//   }
//   .el-menu-item {
//     background-color: #001529;
//   }
// }
</style>

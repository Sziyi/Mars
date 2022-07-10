<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001529"
      class="el-menu-vertical-demo"
      default-active="/system-user"
      text-color="#fff"
      router
    >
      <menu-tree v-for="item in data" :key="item" :menu="item"></menu-tree>
    </el-menu>
  </div>
</template>

<script setup>
import MenuTree from './MenuTree'
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const data = ref([])
const getMenuList = async () => {
  const res = await store.dispatch('user/getPermis')
  console.log(res)
  data.value = res
}
getMenuList()
</script>
<style scoped lang="scss">
.el-menu {
  height: 200vh;
}
</style>

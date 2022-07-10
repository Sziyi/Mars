<template>
  <el-menu-item v-if="item.children && item.action" :index="item.path">
    <el-icon><location /></el-icon><span>{{ item.menuName }}</span>
  </el-menu-item>

  <el-sub-menu v-else :index="item.path">
    <template #title>
      <el-icon><document /></el-icon><span>{{ item.menuName }}</span>
    </template>
    <MenuTree
      v-for="child in item.children"
      :menu="child"
      :key="child"
    ></MenuTree>
  </el-sub-menu>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  menu: {
    type: Object,
    default: () => {}
  }
})

const item = computed(() => {
  return props.menu
})
</script>
<style scoped lang="scss"></style>

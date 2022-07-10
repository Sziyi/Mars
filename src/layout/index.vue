<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-header>
          <app-header :value="value"></app-header>
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
import { useRouter } from 'vue-router'
import { ref, watch } from 'vue'
const router = useRouter()

const value = ref('')

watch(
  () => router,
  (newValue, oldValue) => {
    // console.log('监听路有变化', newValue.currentRoute.value.meta.title)
    value.value = newValue.currentRoute.value.meta.title
  },
  { immediate: true, deep: true }
)
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

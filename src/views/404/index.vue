<template>
  <div>
    <div class="exception">
      <img src="../../assets/404.jpeg" />
      <el-button plain @click="home">回首页</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const home = () => {
  router.push('/')
}
</script>
<style scoped lang="scss">
.exception img {
  width: 100%;
  height: 100vh;
}

.el-button {
  position: fixed;
  bottom: 100px;
  left: 50%;
  margin-left: -34px;
}
</style>

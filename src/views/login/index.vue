<template>
  <div class="l">
    <div class="login">
      <el-form :model="loginForm" ref="LoginForm" :rules="rules">
        <h2>火星</h2>
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入用户名">
            <template #prefix>
              <el-icon class="el-input__icon"><Avatar /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input v-model="loginForm.userPwd" placeholder="请输入密码">
            <template #prefix>
              <el-icon class="el-input__icon"><View /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="dl">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Avatar, View } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const LoginForm = ref()
const router = useRouter()
const loginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
  userPwd: [
    { min: 6, max: 20, message: '密码不能小于6位或者大于20位', trigger: 'blur' }
  ]
})

const dl = () => {
  //   alert('登录')
  LoginForm.value.validate(async (valid) => {
    if (!valid) return
    await store.dispatch('user/login', loginForm)
    router.push('/')
  })
}
</script>
<style scoped lang="scss">
.l {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #f9fcff;
  .login {
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    h2 {
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .el-form-item {
      margin: 35px 20px;
    }
  }
}
</style>

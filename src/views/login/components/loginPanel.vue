<template>
  <div class="login-panel">
    <h1>vue3-element-plus 管理系统</h1>
    <el-tabs type="border-card" v-model="currentTab" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>
            账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><iphone /></el-icon>
            手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import loginAccount from "./loginAccount.vue"
import loginPhone from "./loginPhone.vue"

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof loginAccount>>()
const phoneRef = ref<InstanceType<typeof loginPhone>>()
const currentTab = ref("account")

const handleLoginClick = () => {
  if (currentTab.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.phoneLogin()
  }
}
</script>
<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  min-width: 350px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
:deep(.el-icon) {
  vertical-align: -2px;
}
</style>

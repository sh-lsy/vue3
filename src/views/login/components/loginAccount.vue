<template>
  <div>
    <el-form ref="formRef" :rules="rules" :model="account">
      <el-form-item label="账号" prop="name">
        <el-input type="text" v-model="account.name" placeholder="账号：coderwhy" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="account.password"
          autocomplete="off"
          show-password
          placeholder="密码：123456"
        />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useStore } from "vuex"

import type { FormInstance } from "element-plus"
import { ElMessage } from "element-plus"

import localStorage from "@/utils/cache"

const store = useStore()

const account = reactive({
  name: localStorage.getItem("name") ?? "",
  password: localStorage.getItem("password") ?? ""
})
const rules = {
  name: [
    {
      required: true,
      message: "用户名是必传内容~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "用户名必须是5~10个字母或者数字~",
      trigger: "blur"
    }
  ],
  password: [
    {
      required: true,
      message: "密码是必传内容~",
      trigger: "blur"
    },
    {
      pattern: /^[a-z0-9]{6,16}$/,
      message: "密码必须是6~16个的字母或者数字~",
      trigger: "blur"
    }
  ]
}
const formRef = ref<FormInstance>()
const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存
        localStorage.setItem("name", account.name)
        localStorage.setItem("password", account.password)
      } else {
        localStorage.removeItem("name")
        localStorage.removeItem("password")
      }
      // 2.开始进行登录验证
      store.dispatch("login/accountLoginAction", { ...account })
    } else {
      ElMessage.error({
        message: "请填写正确的账号密码",
        center: true
      })
    }
  })
}
defineExpose({
  loginAction
})
</script>
<style scoped lang="less"></style>

<template>
  <el-form label-width="60px">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num" />
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <div class="get-code">
        <el-input v-model="phone.code" />
        <el-button type="primary" class="get-btn" @click="phoneLogin">获取验证码</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, defineExpose } from "vue"
import { ElMessage } from "element-plus"
const phone = reactive({
  num: "",
  code: ""
})
const phoneLogin = () => {
  ElMessage.warning({
    message: "未实现该功能",
    center: true
  })
}

defineExpose({
  phoneLogin
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 8px;
}
</style>

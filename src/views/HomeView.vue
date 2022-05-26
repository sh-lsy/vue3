<template>
  <div class="home">
    <div class="login-wra">
      <el-input v-model="input.name" placeholder="userName" clearable style="margin-bottom: 10px" />
      <el-input v-model="input.pwd" placeholder="password" clearable style="margin-bottom: 10px" />
    </div>
    <button @click="getProcess">LoginMock</button>
    <div>{{ process }}</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue"
import { Login } from "../api/login/login"
import { Account } from "@/api/login/types"
import { ElMessage } from "element-plus"

const input = reactive<Account>({
  name: "",
  pwd: ""
})
let process = ref<any>({})

const getProcess = () => {
  if (input.name && input.pwd) {
    Login(input)
      .then((value) => {
        console.log(value.data, 11)
        console.log(process)
        process.value = value.data
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    ElMessage.warning({
      message: "请输入完整信息"
    })
  }
}
</script>
<style scoped>
.login-wra {
  width: 300px;
  margin: 0 auto;
}
</style>

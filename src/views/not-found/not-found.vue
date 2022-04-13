<template>
  <h2>未找到该界面0.0...</h2>
  <p>{{ num }}秒后返回首页</p>
</template>
<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
const Router = useRouter()
const num = ref(3)

let timer = setInterval(() => {
  num.value -= 1
  if (num.value === 0) {
    clearInterval(timer)
    Router.replace("./main")
  }
}, 1000)
</script>
<style scoped lang="less"></style>

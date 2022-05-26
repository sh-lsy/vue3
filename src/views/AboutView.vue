<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
    <el-color-picker v-model="color" show-alpha />
    <el-icon><alarm-clock /></el-icon>
    <el-icon><circle-check-filled /></el-icon>
    <el-switch v-model="value1" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

const color = ref("rgba(19, 206, 102, 0.8)")
const value1 = ref(true)
</script>

<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="24">
        <el-card shadow="always">
          基于 Vue3、Vuex、VueRouter、 ElementPlus 、TypeScript、Echart5
        </el-card>
      </el-col>
    </el-row>
    <coffee />
  </div>
</template>
<script lang="ts" setup>
import coffee from "@/components/coffee/coffee.vue"
</script>
<style scoped lang="less">
:deep(.tea-cup-container) {
  margin-top: 20px;
  height: 500px;
}
</style>

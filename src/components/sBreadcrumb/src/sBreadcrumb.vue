<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path ? item.path : '' }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" setup>
import { Breadcrumb } from "../types/index"

interface Props {
  breadcrumbs: Breadcrumb[]
}
const props = withDefaults(defineProps<Props>(), {
  breadcrumbs: () => [
    { name: "default", path: "default" },
    { name: "default", path: "default" }
  ]
})
</script>
<style scoped lang="less"></style>

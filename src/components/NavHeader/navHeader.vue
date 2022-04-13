<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="foldClick">
      <expand size="30" v-show="isFold" />
      <fold size="30" v-show="!isFold" />
    </el-icon>
    <div style="position: absolute; left: -50px; top: -90px; transform: scale(0.2)"><coffee /></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue"

import coffee from "@/components/coffee/coffee.vue"
const emit = defineEmits<{
  (e: "foldChange", num: boolean): void
}>()
const isFold = ref(false)
const foldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
</script>
<style scoped lang="less">
.nav-header {
  position: relative;
  .fold-menu {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>

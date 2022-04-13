<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="foldClick">
      <expand size="30" v-show="isFold" />
      <fold size="30" v-show="!isFold" />
    </el-icon>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineEmits } from "vue"
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
  .fold-menu {
    font-size: 20px;
    cursor: pointer;
  }
}
</style>

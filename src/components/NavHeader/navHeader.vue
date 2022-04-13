<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="foldClick">
      <expand size="30" v-show="isFold" />
      <fold size="30" v-show="!isFold" />
    </el-icon>
    <div class="content">
      <s-breadcrumb :breadcrumbs="breadcrumbs" />
      <user-info />
    </div>
    <div style="position: absolute; left: -50px; top: -90px; transform: scale(0.2)"><coffee /></div>
  </div>
</template>
<script lang="ts" setup>
import coffee from "@/components/coffee/coffee.vue"
import sBreadcrumb from "@/components/sBreadcrumb"

import { ref, computed } from "vue"
import UserInfo from "./user-info.vue"
import { useStore } from "@/store"
import { useRoute } from "vue-router"

import { pathMapBreadcrumbs } from "@/utils/map-menus"

const emit = defineEmits<{
  (e: "foldChange", num: boolean): void
}>()
const isFold = ref(false)
const foldClick = () => {
  isFold.value = !isFold.value
  emit("foldChange", isFold.value)
}
// 面包屑数据
const store = useStore()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const route = useRoute()
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>
<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;
  position: relative;
  .fold-menu {
    font-size: 20px;
    cursor: pointer;
  }
  .content {
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>

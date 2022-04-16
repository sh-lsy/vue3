<template>
  <div class="user">
    <SFrom v-bind="searchFormConfig" />
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import SFrom from "@/components/Form"
import { searchFormConfig } from "./config/search.config"
</script>

<style scoped></style>

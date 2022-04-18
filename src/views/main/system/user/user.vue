<template>
  <div class="user">
    <SFrom v-bind="searchFormConfig" v-model="formData">
      <!-- <template #header>
        <div>11</div>
      </template>
      <template #footer>
        <div>footer</div>
      </template> -->
    </SFrom>
    <div class="content"></div>
  </div>
</template>

<script lang="ts" setup>
import SFrom from "@/components/Form"
import { searchFormConfig } from "./config/search.config"
import { ref } from "vue"
const formData = ref({})
</script>

<style scoped></style>

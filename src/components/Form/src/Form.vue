<template>
  <div class="search-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemLayout">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                  <el-option
                    v-for="option in item.options"
                    :key="option.value"
                    :value="option.value"
                    >{{ option.title }}</el-option
                  >
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker style="width: 100%" v-bind="item.otherOptions"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { FormItem } from "../types"

interface Props {
  formItems: FormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
// vue3 暂时不支持引用外部的interface
withDefaults(defineProps<Props>(), {
  formItems: () => [
    {
      type: "input",
      label: "100"
    }
  ],
  labelWidth: "100px",
  colLayout: () => ({
    xl: 6, // >1920px 4个
    lg: 8,
    md: 12,
    sm: 24,
    xs: 24
  }),
  itemLayout: () => ({ padding: "10px 20px" })
})
</script>
<style scoped lang="less">
.search-form {
  padding-top: 22px;
  background-color: #fff;
}
</style>

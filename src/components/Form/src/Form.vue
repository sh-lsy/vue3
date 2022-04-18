<template>
  <div class="search-form">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in props.formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <el-form-item :label="item.label" :rules="item.rules" :style="itemLayout">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
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
                <el-date-picker
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from "vue"
import { FormItem } from "../types"

interface Props {
  modelValue: any
  formItems: FormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
// vue3 暂时不支持引用外部的interface
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({}),
  formItems: () => [
    {
      field: "",
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

const formData = ref({ ...props.modelValue })

const emit = defineEmits<{
  (e: "update:modelValue", val: any): void
}>()
watch(
  formData,
  (newValue) => {
    emit("update:modelValue", newValue)
  },
  {
    deep: true
  }
)
</script>
<style scoped lang="less">
.search-form {
  padding-top: 22px;
  background-color: #fff;
}
</style>

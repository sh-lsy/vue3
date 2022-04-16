type FormType = "input" | "password" | "select" | "datepicker"

export interface FormItem {
  type: FormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface SForm {
  formItems: FormItem[]
  labelWidth?: string
  colLayout?: any
  itemLayout: any
}

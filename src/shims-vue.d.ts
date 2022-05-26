/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export default component
}
// 防止ts mockjs报错
declare module "mockjs"

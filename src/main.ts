import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 全局注册element
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css" // 不引入ElLoading 样式不生效
import { globalRegister } from "./global"
/**
 * 引入自定义的mockXHR
 * 因为mockXHR不是默认导出的：export default{}
 * 所以引入时需要加大括号，这种可以引入多个
 */
import { mockXHR } from "../mock/index"
if (process.env.NODE_ENV == "development" && process.env.VUE_APP_ENV == "mock") {
  mockXHR()
}

createApp(App).use(globalRegister).use(store).use(router).mount("#app")

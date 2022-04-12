import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 全局注册element
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css" // 不引入ElLoading 样式不生效
import { globalRegister } from "./global"
createApp(App).use(globalRegister).use(store).use(router).mount("#app")

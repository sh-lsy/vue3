import { createApp } from "vue";
import App from "./App.vue";

import "normalize.css";
import "./assets/css/index.less";

import router from "./router"
import store from "./store"
import { setupStore } from "./store" // 刷新将本地存储数据 存到vuex中
// 全局注册element
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css" // 不引入ElLoading 样式不生效
import { globalRegister } from "./global"
setupStore()
createApp(App).use(globalRegister).use(store).use(router).mount("#app")

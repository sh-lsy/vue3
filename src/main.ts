import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
// 全局注册element
// import ElementPlus from "element-plus";
import "element-plus/dist/index.css" // 不引入ElLoading 样式不生效
import { globalRegister } from "./global"
createApp(App).use(globalRegister).use(store).use(router).mount("#app")
import Request from "./api"
Request.request({
  url: "/home/multidata",
  method: "GET",
  headers: {},
  showLoading: false,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("单独请求的config11")
      config.headers!.token = "212"
      return config
    },
    responseInterceptor: (res) => {
      console.log("单独响应的respons11e")
      return res
    }
  },
  params: {
    a: 1
  }
}).then((res) => {
  console.log(res)
})
interface DataType {
  data: any
  returnCode: string
  success: boolean
}

Request.get<DataType>({
  url: "/home/multidata",
  params: {
    a: 121
  }
}).then((res) => {
  console.log(res.data)
  console.log(res.returnCode)
  console.log(res.success)
})

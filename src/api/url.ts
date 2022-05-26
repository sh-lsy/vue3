// 根据process.env.NODE_ENV区分环境变量
// 开发环境: development
// 生成环境: production
// 测试环境: test,
// mock环境: VUE_APP_ENV = mock

let BASE_URL = ""
const TIME_OUT = 5000 // 超时时间
console.log(process.env)
if (process.env.NODE_ENV === "development") {
  if (process.env.VUE_APP_ENV === "mock") {
    BASE_URL = "http://localhost:8080"
  } else {
    BASE_URL = "http://123.207.32.32:8000/"
  }
} else if (process.env.NODE_ENV === "mock") {
  BASE_URL = "http://localhost:8080"
} else {
  BASE_URL = "http://localhost:8080"
}
export { BASE_URL, TIME_OUT }

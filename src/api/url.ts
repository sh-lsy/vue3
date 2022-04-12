// 根据process.env.NODE_ENV区分环境变量
// 开发环境: development
// 生成环境: production
// 测试环境: test

let BASE_URL = ""

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:8081"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://localhost:8080"
} else {
  BASE_URL = "http://localhost:8080"
}
export { BASE_URL }

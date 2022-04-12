import AxiosRequest from "./request"
import { BASE_URL, TIME_OUT } from "./url"
import localStorage from "@/utils/cache"
const Request = new AxiosRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = localStorage.getItem("token")
      if (token) {
        config.headers!.Authorization = token
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default Request

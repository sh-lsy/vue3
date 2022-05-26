import Mock from "mockjs"
export default [
  // GetUserInfo
  {
    url: "/getUserInfo",
    type: "get",
    response: () => {
      return {
        code: 200,
        message: "成功",
        data: {
          name: "testName"
        }
      }
    }
  },
  // GetToken
  {
    url: "/login",
    type: "post",
    response: (option: any) => {
      const $name = JSON.parse(option.body).name
      if ($name) {
        return Mock.mock({
          code: 200,
          message: "成功",
          data: {
            name: $name,
            token: "token"
          }
        })
      } else {
        return Mock.mock({
          code: 400,
          message: "未提交参数"
        })
      }
    }
  }
]

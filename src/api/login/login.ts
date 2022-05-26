import Request from ".."

import { Account, DataType, LoginResult } from "./types"
enum LoginApi {
  Login = "/login"
}

export function Login(account: Account) {
  return Request.post<DataType<LoginResult>>({
    url: LoginApi.Login,
    data: account
  })
}

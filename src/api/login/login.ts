import Request from ".."

import { Account, DataType, LoginResult } from "./types"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/",
  UserMenus = "/role/"
}

// 账号登录
export function accountLoging(account: Account) {
  return Request.post<DataType<LoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
// 根据id获取用户信息
export function getUserInfoById(id: number) {
  return Request.get<DataType>({
    url: LoginAPI.LoginUserInfo + id
    // showLoading: false
  })
}
export function getUserMenusByRoleId(id: number) {
  return Request.get<DataType>({
    url: LoginAPI.UserMenus + id + "/menu",
    showLoading: false
  })
}

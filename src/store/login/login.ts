import { Module } from "vuex"
import { LoginState } from "./types"
import { RootState } from "../types"

import { accountLoging, getUserInfoById, getUserMenusByRoleId } from "@/api/login/login"
import { Account } from "@/api/login/types"

import localStorage from "@/utils/cache"
import { mapMenusToRoutes } from "@/utils/map-menus"

import router from "@/router"
import { ElMessage } from "element-plus"
const loginModule: Module<LoginState, RootState> = {
  namespaced: true,
  state: {
    token: "",
    userInfo: {},
    userMenus: {}
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
      // 动态绑定路由
      const routes = mapMenusToRoutes(userMenus)
      // 将routes 加入main里面
      routes.forEach((route) => {
        router.addRoute("main", route)
      })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: Account) {
      const loginResult = await accountLoging(payload)
      console.log(loginResult)
      if (!loginResult) {
        ElMessage.warning({
          message: "账号：coderwhy 密码：123456",
          center: true
        })
        localStorage.removeItem("name")
        localStorage.removeItem("password")
        return
      }
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localStorage.setItem("token", token)

      const userInfoResult = await getUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      localStorage.setItem("userInfo", userInfo)

      const userMenusResult = await getUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localStorage.setItem("userMenus", userMenus)
      router.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = localStorage.getItem("token")
      if (token) {
        commit("changeToken", token)
      }
      const userInfo = localStorage.getItem("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }
      const userMenus = localStorage.getItem("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule

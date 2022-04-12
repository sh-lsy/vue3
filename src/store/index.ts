import { createStore } from "vuex"

import login from "./login/login"

import { RootState } from "./types"

const store = createStore<RootState>({
  state: {
    name: "skye",
    age: 18
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}
export default store

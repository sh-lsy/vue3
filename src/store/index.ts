import { createStore, Store, useStore as useVuexStore } from "vuex"

import login from "./login/login"

import { RootState, StoreType } from "./types"

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

export function useStore(): Store<StoreType> {
  return useVuexStore()
}

export default store

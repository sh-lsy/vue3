import { LoginState } from "./login/types"

export interface RootState {
  name: string
  age: number
}
export interface RootWithModule {
  login: LoginState
}

export type StoreType = RootState & RootWithModule

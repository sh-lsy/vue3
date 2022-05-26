export interface Account {
  name: string
  pwd: string
}

export interface LoginResult {
  id: number
  name: string
  token: string
}
export interface DataType<T = any> {
  code: number
  data: T
}

import Mock from "mockjs"
import { MockParams } from "./typing"
import api1 from "./api/api1"
const mocks = [...api1]

//设置延时时间
Mock.setup({
  timeout: "300"
})

export function mockXHR() {
  let i: MockParams
  for (i of mocks) {
    Mock.mock(new RegExp(i.url), i.type || "get", i.response)
  }
}

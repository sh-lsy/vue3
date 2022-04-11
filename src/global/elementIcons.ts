// 注册element-plus/icons-vue
import { App } from "vue";
import * as ElIcons from "@element-plus/icons-vue";

export default function (app: App): void {
  for (const name in ElIcons) {
    app.component(name, (ElIcons as any)[name]);
  }
}

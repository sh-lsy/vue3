import { App } from "vue";
import elementIcons from "./elementIcons";

export function globalRegister(app: App): void {
  app.use(elementIcons);
}

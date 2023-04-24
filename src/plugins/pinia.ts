import { createPinia, PiniaPlugin } from "pinia";
import { App } from "vue";

export const pinia = createPinia();

export function usePinia(app: App) {
  app.use(pinia);
}

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    pinia: PiniaPlugin;
  }
}

export default pinia;

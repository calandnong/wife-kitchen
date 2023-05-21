/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}


interface ImportMetaEnv {
  /**
   * 接口前缀
   */
  readonly APPLET_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

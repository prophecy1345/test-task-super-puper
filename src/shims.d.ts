declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, unknown>
  export default component
}

declare module '*.md' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}

declare module 'vue-router' {
  import { RouteComponent, Router, RouteLocationRaw, RouterOptions, RouterHistory, RouteLocationNormalizedLoaded, RouteRecordNormalized, NavigationGuard } from 'vue-router'
  
  export const createRouter: (options: RouterOptions) => Router
  export const createWebHistory: (base?: string) => RouterHistory
  export const useRoute: () => RouteLocationNormalizedLoaded
  export const useRouter: () => Router
  export interface RouteLocationNormalized {
    path: string
    fullPath: string
    hash: string
    query: Record<string, string | string[]>
    params: Record<string, string | string[]>
    name: string | symbol | null
    matched: RouteRecordNormalized[]
    meta: Record<string, unknown>
  }
  export type RouteRecordRaw = {
    path: string
    redirect?: RouteLocationRaw
    name?: string | symbol
    component?: RouteComponent
    components?: Record<string, RouteComponent>
    children?: RouteRecordRaw[]
    meta?: Record<string, unknown>
    beforeEnter?: NavigationGuard
    props?: boolean | Record<string, unknown> | ((to: RouteLocationNormalized) => Record<string, unknown>)
  }
  export type NavigationGuardNext = (to?: RouteLocationRaw | false | void) => void
}

declare module 'vue-i18n' {
  export interface I18nOptions {
    locale?: string;
    fallbackLocale?: string;
    messages?: Record<string, Record<string, string>>;
    [key: string]: unknown;
  }
  
  export const createI18n: (options: I18nOptions) => I18n
  export interface I18n {
    global: {
      locale: {
        value: string
      }
      t: (key: string, ...args: unknown[]) => string
    }
  }
}

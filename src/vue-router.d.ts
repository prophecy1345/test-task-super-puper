declare module 'vue-router' {
  export * from 'vue-router/dist/vue-router'

  import type { 
    RouteRecordRaw as OriginalRouteRecordRaw, 
    RouteLocationRaw, 
    Router, 
    RouterOptions, 
    RouterHistory, 
    RouteLocationNormalizedLoaded
  } from 'vue-router/dist/vue-router'

  export const createRouter: (options: RouterOptions) => Router
  export const createWebHistory: (base?: string) => RouterHistory
  export const useRoute: () => RouteLocationNormalizedLoaded
  export type RouteLocationNormalized = RouteLocationNormalizedLoaded
  export type RouteRecordRaw = OriginalRouteRecordRaw

  export interface NavigationGuardNext {
    (to?: RouteLocationRaw | false | void): void
  }
}

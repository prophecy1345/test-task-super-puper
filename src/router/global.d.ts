declare module 'vue-router' {
  import type { Component, Ref } from 'vue'

  export interface RouteLocationRaw {
    path?: string
    name?: string | symbol | null
    params?: Record<string, string | string[] | number | boolean>
    query?: Record<string, string | string[] | number | boolean>
    hash?: string
  }

  export interface RouteLocationNormalized {
    path: string
    fullPath: string
    hash: string
    query: Record<string, string | string[]>
    params: Record<string, string | string[]>
    name: string | symbol | null
    meta: Record<string | number | symbol, unknown>
    matched: RouteRecordNormalized[]
  }

  export interface RouteRecordRaw {
    path: string
    redirect?: RouteLocationRaw | ((to: RouteLocationNormalized) => RouteLocationRaw)
    name?: string | symbol
    component?: Component | null
    components?: Record<string, Component>
    children?: RouteRecordRaw[]
    meta?: Record<string | number | symbol, unknown>
    beforeEnter?: NavigationGuard | NavigationGuard[]
    props?: boolean | Record<string, unknown> | ((to: RouteLocationNormalized) => Record<string, unknown>)
  }

  export interface RouteRecordNormalized {
    path: string
    redirect: RouteLocationRaw | ((to: RouteLocationNormalized) => RouteLocationRaw) | undefined
    name: string | symbol | undefined
    components: Record<string, Component>
    children: RouteRecordRaw[]
    meta: Record<string | number | symbol, unknown>
    beforeEnter: NavigationGuard | NavigationGuard[] | undefined
    props: Record<
      string,
      boolean | Record<string, unknown> | ((to: RouteLocationNormalized) => Record<string, unknown>)
    >
  }

  export type NavigationGuard = (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => void | Promise<void> | boolean | undefined | void

  export interface NavigationGuardNext {
    (): void
    (error: Error): void
    (location: RouteLocationRaw): void
    (valid: boolean | undefined): void
    (cb: () => void): void
  }

  export interface RouterHistory {
    readonly base: string
    readonly location: string
    state: unknown
    push(to: RouteLocationRaw): Promise<void>
    replace(to: RouteLocationRaw): Promise<void>
    go(delta: number): void
    listen(callback: (to: string, from: string) => void): () => void
  }

  export interface RouterOptions {
    history: RouterHistory
    routes: RouteRecordRaw[]
    scrollBehavior?: (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      savedPosition: { left: number; top: number } | null
    ) => { left?: number; top?: number; behavior?: string; el?: string | Element } | void | null
  }

  export function createRouter(options: RouterOptions): Router
  
  export interface Router {
    currentRoute: Ref<RouteLocationNormalized>
    push(to: RouteLocationRaw): Promise<void>
    replace(to: RouteLocationRaw): Promise<void>
    go(delta: number): void
    back(): void
    forward(): void
    beforeEach(guard: NavigationGuard): () => void
    afterEach(hook: (to: RouteLocationNormalized, from: RouteLocationNormalized) => void): () => void
  }

  export function createWebHistory(base?: string): RouterHistory
  export function useRoute(): RouteLocationNormalized
}

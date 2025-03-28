import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalized,
  type NavigationGuardNext,
  type RouteRecordRaw
} from 'vue-router'
import { availableLocales } from '../i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/:locale?',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    beforeEnter: localeGuard
  },
  {
    path: '/:locale?/tos',
    name: 'TermsOfService',
    component: () => import('../views/TermsOfService.vue'),
    beforeEnter: localeGuard
  },
  {
    path: '/:locale?/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
    beforeEnter: localeGuard
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    savedPosition: { left: number; top: number } | null
  ) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

function localeGuard(
  to: RouteLocationNormalized,
  _: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const locale = to.params.locale as string | undefined

  if (!locale) {
    return next({ params: { ...to.params, locale: 'en' }, query: to.query, hash: to.hash })
  }

  if (!availableLocales.includes(locale)) {
    return next({ params: { ...to.params, locale: 'en' }, query: to.query, hash: to.hash })
  }

  return next()
}

export default router

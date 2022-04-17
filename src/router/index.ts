import router from './router'
import NProgress from '@/config/nprogress'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { RouteRecordRaw } from 'vue-router'
import { redirectRouter } from './redirect'

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // TODO: 判断是否已登录，路由菜单是否存在，根据权限进行路由拦截
  const asyncRouteStore = useAsyncRouteStore()
  if (asyncRouteStore.getMenus.length === 0) {
    const routes = await asyncRouteStore.generateRoutes()
    // 动态添加可访问路由表
    routes.forEach((item: unknown) => {
      router.addRoute(item as unknown as RouteRecordRaw)
    })

    // 添加重定向404
    router.addRoute(redirectRouter as unknown as RouteRecordRaw)

    // 添加完动态路由之后，需要在进行一次主动跳转
    return next(to.path)
  }

  // 判断当前路由是否需要访问权限
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    return next()
  }
  next()
  // to and from are both route objects. must call `next`.
})

router.afterEach(() => {
  NProgress.done()
})

export default router

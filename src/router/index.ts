import { RouteRecordRaw } from 'vue-router'
import NProgress from '@/config/nprogress'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { useUserStore } from '@/store/modules/user'
import { storage } from '@/utils/Storage'
import router from './router'
import { redirectRouter } from './redirect'

// 路由白名单
const whitePathList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // 白名单可直接进入
  if (whitePathList.includes(to.path)) {
    next()
    return
  }

  // 判断是否已登录
  const token = storage.get('ACCESS-TOKEN')
  if (!token) {
    next({ path: '/login' })
    return
  }

  // TODO: 判断路由菜单是否存在，获取用户相关信息，根据权限进行路由拦截
  const userStore = useUserStore()
  const userInfo = await userStore.getInfo()

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

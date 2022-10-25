import { RouteRecordRaw } from 'vue-router'
import NProgress from '@/config/nprogress'
import { useAsyncRouteStore } from '@/store/modules/asyncRoute'
import { useUserStore } from '@/store/modules/user'
import { storage } from '@/utils/Storage'
import { WHITE_PATH_LIST } from '@/config/config'
import router from './router'
import { redirectRouter } from './redirect'
import { removeAllPending } from '@/service/http'

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  // 判断是否已登录
  const token = storage.get('ACCESS-TOKEN')
  // 未登录
  if (!token) {
    // 白名单可直接进入
    if (WHITE_PATH_LIST.includes(to.path)) {
      next()
      return
    }
    next({ path: '/login', replace: true, query: { redirect: to.path } })
    return
  }

  // 如果已登录，不允许回到登陆页面，跳转到主页
  if (to.path === '/login') {
    next({ path: '/home' })
    return
  }

  // TODO: 判断路由菜单是否存在，获取用户相关信息，根据权限进行路由拦截
  const userStore = useUserStore()
  let userInfo = userStore.getUserInfo
  // 如果用户信息不存在，重新获取
  if (JSON.stringify(userInfo) === '{}') {
    userInfo = await userStore.getInfo()
  }
  const asyncRouteStore = useAsyncRouteStore()
  if (asyncRouteStore.getMenus.length === 0) {
    const routes = await asyncRouteStore.generateRoutes(userInfo)
    // 动态添加可访问路由表
    routes.forEach((item: unknown) => {
      router.addRoute(item as unknown as RouteRecordRaw)
    })

    // 添加重定向404
    router.addRoute(redirectRouter as unknown as RouteRecordRaw)

    // 添加完动态路由之后，需要在进行一次主动跳转
    return next(to.path)
  }

  next()
  // to and from are both route objects. must call `next`.
})

router.afterEach(() => {
  removeAllPending()
  NProgress.done()
})

export default router

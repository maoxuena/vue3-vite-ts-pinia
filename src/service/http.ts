import LimitPromise from './limitRequest'
import axios, { AxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'
import { storage } from '@/utils/Storage'

const cancelToken = axios.CancelToken // 阻止请求
const source = cancelToken.source()

// 设置请求头和请求路径
axios.defaults.baseURL = import.meta.env.VITE_APP_WEB_URL as string // 默认地址
axios.defaults.timeout = 10000 // 设置超时时间（10s）
axios.defaults.withCredentials = true // 跨域时候允许携带凭证
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
axios.interceptors.request.use(
  (config): AxiosRequestConfig<any> => {
    config.cancelToken = source.token // 全局添加cancelToken
    const token = storage.get('ACCESS-TOKEN')
    if (token) {
      //@ts-ignore
      config.headers.token = token
    }
    return config
  },
  (error) => {
    return error
  }
)
// 响应拦截
axios.interceptors.response.use(
  (res) => {
    // 对于token过期的处理
    if (res.data.code === '101') {
      // 取消其他正在进行的请求
      source.cancel('登录信息已过期')
      window.$dialog.info({
        title: '提示',
        content: '登录信息已过期，您确定要退出登录吗',
        positiveText: '确定',
        negativeText: '取消',
        onPositiveClick: () => {
          storage.remove('ACCESS-TOKEN')
          storage.remove('CURRENT-USER')
          location.reload()
        },
        onNegativeClick: () => {
          NProgress.done()
        },
      })
    }
    return res
  },
  (error) => {
    if (axios.isCancel(error)) {
      // 取消请求的情况下，终端Promise调用链
      return new Promise(() => {})
    }
    return Promise.reject(error)
  }
)

interface ResType<T> {
  code: number
  data?: T
  msg: string
  err?: string
}
interface Http {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>
  post<T>(url: string, params?: unknown): Promise<ResType<T>>
  upload<T>(url: string, params: unknown): Promise<ResType<T>>
  download(url: string): void
}

export const http: Http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  },
}

// 限制axios并发请求
const limitPromise = new LimitPromise(2)
export const limitRequest = {
  limitPost(url: string, data?: any, resolve?: (value: any | PromiseLike<any>) => void, reject?: (reason?: any) => void) {
    return limitPromise
      .call(() => http.post(url, data))
      .then(resolve)
      .catch(reject)
  },
  limitGet(url: string, data?: any, resolve?: (value: any | PromiseLike<any>) => void, reject?: (reason?: any) => void) {
    return limitPromise
      .call(() => http.get(url, data))
      .then(resolve)
      .catch(reject)
  },
}

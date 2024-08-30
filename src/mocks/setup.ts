/*
 * @Author: maoxuena
 * @Date: 2024-08-29 15:05:15
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-08-30 16:28:14
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\setup.ts
 * @Description:
 */
import { toPromise } from 'js-simpler'
import { setupWorker } from 'msw/browser'
import { APP_WEB_URL } from '@/config/config'
export const promiser = (value: any, delay = 300) => {
  return toPromise(delay)
    .then(() => Promise.resolve(value))
    .catch(() => Promise.reject(value))
}

export const resolver = (url: string, regex?: boolean) => {
  const check = /^https?:\/\//i
  const repeat = /^\/*|\/+/g

  if (!check.test(url)) {
    url = (APP_WEB_URL + url).replace(repeat, '/')
  }

  if (url && regex) {
    const format = /[-/\\^$*+?.()|[\]{}]/g
    const source = url.split('?')[0].replace(format, '\\$&')
    return new RegExp(source + '(\\?.*)?$')
  }

  return url
}

export const request = () => {
  const printer = async (tag: string) => {
    const log = console.log
    const group = console.group
    const groupEnd = console.groupEnd

    return (printer: (log: any) => void) => {
      log('\n')
      group(`------- 模拟接口 -> ${tag} ---------`)
      printer(log)
      groupEnd()
      log('\n')
    }
  }

  const params = async (req: any) => {
    return req.params
  }

  const query = async (req: any) => {
    const url = req.request.url as string
    const path = url.split('?')[0] as string
    const search = url.substring(path.length)
    const params = new URLSearchParams(search)
    return Object.fromEntries(params)
  }

  const body = async (req: any) => {
    return req.request.clone().json()
  }

  return {
    printer,
    params,
    query,
    body,
  }
}

export const runner = () => {
  const worker = setupWorker()

  worker.start({
    // serviceWorker: { url: `/msw.js` },
    onUnhandledRequest: 'bypass', // 对于没有 mock 的接口直接通过，原样执行，避免异常
    quiet: true, // 是否禁止在控制台打印匹配的日志记录
  })

  return worker
}

export const rester = request()
export const worker = runner()

/*
 * @Author: maoxuena
 * @Date: 2024-08-30 10:07:06
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-08-30 16:24:57
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\auth\tokenExpired.ts
 * @Description:
 */
import { promiser, resolver, worker, rester } from '@/mocks/setup'
import { http, HttpResponse } from 'msw'

const tag = 'token 过期'
const url = resolver('/tokenExpired')

worker.use(
  http.get(url, async (req) => {
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let result: any = null

    result = {
      code: '101',
      message: 'token过期',
      data: null,
    }

    printer((log) => {
      log('[query] - ', query)
      log('[params] - ', params)
      log('[result] - ', result)
    })

    return promiser(HttpResponse.json(result), 100)
  })
)

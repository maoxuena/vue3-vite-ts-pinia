/*
 * @Author: maoxuena
 * @Date: 2024-08-29 15:05:15
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-08-30 16:26:19
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\auth\logout.ts
 * @Description:
 */
import { promiser, resolver, worker, rester } from '@/mocks/setup'
import { http, HttpResponse } from 'msw'

const tag = '系统退出'
const url = resolver('/logout')

worker.use(
  http.post(url, async (req) => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    const result = {
      code: '200',
      message: '退出成功',
      data: null,
    }

    printer((log) => {
      log('[body] - ', body)
      log('[query] - ', query)
      log('[params] - ', params)
      log('[result] - ', result)
    })

    return promiser(HttpResponse.json(result), 100)
  })
)

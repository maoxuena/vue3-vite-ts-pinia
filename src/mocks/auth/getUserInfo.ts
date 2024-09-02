/*
 * @Author: maoxuena
 * @Date: 2024-08-29 16:42:57
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-02 10:36:08
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\auth\getUserInfo.ts
 * @Description:
 */
import { promiser, resolver, worker, rester } from '@/mocks/setup'
import { http, HttpResponse } from 'msw'
import { userInfo } from '../data'

const tag = '获取用户信息'
const url = resolver('/getUserInfo')

worker.use(
  http.get(url, async (req) => {
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let result: any = null

    result = {
      code: '200',
      message: '成功',
      data: userInfo,
    }

    printer((log) => {
      log('[query] - ', query)
      log('[params] - ', params)
      log('[result] - ', result)
    })

    return promiser(HttpResponse.json(result), 100)
  })
)

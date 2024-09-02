/*
 * @Author: maoxuena
 * @Date: 2024-08-29 15:05:15
 * @LastEditors: maoxuena
 * @LastEditTime: 2024-09-02 10:36:21
 * @FilePath: \vue3-vite-ts-pinia\src\mocks\auth\login.ts
 * @Description:
 */

import { promiser, resolver, worker, rester } from '@/mocks/setup'
import { http, HttpResponse } from 'msw'
import { userInfo } from '../data'

const tag = '系统登录'
const url = resolver('/login')

worker.use(
  http.post(url, async (req) => {
    const body = await rester.body(req)
    const query = await rester.query(req)
    const params = await rester.params(req)
    const printer = await rester.printer(tag)

    let result: any = null

    if (body.username !== 'admin' || body.password !== '123456') {
      result = {
        code: '-1',
        message: '用户名密码错误',
        data: null,
      }
    }

    if (body.username === 'admin' && body.password === '123456') {
      result = {
        code: '200',
        message: '登录成功',
        data: {
          accessToken: 'ozvehmgvzyikdyrbudxzevqhhycgvd',
          verifySuccess: true,
          userInfo,
        },
      }
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

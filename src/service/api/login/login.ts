import { http } from '@/service/http'
import * as T from './types'

const loginApi: T.ILoginApi = {
  login(params) {
    return http.post('/login', params)
  },
  getUserInfo() {
    return http.get('/getUserInfo')
  },
  getTest() {
    return http.get('/imooc/search/hotwords')
  },
}

export default loginApi

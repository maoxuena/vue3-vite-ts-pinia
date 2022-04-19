import { defineStore } from 'pinia'
import { createStorage, storage } from '@/utils/storage'
import { ResultEnum } from '@/enums/httpEnum'
import loginApi from '@/service/api/login/login'
import * as T from '@/service/api/login/types'
import { IUserInfoState, IUserState } from './types'

const Storage = createStorage({ storage: localStorage })

export const useUserStore = defineStore({
  id: 'user',
  state: (): IUserState => ({
    token: Storage.get('ACCESS-TOKEN', ''),
    username: '',
    welcome: '',
    avatar: '',
    permissions: [],
    info: Storage.get('CURRENT-USER', {}),
  }),
  getters: {
    getToken(): string {
      return this.token
    },
    getAvatar(): string {
      return this.avatar
    },
    getUsername(): string {
      return this.username
    },
    getPermissions(): [any][] {
      return this.permissions
    },
    getUserInfo(): IUserInfoState {
      return this.info
    },
  },
  actions: {
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(info: IUserInfoState) {
      this.info = info
    },
    // 登录
    async login(userInfo: T.ILoginParams) {
      try {
        const response = await loginApi.login(userInfo)
        const { data, code } = response
        if (code === ResultEnum.SUCCESS) {
          const ex = 7 * 24 * 60 * 60 * 1000
          storage.set('ACCESS-TOKEN', data.accessToken, ex)
          storage.set('CURRENT-USER', data.userInfo, ex)
          storage.set('IS-LOCKSCREEN', false)
          this.setToken(data.accessToken)
          this.setUserInfo(data.userInfo)
        }
        return Promise.resolve(response)
      } catch (e) {
        return Promise.reject(e)
      }
    },
    // 获取用户信息
    async getInfo() {
      try {
        const response = await loginApi.getUserInfo()
        const { data, code } = response
        if (code === ResultEnum.SUCCESS) {
          this.setUserInfo(data)
        }
        return Promise.resolve(data)
      } catch (e) {
        return Promise.reject(e)
      }
    },

    // 登出
    // async logout() {
    //   this.setPermissions([])
    //   this.setUserInfo('')
    //   storage.remove('ACCESS-TOKEN')
    //   storage.remove('CURRENT-USER')
    //   return Promise.resolve('')
    // },
  },
})

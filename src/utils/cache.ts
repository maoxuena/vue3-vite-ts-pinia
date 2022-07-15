interface ProxyStorage {
  getItem(key: string): any
  setItem(Key: string, value: string): void
  removeItem(key: string): void
  clear(): void
}

class Cache implements ProxyStorage {
  private storage: ProxyStorage

  constructor(storageModel: ProxyStorage) {
    this.storage = storageModel
  }

  // 增加
  public setItem(key: string, value: any, expire = 0): void {
    if (isNaN(expire) || expire < 0) {
      throw new Error('Expire must be a number')
    }
    const data = {
      value: value, // 存储值
      time: Date.now(), // 存值时间戳
      expire: expire * 1000, // 过期时间
    }
    this.storage.setItem(key, JSON.stringify(data))
  }

  // 获取
  public getItem(key: string): any {
    const storage = JSON.parse(this.storage.getItem(key))
    // 不存在
    if (storage === null) {
      return null
    }
    const nowTime = Date.now()
    // 过期删除
    if (storage.expire && storage.expire < nowTime - storage.time) {
      this.storage.removeItem(key)
      return null
    }
    try {
      return JSON.parse(storage.value)
    } catch {
      return storage.value
    }
  }

  // 删除
  public removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  // 清空
  public clear(): void {
    this.storage.clear()
  }
}

export const SessionCache = new Cache(sessionStorage)
export const LocalCache = new Cache(localStorage)

/*
 * @Author: maoxuena
 * @Date: 2024-02-23 16:40:20
 * @LastEditTime: 2024-09-02 09:31:25
 * @LastEditors: maoxuena
 * @Description:
 */
self.onmessage = (event) => {
  const data = event.data
  const result = data * 2 // 假设我们的工作就是简单地将接收到的数据乘以2
  self.postMessage(result)
}

// 方式二
// addEventListener('message', (e) => {
//   const { data } = e
//   const result = data * 2
//   return postMessage(result)
// })

import useClipboard from 'vue-clipboard3'
const clipboardSuccess = (text: string) => {
  ;(window as any).$message.success(`${text} 复制成功`, {
    duration: 1500,
  })
}

const clipboardError = (text: string) => {
  ;(window as any).$message.success(`${text} 复制失败`, {
    duration: 1500,
  })
}
const handleClipboard = async (text: string) => {
  const { toClipboard } = useClipboard()
  try {
    await toClipboard(text)
    clipboardSuccess(text)
  } catch (e) {
    clipboardError(text)
  }
}

export default handleClipboard

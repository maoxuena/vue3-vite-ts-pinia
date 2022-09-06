import { DatavComponent } from '@/store/modules/types'

export class BasicText extends DatavComponent{
  config = {
    title: '我是标题数据',
    textStyle: {
      fontFamily: 'Microsoft Yahei',
      fontSize: 24,
      color: '#fff',
      fontWeight: 'normal',
    },
    textAlign: 'center',
    writingMode: 'horizontal-tb',
    letterSpacing: 0,
    backgroundStyle: {
      show: false,
      bgColor: '#008bff',
      borderRadius: 15,
      borderColor: '#fff',
      borderStyle: 'solid',
      borderWidth: 1,
    },
    ellipsis: false,
    urlConfig: {
      url: '',
      isBlank: false,
    },
  }
  constructor() {
    super('BasicText', { width: 300, height: 56 })
    // this.initData()
  }
  // initData() {
  //   return this
  // }
}

export default BasicText

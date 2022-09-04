export interface BasicText {
  title: string
  width: number
  height: number
  textStyle: {
    fontFamily: string
    fontSize: number
    color: string
    fontWeight: string
  }
  textAlign: string
  writingMode: string
  letterSpacing: number
  backgroundStyle: {
    show: false
    bgColor: string
    borderRadius: number
    borderColor: string
    borderStyle: string
    borderWidth: 1
  }
  ellipsis: false
  urlConfig: {
    url: ''
    isBlank: false
  }
}

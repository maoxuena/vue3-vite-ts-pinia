export interface SelectItem {
  [x: string]: any
  path: string
  title: string[]
}

interface ObjectOf<V> {
  [_: string]: V
}

export interface FuseItem {
  item: ObjectOf<SelectItem>
  refIndex: number
}

export interface HeadTag {
  tag: string
  props: {
    body?: boolean
    [k: string]: any
  }
}

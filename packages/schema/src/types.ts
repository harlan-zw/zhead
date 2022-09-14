export type Stringable = string | boolean | number

export interface UnsafeKeys {
  [key: string]: Stringable
}

export type Default<T extends undefined | Record<string, any>, D = {}> = [T] extends [undefined] ? D : T
export type Merge<T extends undefined | Record<string, any>, D = {}> = [T] extends [undefined] ? D : D & T

export interface MergeHead {
  title?: any
  titleTemplate?: any
  base?: Record<string, any>
  link?: Record<string, any>
  meta?: Record<string, any>
  style?: Record<string, any>
  script?: Record<string, any>
  noscript?: Record<string, any>
  htmlAttrs?: Record<string, any>
  bodyAttrs?: Record<string, any>
}

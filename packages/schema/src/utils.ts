export type Booleanable = boolean | 'false' | 'true' | ''
export type Stringable = string | Booleanable | number

export interface DataKeys {
  [key: `data-${string}`]: Stringable
}

export type DefinedValueOrEmptyObject<T extends undefined | Record<string, any>> = [T] extends [undefined] ? ({}) : T
export type Merge<T extends undefined | Record<string, any>, D = {}> = [T] extends [undefined] ? D : D & T

export interface MergeHead {
  base?: {}
  link?: {}
  meta?: {}
  style?: {}
  script?: {}
  noscript?: {}
  htmlAttrs?: {}
  bodyAttrs?: {}
}

export type MaybePromiseProps<T> = T | {
  [key in keyof T]?: T[key] | Promise<T[key]>
}

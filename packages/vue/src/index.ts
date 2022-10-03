import type { MergeHead } from '@zhead/schema'
import type { RawReactiveHead, ReactiveHead } from '@zhead/schema-vue'

export * from '@zhead/schema-vue'
export * from './meta'

export function defineHead<T extends MergeHead>(input: ReactiveHead<T>) {
  return input
}

export function defineHeadRaw<T extends MergeHead>(input: RawReactiveHead<T>) {
  return input
}

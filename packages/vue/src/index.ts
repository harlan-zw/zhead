import type { MergeHead } from '@zhead/schema'
import type { ReactiveHead } from '@zhead/schema-vue'

export * from '@zhead/schema-vue'
export * from './meta'

export function defineHead<T extends MergeHead>(input: ReactiveHead<T>) {
  return input
}

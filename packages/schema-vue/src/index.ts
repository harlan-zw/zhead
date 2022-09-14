import type { MergeHead } from '@zhead/schema'
import type { ReactiveHead } from './schema'

export * from './schema'

export function defineHead<T extends MergeHead>(input: ReactiveHead<T>) {
  return input
}


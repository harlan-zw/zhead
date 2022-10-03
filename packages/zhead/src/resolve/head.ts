import type { Head, MergeHead } from '@zhead/schema'
import type { HeadRaw } from '@zhead/schema-raw'

export function defineHead<T extends MergeHead>(input: Head<T>) {
  return input
}

export function defineHeadRaw(input: HeadRaw) {
  return input
}

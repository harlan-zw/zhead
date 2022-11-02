import type { Head, MergeHead } from '@zhead/schema'

export function defineHead<T extends MergeHead>(input: Head<T>) {
  return input
}

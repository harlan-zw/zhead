import type { Head, MergeHead } from '.'

export function defineHead<T extends MergeHead>(input: Head<T>) {
  return input
}

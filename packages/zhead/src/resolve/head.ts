import type { HeadInput } from '@zhead/schema'
import { packKeysDeep } from '../transforms'

export function defineHead<T extends HeadInput>(input: T) {
  return input
}

export function resolveHead<T extends HeadInput>(input: T) {
  return packKeysDeep({ ...input })
}

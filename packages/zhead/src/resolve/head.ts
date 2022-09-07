import type { Head } from '@zhead/schema'
import { changeKeyCasingDeep } from '../transforms'

export function defineHead<T extends Head>(input: T) {
  return input
}

export function resolveHead<T extends Head>(input: T) {
  return changeKeyCasingDeep({ ...input })
}

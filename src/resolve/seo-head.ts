import type { HeadInput } from '../schema'
import { withDefaults } from '../decorators'
import { resolveKeyCasing } from './utils'

export function resolveSeoHead<T extends HeadInput>(input: T) {
  const output = withDefaults({ ...input })
  const arrayInput = ['meta', 'script', 'style', 'link'] as const
  for (const key of arrayInput) {
    if (key in output) {
      // @ts-expect-error untyped
      output[key] = output[key].map(entry => resolveKeyCasing(entry))
    }
  }
  return output
}

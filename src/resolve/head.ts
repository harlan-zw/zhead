import type { HeadInput } from '../schema'
import { resolveProps } from './utils'

export function resolveHead<T extends HeadInput>(input: T) {
  const output = { ...input }
  for (const key of Object.keys(input)) {
    // @ts-expect-error untyped
    if (Array.isArray(output[key])) {
      // @ts-expect-error untyped
      output[key] = output[key].map(entry => resolveProps(entry))
    }
  }
  return output
}

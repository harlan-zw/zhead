import type { HeadInput } from '../schema'
import { resolveKeyCasing } from './utils'

export function resolveHead<T extends HeadInput>(input: T) {
  const output = { ...input }
  const arrayInput = ['meta', 'script', 'style', 'link'] as const
  for (const key of arrayInput) {
    if (key in output) {
      // @ts-expect-error untyped
      output[key] = output[key].map(entry => resolveKeyCasing(entry))
    }
  }
  return output
}

export function resolveHeadFlat<T extends HeadInput>(input: T) {
  const output = []
  for (const tag of Object.keys(input)) {
    // @ts-expect-error untyped
    const v = input[tag]
    if (Array.isArray(v))
      output.push(v.map(entry => ({ tag, attributes: resolveKeyCasing(entry) })))
    else if (typeof v === 'object')
      output.push([({ tag, attributes: resolveKeyCasing(v) })])
    else
      output.push([({ tag, attributes: { children: v } })])
  }
  return output.flat()
}

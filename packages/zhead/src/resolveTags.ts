import type { Head, HeadTag } from '@zhead/schema'
import { normaliseTag } from '../src/normaliseTag'

export function resolveTags<T extends Head>(input: T) {
  // strips unused keys
  const output: HeadTag[] = []
  for (const tag of Object.keys(input)) {
    // @ts-expect-error untyped
    const v = Array.isArray(input[tag]) ? input[tag] : [input[tag]]
    output.push(
      // @ts-expect-error untyped
      v.map(entry => normaliseTag(tag, entry)).filter(v => !!v),
    )
  }
  return output.flat()
}

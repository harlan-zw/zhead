import type { BaseHead, Head, HeadTag } from '@zhead/schema'
import { normaliseTag } from '../src/normaliseTag'

export async function resolveTags<T extends BaseHead = Head>(input: T) {
  // strips unused keys
  const output: HeadTag[] = []
  for (const tag of Object.keys(input)) {
    // @ts-expect-error untyped
    const v = Array.isArray(input[tag]) ? input[tag] : [input[tag]]
    // @ts-expect-error untyped
    const entries = await Promise.all(v.map(e => normaliseTag(tag, e)).flat())
    output.push(
      // @ts-expect-error untyped
      entries.filter(v => !!v),
    )
  }
  return output.flat()
}

import type { Head, HeadTag } from '@zhead/schema'
import { changeKeyCasingDeep } from './transforms'

function primitiveToTag(tag: keyof Head, v: string | object): HeadTag | undefined {
  if (typeof v === 'object') {
    if (Object.keys(v).length > 0)
      return ({ tag, props: changeKeyCasingDeep(v) })
  }
  else { return ({ tag, props: { children: v } }) }
}

export function resolveTags<T extends Head>(input: T) {
  // strips unused keys
  const output: HeadTag[] = []
  for (const tag of Object.keys(input)) {
    // @ts-expect-error untyped
    const v = Array.isArray(input[tag]) ? input[tag] : [input[tag]]
    output.push(
      // @ts-expect-error untyped
      v.map(entry => primitiveToTag(tag, entry)).filter(v => !!v),
    )
  }
  return output.flat()
}

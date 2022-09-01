import type { HeadInput } from '../schema'
import { resolveMetaFlat } from '../resolve'

export function withDefaults(input: HeadInput) {
  // clone
  const output = { ...input }
  const defaultMetaTags = resolveMetaFlat({
    charset: 'utf-8',
    viewport: {
      initialScale: 1,
    },
  })
  output.meta = output.meta || []
  output.meta.unshift(...defaultMetaTags)
  return output
}

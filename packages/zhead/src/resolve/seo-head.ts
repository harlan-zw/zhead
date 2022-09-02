import type { HeadInput, MetaFlatInput } from '@zhead/schema'
import { resolveHead } from './head'
import { packMeta, unpackMeta } from './meta-flat'

export function resolveSeoHead<T extends HeadInput>(input: T) {
  const output = { ...input }
  const metaFlat = withInferredSeoMeta(output,
    withDefaultMeta(
      output,
      output.meta ? packMeta(output.meta) : {},
    ),
  )
  output.meta = unpackMeta(metaFlat)
  return resolveHead(output)
}

function withDefaultMeta(head: HeadInput, metaFlat: MetaFlatInput) {
  if (!metaFlat.charset)
    metaFlat.charset = 'utf-8'

  if (!metaFlat.viewport) {
    metaFlat.viewport = {
      initialScale: 1,
      width: 'device-width',
    }
  }
  return metaFlat
}

function withInferredSeoMeta(head: HeadInput, metaFlat: MetaFlatInput): MetaFlatInput {
  if (metaFlat.ogImage && !metaFlat.twitterCard)
    metaFlat.twitterCard = 'summary_large_image'

  if (head.title && !metaFlat.ogTitle)
    metaFlat.ogTitle = head.title

  if (metaFlat.description && !metaFlat.ogDescription)
    metaFlat.ogDescription = metaFlat.description

  if (!metaFlat.robots) {
    metaFlat.robots = {
      maxSnippet: -1,
      maxImagePreview: 'large',
      maxVideoPreview: -1,
    }
  }
  return metaFlat
}

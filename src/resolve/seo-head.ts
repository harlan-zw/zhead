import type {HeadInput, MetaFlatInput} from '../schema'
import { resolveHead } from './head'
import { flattenMeta, resolveMetaFlat } from './meta-flat'

export function resolveSeoHead<T extends HeadInput>(input: T) {
  const output = { ...input }
  const metaFlat = withInferredSeoMeta(output,
    withDefaultMeta(
      output,
      output.meta ? flattenMeta(output.meta) : {},
    ),
  )
  output.meta = resolveMetaFlat(metaFlat)
  return resolveHead(output)
}

export function withDefaultMeta(head: HeadInput, metaFlat: MetaFlatInput) {
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

export function withInferredSeoMeta(head: HeadInput, metaFlat: MetaFlatInput): MetaFlatInput {
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

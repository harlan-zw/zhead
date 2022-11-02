import type { Head, HeadTag } from '@zhead/schema'

export function resolveSeoHead<T extends Head>(tags: HeadTag[]) {
  // const output = { meta: [] }
  // const metaFlat = withInferredSeoMeta(output,
  //   withDefaultMeta(
  //     output,
  //     output.meta ? packMeta(output.meta) : {},
  //   ),
  // )
  // output.meta = unpackMeta(metaFlat)
  return tags
}
//
// function withDefaultMeta(head: Head, metaFlat: MetaFlatInput) {
//   if (!metaFlat.charset)
//     metaFlat.charset = 'utf-8'
//
//   if (!metaFlat.viewport) {
//     metaFlat.viewport = {
//       initialScale: 1,
//       width: 'device-width',
//     }
//   }
//   return metaFlat
// }
//
// function withInferredSeoMeta(head: Head, metaFlat: MetaFlatInput): MetaFlatInput {
//   if (metaFlat.ogImage && !metaFlat.twitterCard)
//     metaFlat.twitterCard = 'summary_large_image'
//
//   if (head.title && !metaFlat.ogTitle)
//     metaFlat.ogTitle = head.title
//
//   if (metaFlat.description && !metaFlat.ogDescription)
//     metaFlat.ogDescription = metaFlat.description
//
//   if (!metaFlat.robots) {
//     metaFlat.robots = {
//       maxSnippet: -1,
//       maxImagePreview: 'large',
//       maxVideoPreview: -1,
//     }
//   }
//   return metaFlat
// }

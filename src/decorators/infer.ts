import type { HeadInput } from './schema'

export function inferSocialShare(input: HeadInput) {
  // clone
  // const output = { ...input }
  // const defaultMetaTags = resolveMetaTags({
  //   charset: 'utf-8',
  //   viewport: {
  //     width: 'device-width',
  //     initialScale: 1,
  //   },
  // })
  // output.meta.unshift(...defaultMetaTags)
  return input
}

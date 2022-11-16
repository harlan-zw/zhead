import type { HeadTag } from '@zhead/schema'
import { baseSchema, linkSchema, metaSchema, scriptSchema, styleSchema } from './schema'

export function validateTag<T extends HeadTag>(tag: T): T {
  let props = tag.props
  switch (tag.tag) {
    case 'script':
      props = scriptSchema.parse(tag.props)
      break
    case 'style':
      props = styleSchema.parse(tag.props)
      break
    case 'meta':
      props = metaSchema.parse(tag.props)
      break
    case 'link':
      props = linkSchema.parse(tag.props)
      break
    case 'base':
      props = baseSchema.parse(tag.props)
      break
  }
  tag.props = props
  return tag
}

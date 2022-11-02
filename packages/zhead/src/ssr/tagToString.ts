import type { HeadTag } from '@zhead/schema'
import { SelfClosingTags } from '../constants'
import { propsToString } from '.'

export const tagToString = <T extends HeadTag>(tag: T) => {
  const attrs = propsToString(tag.props)
  const openTag = `<${tag.tag}${attrs}>`
  return SelfClosingTags.includes(tag.tag) ? openTag : `${openTag}${tag.children || ''}</${tag.tag}>`
}

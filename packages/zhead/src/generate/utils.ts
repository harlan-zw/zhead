import { stringifyAttrs } from '../transforms'
import type { HeadTag } from './tags'

export const SelfClosingTags = ['meta', 'link', 'base']

export const tagToString = (tag: HeadTag) => {
  const attrs = stringifyAttrs(tag.props)
  if (SelfClosingTags.includes(tag.tag))
    return `<${tag.tag}${attrs}>`

  return `<${tag.tag}${attrs}>${tag.props.children || ''}</${tag.tag}>`
}

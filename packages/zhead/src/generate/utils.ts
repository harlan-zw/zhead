import { unpackToString } from 'packrup'
import type { HeadTag } from './tags'

export const SelfClosingTags = ['meta', 'link', 'base']

export const tagToString = (tag: HeadTag) => {
  const { children } = tag.props
  delete tag.props.children
  delete tag.props.key
  let attrs = unpackToString(tag.props, {
    entrySeparator: ' ',
    keyValueSeparator: '=',
    wrapValue: '"',
    resolve({ key, value }) {
      if (typeof value === 'boolean')
        return key
    },
  })
  attrs = attrs ? ` ${attrs}` : ''
  if (SelfClosingTags.includes(tag.tag))
    return `<${tag.tag}${attrs}>`

  return `<${tag.tag}${attrs}>${children || ''}</${tag.tag}>`
}

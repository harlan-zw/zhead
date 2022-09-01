import type { HeadInput } from '../schema'
import type { HeadTag } from './tags'
import { generateTags, generateTagsStrict } from './tags'

export const SELF_CLOSING_TAGS = ['meta', 'link', 'base']

const stringifyAttrs = (attrs: Record<string, any>) => {
  return Object.keys(attrs)
    .filter(key => key !== 'children' && key !== 'key')
    .map((key) => {
      const value = attrs[key]
      if (value === true)
        return ` ${key}`
      if (value === false)
        return ''
      return ` ${key}="${value}"`
    })
    .join('')
}

const tagToString = (tag: HeadTag) => {
  const attrs = stringifyAttrs(tag.props)
  if (SELF_CLOSING_TAGS.includes(tag.tag))
    return `<${tag.tag}${attrs}>`

  return `<${tag.tag}${attrs}>${tag.props.children || ''}</${tag.tag}>`
}

export function generateHtml<T extends HeadInput>(input: T): string {
  return generateTags(input).map(t => tagToString(t)).join('\n')
}

export function generateHtmlStrict<T extends HeadInput>(input: T): string {
  return generateTagsStrict(input).map(t => tagToString(t)).join('\n')
}

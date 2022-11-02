import type { HeadTag } from '@zhead/schema'

export function tagDedupeKey<T extends HeadTag>(tag: T): string | false {
  const { props, tag: tagName } = tag
  // must only be a single base so we always dedupe
  if (['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs'].includes(tagName))
    return tagName

  // support only a single canonical
  if (tagName === 'link' && props.rel === 'canonical')
    return 'canonical'

  // must only be a single charset
  if (props.charset)
    return 'charset'

  const name = ['id']
  if (tagName === 'meta')
    name.push(...['name', 'property', 'http-equiv'])
  for (const n of name) {
    if (typeof props[n] !== 'undefined') {
      // for example: meta-name-description
      return `${tagName}:${n}:${props[n]}`
    }
  }
  return false
}


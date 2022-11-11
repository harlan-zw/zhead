import type { HeadTag } from '@zhead/schema'

const UniqueTags = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs']
const ArrayMetaProperties = [
  'og:image', 'og:video', 'og:audio', 'og:locale:alternate',
  'video:actor', 'video:director', 'video:writer', 'video:tag',
  'article:author', 'article:tag',
  'book:tag', 'book:author',
  'music:album', 'music:musician',
]

export function tagDedupeKey<T extends HeadTag>(tag: T): string | false {
  const { props, tag: tagName } = tag
  // must only be a single base so we always dedupe
  if (UniqueTags.includes(tagName))
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
    // open graph props can have multiple tags with the same property
    if (typeof props[n] !== 'undefined' && !ArrayMetaProperties.findIndex(p => !props[n].startsWith(p))) {
      // for example: meta-name-description
      return `${tagName}:${n}:${props[n]}`
    }
  }
  return false
}


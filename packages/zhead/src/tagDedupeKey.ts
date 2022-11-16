import type { HeadTag } from '@zhead/schema'

const UniqueTags = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs']
const ArrayMetaProperties = [
  'og:image', 'og:video', 'og:audio', 'og:locale:alternate',
  'video:actor', 'video:director', 'video:writer', 'video:tag',
  'article:author', 'article:tag',
  'book:tag', 'book:author',
  'music:album', 'music:musician',
]

export function tagDedupeKeyWithMetaProps<T extends HeadTag>(tag: T): string | false {
  return tagDedupeKey(tag, (val) => ArrayMetaProperties.findIndex(p => val.startsWith(p)) === -1)
}

export function tagDedupeKey<T extends HeadTag>(tag: T, fn?: (key: string) => boolean): string | false {
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
    if (typeof props[n] !== 'undefined') {
      const val = String(props[n])
      if (fn && !fn(val))
        return false
      // for example: meta-name-description
      return `${tagName}:${n}:${val}`
    }
  }
  return false
}


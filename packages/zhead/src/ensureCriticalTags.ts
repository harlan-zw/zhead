import type { HeadTag } from '@zhead/schema'

/**
 * Ensures a charset and viewport are defined.
 * @param tags
 */
export function ensureCriticalTags<T extends HeadTag[]>(tags: T) {
  const charset = tags.find(t => t.tag === 'meta' && !!t.props.charset)
  if (!charset) {
    tags.push({
      tag: 'meta',
      props: {
        charset: 'utf-8',
      },
    })
  }
  const viewport = tags.find(t => t.tag === 'meta' && t.props.name === 'viewport' && !!t.props.content)
  if (!viewport) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'viewport',
        content: 'initial-scale: 1; width: device-width',
      },
    })
  }
}

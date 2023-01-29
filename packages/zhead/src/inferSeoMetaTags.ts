import type { HeadTag } from '@zhead/schema'

export function inferSeoMetaTags<T extends HeadTag[]>(tags: T) {
  const title = tags.find(t => t.tag === 'title' && !!t.children)
  if (title) {
    tags.push({
      tag: 'meta',
      props: {
        property: 'og:title',
        content: title.children,
      },
    })
  }
  const description = tags.find(t => t.tag === 'meta' && t.props.name === 'description' && !!t.props.content)
  if (description) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'og:description',
        content: description.props.content,
      },
    })
  }
  // if we have an image, add twitter:card if missing
  if (tags.find(t => t.tag === 'meta' && t.props.property === 'og:image') && !tags.find(t => t.tag === 'meta' && t.props.name === 'twitter:card')) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    })
  }
  if (!tags.find(t => t.tag === 'meta' && t.props.name === 'robots')) {
    tags.push({
      tag: 'meta',
      props: {
        name: 'robots',
        content: 'max-snippet: -1; max-image-preview: large; max-video-preview: -1',
      },
    })
  }
  return tags
}

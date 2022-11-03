import type { HeadTag } from '@zhead/schema'

interface NormalisePropsOptions {
  childrenKeys?: string[]
}

export function normaliseTag(tagName: HeadTag['tag'], input: any, options: NormalisePropsOptions = {}) {
  const tag: HeadTag = { tag: tagName, props: {} }
  if (tagName === 'title')
    tag.children = String(input)
  else
    tag.props = normaliseProps({ ...input })

  ;(['children', ...(options?.childrenKeys || [])])
    .forEach((key: string) => {
      if (typeof tag.props[key] !== 'undefined') {
        tag.children = tag.props[key]
        delete tag.props[key]
      }
    })

  return tag
}

export function normaliseProps<T extends HeadTag['props']>(props: T): T {
  // handle boolean props, see https://html.spec.whatwg.org/#boolean-attributes
  for (const k in props) {
    if (String(props[k]) === 'true') {
      // @ts-expect-error untyped
      props[k] = ''
    }
    else if (String(props[k]) === 'false') {
      delete props[k]
    }
  }
  return props
}

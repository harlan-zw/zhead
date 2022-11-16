import type { HeadTag } from '@zhead/schema'
import { TagConfigKeys } from './constants'

export async function normaliseTag<T extends HeadTag>(tagName: T['tag'], input: any): Promise<T | T[]> {
  const tag = { tag: tagName, props: {} } as T
  if (tagName === 'title' || tagName === 'titleTemplate') {
    tag.children = input instanceof Promise ? await input : input
    return tag
  }

  tag.props = await normaliseProps({ ...input })

  ;(['children', 'innerHtml', 'innerHTML'])
    .forEach((key: string) => {
      if (typeof tag.props[key] !== 'undefined') {
        tag.children = tag.props[key]
        delete tag.props[key]
      }
    })

  Object.keys(tag.props)
    .filter(k => TagConfigKeys.includes(k))
    .forEach((k) => {
      // @ts-expect-error untyped
      tag[k] = tag.props[k]
      delete tag.props[k]
    })

  // class object boolean support
  if (typeof tag.props.class === 'object' && !Array.isArray(tag.props.class)) {
    tag.props.class = Object.keys(tag.props.class)
      .filter(k => tag.props.class[k])
  }
  // class array support
  if (Array.isArray(tag.props.class))
    tag.props.class = tag.props.class.join(' ')

  // allow meta to be resolved into multiple tags if an array is provided on content
  if (tag.props.content && Array.isArray(tag.props.content)) {
    return tag.props.content.map((v, i) => {
      const newTag = { ...tag, props: { ...tag.props } } as T
      newTag.props.content = v
      newTag.key = `${tag.props.name || tag.props.property}:${i}`
      return newTag
    })
  }

  return tag
}

export async function normaliseProps<T extends HeadTag['props']>(props: T): Promise<T> {
  // handle boolean props, see https://html.spec.whatwg.org/#boolean-attributes
  for (const k of Object.keys(props)) {
    // first resolve any promises
    if (props[k] instanceof Promise) {
      // @ts-expect-error untyped
      props[k] = await props[k]
    }
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

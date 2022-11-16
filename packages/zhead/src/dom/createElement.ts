import type { HeadTag } from '@zhead/schema'

export const createElement = <T extends HeadTag>(
  tag: T,
  document: Document,
) => {
  const $el = document.createElement(tag.tag)

  for (const k in tag.props)
    $el.setAttribute(k, String(tag.props[k]))

  if (tag.children)
    $el.innerHTML = tag.children

  return $el
}

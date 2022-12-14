import type { HeadTag } from '@zhead/schema'

export const tagWeight = <T extends HeadTag>(tag: T) => {
  if (typeof tag.tagPriority === 'number')
    return tag.tagPriority
  switch (tag.tagPriority) {
    case 'critical':
      return 2
    case 'high':
      return 9
    case 'low':
      return 12
  }
  // charset -> base -> http-equiv -> title -> everything else
  switch (tag.tag) {
    // This element must come before other elements with attribute values of URLs
    case 'base':
      return -1
    case 'title':
      return 1
    case 'meta':
      // charset must come early in case there's non-utf8 characters in the HTML document
      if (tag.props.charset)
        return -2
      // CSP needs to be as it effects the loading of assets
      if (tag.props['http-equiv'] === 'content-security-policy')
        return 0
      return 10
    default:
      // arbitrary safe number that can go up and down without conflicting
      return 10
  }
}

export const sortTags = <A extends HeadTag, B extends HeadTag>(aTag: A, bTag: B) => {
  return tagWeight(aTag) - tagWeight(bTag)
}

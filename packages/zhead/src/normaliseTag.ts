import {HeadTag} from "@zhead/schema";

export function normaliseProps<T extends HeadTag['props']>(props: T): T {
  // handle boolean props, see https://html.spec.whatwg.org/#boolean-attributes
  for (const k in props) {
    if (String(props[k]) === 'true') {
      // @ts-expect-error untyped
      props[k] = ''
    } else if (String(props[k]) === 'false') {
      delete props[k]
    }
  }
  return props
}

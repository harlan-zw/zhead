import { MetaPackingSchema, PropertyPrefixKeys } from '../resolve'

export function packKey(key: string) {
  if (MetaPackingSchema[key]?.keyValue)
    return MetaPackingSchema[key].keyValue as string
  key = key.replace(/([A-Z])/g, '-$1').toLowerCase()
  if (PropertyPrefixKeys.test(key)) {
    key = key
      .replace('secure-url', 'secure_url')
      .replace(/-/g, ':')
  }
  return key
}

// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export function packKeysDeep<T extends any>(input: T): T {
  if (Array.isArray(input)) {
    // @ts-expect-error untyped
    return input.map(entry => packKeysDeep(entry))
  }
  if (typeof input !== 'object' || Array.isArray(input))
    return input

  const output: Record<string, any> = {}
  for (const [key, value] of Object.entries(input as object))
    output[packKey(key)] = packKeysDeep(value)

  return output as T
}

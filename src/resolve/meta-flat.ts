import type { MetaFlatInput, MetaInput } from '../schema'

interface FlatMetaResolver {
  metaKey?: 'http-equiv' | 'name' | 'property'
  keyValue?: string
  childSeparator?: string
  separator?: string
  resolve?: <K extends string, T>(key: K, value: T) => T | void
}

export const FlatMetaResolve: Record<string, FlatMetaResolver> = {
  robots: {
    childSeparator: ':',
  },
  // Pragma directives
  contentSecurityPolicy: {
    separator: '; ',
    childSeparator: ' ',
    metaKey: 'http-equiv',
  },
  fbAppId: {
    keyValue: 'fb:app_id',
    metaKey: 'property',
  },
  contentType: {
    metaKey: 'http-equiv',
  },
  defaultStyle: {
    metaKey: 'http-equiv',
  },
  msapplicationTileImage: {
    keyValue: 'msapplication-TileImage',
  },
  /**
   * Tile colour for windows
   */
  msapplicationTileColor: {
    keyValue: 'msapplication-TileColor',
  },
  /**
   * URL of a config for windows tile.
   */
  msapplicationConfig: {
    keyValue: 'msapplication-Config',
  },

  xUaCompatible: {
    metaKey: 'http-equiv',
  },
  refresh: {
    metaKey: 'http-equiv',
    separator: ';',
    resolve(key, value) {
      if (key === 'seconds')
        return value
    },
  },
}

export function resolveMetaFlatKey(key: string) {
  if (key === 'seconds')
    return ''

  const kebabed = key.replace(/([A-Z])/g, '-$1').toLowerCase()
  // need to swap out vendor prefixes such as og- and twitter- to og: and twitter:
  if (kebabed.startsWith('og') || kebabed.startsWith('twitter')) {
    return kebabed
      .replace('secure-url', 'secure_url')
      .replace(/-/g, ':')
  }
  return kebabed
}

export function resolveMetaFlatNestedValue(value: unknown, definition?: FlatMetaResolver) {
  if (typeof value === 'boolean')
    return ''

  const separator = definition?.childSeparator || '='
  if (typeof value === 'number')
    value = value.toString()

  return `${separator}${value}`
}

export function flattenMeta<T extends MetaInput>(inputs: T): MetaFlatInput {
  const meta: MetaFlatInput = {}
  for (const input of inputs) {
    // turn : into a capital letter
    let key = (input.name || input.property || input.httpEquiv)?.replace(/:([a-z])/g, (_, letter) => letter.toUpperCase())
    if (key === 'fbApp_id')
      key = 'fbAppId'

    if (key)
      // @ts-expect-error untyped
      meta[key] = input.content
  }
  return meta
}

export function resolveMetaFlat<T extends MetaFlatInput>(input: T): MetaInput {
  const output: MetaInput = []
  for (let [key, value] of Object.entries(input)) {
    const definition = FlatMetaResolve[key]
    key = definition?.keyValue || resolveMetaFlatKey(key)
    // we turn objects into comma seperated key values
    if (!Array.isArray(value) && typeof value === 'object') {
      const separator = definition?.separator || ', '
      value = Object.entries(value)
        .map(([childKey, value]) => {
          if (definition?.resolve) {
            const resolved = definition.resolve(childKey, value)
            if (resolved)
              return resolved
          }
          const resolvedChildKey = resolveMetaFlatKey(childKey)
          return `${resolvedChildKey}${resolveMetaFlatNestedValue(value, definition)}`
        })
        .join(separator)
    }
    // flat, move to option if other meta has this
    if (key === 'charset') {
      output.push({
        // key may change
        // @ts-expect-error untyped
        [key]: value,
      })
    }
    else {
      let metaKey = definition?.metaKey || 'name'
      if (key.startsWith('og:') || key.startsWith('twitter:'))
        metaKey = 'property'

      const values = Array.isArray(value) ? value : [value]
      values.forEach((value) => {
        output.push({
          // key may change
          [metaKey]: key,
          content: value,
        })
      })
    }
  }
  return output as unknown as MetaInput
}

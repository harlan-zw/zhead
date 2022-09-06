import type { MetaFlatInput, MetaInput } from '@zhead/schema'
import type { ValidSeperators } from '../transforms'
import { PropertyPrefixKeys, packKey, packKeysDeep, transformValues } from '../transforms'

export type ValidMetaType = 'name' | 'http-equiv' | 'property' | 'charset'

interface PackingDefinition<T = any> {
  metaKey?: ValidMetaType
  keyValue?: string
  childSeparator?: ValidSeperators
  separator?: ValidSeperators
  resolve?: (value: T) => string
}

const MetaPackingSchema: Record<string, PackingDefinition> = {
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
  charset: {
    metaKey: 'charset',
  },
  contentType: {
    metaKey: 'http-equiv',
  },
  defaultStyle: {
    metaKey: 'http-equiv',
  },
  xUaCompatible: {
    metaKey: 'http-equiv',
  },
  refresh: <PackingDefinition<string | { seconds: number; url: string }>> {
    metaKey: 'http-equiv',
    resolve(value) {
      if (typeof value === 'string')
        return value
      return `${value.seconds};url=${value.url}`
    },
  },
}

export function resolveMetaKeyType(key: string): ValidMetaType {
  return PropertyPrefixKeys.test(key) ? 'property' : (MetaPackingSchema[key]?.metaKey || 'name')
}

/**
 * Convert an array of meta entries to a flat object.
 * @param inputs
 */
export function packMeta<T extends MetaInput>(inputs: T): MetaFlatInput {
  const mappedPackingSchema = Object.entries(MetaPackingSchema)
    .map(([key, value]) => [key, value.keyValue])
  const meta: MetaFlatInput = {}
  for (const input of inputs) {
    // @ts-expect-error untyped casing
    let key = input.name || input.property || input.httpEquiv || input['http-equiv'] || ''
    key = mappedPackingSchema.filter(k => k[1] === key)?.[0]?.[0] || key
    // turn : into a capital letter
    // @ts-expect-error untyped
    const replacer = (_, letter) => letter?.toUpperCase()
    key = key
      .replace(/:([a-z])/g, replacer)
      .replace(/-([a-z])/g, replacer)
    if (key)
      // @ts-expect-error untyped
      meta[key] = input.content
  }
  return meta
}

/**
 * Converts a flat meta object into an array of meta entries.
 * @param input
 */
export function unpackMeta<T extends MetaFlatInput>(input: T): MetaInput {
  const output: MetaInput = []
  for (let [key, value] of Object.entries(input)) {
    const definitionKey = key
    const definition = MetaPackingSchema[definitionKey]
    const metaKey = resolveMetaKeyType(definitionKey)

    if (MetaPackingSchema[key]?.keyValue)
      key = MetaPackingSchema[key].keyValue as string
    else
      key = packKey(key)
    value = packKeysDeep(value)

    if (definition?.resolve)
      value = definition.resolve(value)
    else if (typeof value === 'object' && !Array.isArray(value))
      value = transformValues(value, { ...definition })

    const values = Array.isArray(value) ? value : [value]
    values.forEach((value) => {
      if (metaKey === 'charset') {
        output.push({ [metaKey]: value })
      }
      else {
        output.push({
          // key may change
          [metaKey]: key,
          content: value,
        })
      }
    })
  }
  return output as unknown as MetaInput
}

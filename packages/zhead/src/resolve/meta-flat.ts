import type { MetaEntries, MetaFlatInput } from '@zhead/schema'
import { packArray, unpackToArray } from 'packrup'
import type { ValidSeparators } from '../transforms'
import { PropertyPrefixKeys, changeKeyCasingDeep, fixKeyCase, transformValues } from '../transforms'

export type ValidMetaType = 'name' | 'http-equiv' | 'property' | 'charset'

interface PackingDefinition<T = any> {
  metaKey?: ValidMetaType
  keyValue?: string
  childSeparator?: ValidSeparators
  separator?: ValidSeparators
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
export function packMeta<T extends MetaEntries>(inputs: T): MetaFlatInput {
  const mappedPackingSchema = Object.entries(MetaPackingSchema)
    .map(([key, value]) => [key, value.keyValue])

  return packArray(inputs, {
    key: ['name', 'property', 'httpEquiv', 'http-equiv', 'charset'],
    value: ['content', 'charset'],
    resolveKey(k) {
      let key = (mappedPackingSchema.filter(sk => sk[1] === k)?.[0]?.[0] || k) as string
      // turn : into a capital letter
      // @ts-expect-error untyped
      const replacer = (_, letter) => letter?.toUpperCase()
      key = key
        .replace(/:([a-z])/g, replacer)
        .replace(/-([a-z])/g, replacer)
      return key as string
    },
  })
}

/**
 * Converts a flat meta object into an array of meta entries.
 * @param input
 */
export function unpackMeta<T extends MetaFlatInput>(input: T): MetaEntries {
  return unpackToArray((input), {
    key({key}) {
      return resolveMetaKeyType(key) as string
    },
    value({key}) {
      return key === 'charset' ? 'charset' : 'content'
    },
    resolveKeyData: ({key}) => {
      return MetaPackingSchema[key]?.keyValue || fixKeyCase(key)
    },
    resolveValueData: ({value, key}) => {
      if (typeof value === 'object') {
        const definition = MetaPackingSchema[key]
        if (definition && typeof definition.resolve === 'function')
          return definition.resolve(value)

        return transformValues(changeKeyCasingDeep(value), MetaPackingSchema[key])
      }
      return typeof value === 'number' ? value.toString() : value
    },
  })
}

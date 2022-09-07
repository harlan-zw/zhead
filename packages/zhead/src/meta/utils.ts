import type { ValidSeparators } from '../transforms'
import { PropertyPrefixKeys } from '../transforms'

export type ValidMetaType = 'name' | 'http-equiv' | 'property' | 'charset'

export interface PackingDefinition<T = any> {
  metaKey?: ValidMetaType
  keyValue?: string
  childSeparator?: ValidSeparators
  separator?: ValidSeparators
  resolve?: (value: T) => string
}

export const MetaPackingSchema: Record<string, PackingDefinition> = {
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


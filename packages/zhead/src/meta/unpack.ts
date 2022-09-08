import type { MetaEntries, MetaFlatInput } from '@zhead/schema'
import { unpackToArray, unpackToString } from 'packrup'
import { changeKeyCasingDeep, fixKeyCase } from '../transforms'
import { MetaPackingSchema, resolveMetaKeyType } from './utils'

/**
 * Converts a flat meta object into an array of meta entries.
 * @param input
 */
export function unpackMeta<T extends MetaFlatInput>(input: T): MetaEntries {
  return unpackToArray((input), {
    key({ key }) {
      return resolveMetaKeyType(key) as string
    },
    value({ key }) {
      return key === 'charset' ? 'charset' : 'content'
    },
    resolveKeyData({ key }) {
      return MetaPackingSchema[key]?.keyValue || fixKeyCase(key)
    },
    resolveValueData({ value, key }) {
      if (typeof value === 'object') {
        const definition = MetaPackingSchema[key]

        // refresh is weird...
        if (key === 'refresh')
          return `${value.seconds};url=${value.url}`

        return unpackToString(
          changeKeyCasingDeep(value), {
            entrySeparator: ', ',
            keyValueSeparator: '=',
            resolve({ value, key }) {
              if (typeof value === 'boolean')
                return `${key}`
            },
            ...definition?.unpack,
          },
        )
      }
      return typeof value === 'number' ? value.toString() : value
    },
  })
}

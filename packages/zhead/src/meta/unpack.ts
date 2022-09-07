import type { MetaEntries, MetaFlatInput } from '@zhead/schema'
import { unpackToArray } from 'packrup'
import { changeKeyCasingDeep, fixKeyCase, transformValues } from '../transforms'
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
        if (definition && typeof definition.resolve === 'function')
          return definition.resolve(value)

        return transformValues(changeKeyCasingDeep(value), MetaPackingSchema[key])
      }
      return typeof value === 'number' ? value.toString() : value
    },
  })
}

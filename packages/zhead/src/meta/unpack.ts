import type { Head, MetaFlatInput } from '@zhead/schema'
import { unpackToArray, unpackToString } from 'packrup'
import { changeKeyCasingDeep, fixKeyCase } from '..'
import { MetaPackingSchema, resolveMetaKeyType } from './utils'

/**
 * Converts a flat meta object into an array of meta entries.
 * @param input
 */
export function unpackMeta<T extends MetaFlatInput>(input: T): Required<Head>['meta'] {
  const meta = unpackToArray((input), {
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
      if (value === null) {
        return '_null'
      }
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
              if (value === null)
                return ''
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
  // remove keys with defined but empty content
  return meta.filter(v => typeof v.content === 'undefined' || v.content !== '_null')
}

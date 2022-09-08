import { packMeta as packMetaCore, unpackMeta as unpackMetaCore } from 'zhead'
import type { Head, MetaEntries, MetaFlat } from './schema'

export * from './schema'

export function defineHead<T extends Head>(input: T) {
  return input
}

export function packMeta<T extends MetaEntries>(input: T): MetaFlat {
  // @ts-expect-error augmentation
  return packMetaCore(input)
}

export function unpackMeta<T extends MetaFlat>(input: T): MetaEntries {
  // @ts-expect-error augmentation
  return unpackMetaCore(input)
}

import { packMeta as packMetaCore, unpackMeta as unpackMetaCore } from 'zhead'
import type { Ref } from 'vue'
import { ref, watch, watchEffect } from 'vue'
import type { Head, MetaEntries, MetaFlat } from './schema'
import { deepUnref } from './util'

export * from './schema'

export function defineHead<T extends Head>(input: T) {
  return input
}

export function packMeta<T extends MetaEntries>(input: T): Ref<MetaFlat> {
  const val = ref()
  watchEffect(() => {
    val.value = packMetaCore(deepUnref(input))
  })
  return val
}

export function unpackMeta<T extends MetaFlat>(input: T): Ref<MetaEntries> {
  const val = ref()
  watch(() => input, () => {
    val.value = unpackMetaCore(deepUnref(input))
  }, {
    immediate: true,
    deep: true,
  })
  return val
}


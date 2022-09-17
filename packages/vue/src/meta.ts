import type { Ref } from 'vue'
import { ref, watch, watchEffect } from 'vue'
import type { Head, MetaFlat } from '@zhead/schema'
import { packMeta as packMetaCore, unpackMeta as unpackMetaCore } from 'zhead'
import type { MetaFlatRef, ReactiveHead } from '@zhead/schema-vue'
import type { MaybeComputedRef } from '@vueuse/shared'
import { deepUnref } from './util'

export function packMeta<T extends ReactiveHead['meta']>(input: T): Ref<MetaFlat> {
  const val = ref()
  watchEffect(() => {
    val.value = packMetaCore(deepUnref(input))
  })
  return val
}

export function unpackMeta<T extends MaybeComputedRef<MetaFlatRef>>(input: T): Ref<Required<Head>['meta']> {
  const val = ref()
  watch(() => input, () => {
    val.value = unpackMetaCore(deepUnref(input))
  }, {
    immediate: true,
    deep: true,
  })
  return val
}

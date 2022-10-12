import type { MaybeComputedRef } from '@vueuse/shared'

export type InferArrayEntry<T> = T extends Array<infer U> ? U : T

export type MaybeComputedRefEntries<T> = MaybeComputedRef<T> | {
  [key in keyof T]?: MaybeComputedRef<T[key]>
}

export type MaybeDeeplyComputedRefArray<T> =
  T |
  // root can be a plain value, or ref or a getter function
  MaybeComputedRef<
    // simplify types, must provide an array
    Array<
      // each entry's values can be a plain value, or ref or a getter function
      MaybeComputedRefEntries<
        // need to infer array contents rather than the array itself to swap reactivity properly
        InferArrayEntry<T>
      >
    >
  >

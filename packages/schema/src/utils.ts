import type { ZodFirstPartySchemaTypes } from 'zod'
import { z } from 'zod'

export function maybeString<T extends ZodFirstPartySchemaTypes>(object: T) {
  return z.union([
    z.string(),
    object,
  ])
}

export function maybeArray<T extends ZodFirstPartySchemaTypes>(object: T) {
  return z.union([
    z.array(object),
    object,
  ])
}

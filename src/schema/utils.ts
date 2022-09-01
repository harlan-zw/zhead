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

/**
 * data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks
 * such as non-standard attributes, or extra properties on DOM.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */
export const DataSchema = z.record(z.string().startsWith('data'), z.string()).optional()

export function withDataAttributes<T extends ZodFirstPartySchemaTypes>(object: T) {
  return z.union([
    object,
    DataSchema,
  ])
}

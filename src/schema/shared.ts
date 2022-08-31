import { z } from 'zod'

/**
 * data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks
 * such as non-standard attributes, or extra properties on DOM.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */
export const DataSchema = z.record(z.string().startsWith('data-'), z.string()).optional()

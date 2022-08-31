import { z } from 'zod'

/**
 * data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks
 * such as non-standard attributes, or extra properties on DOM.
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */
export const DataSchema = z.record(z.string().startsWith('data-'), z.string()).optional()

export const RFDaSchema = z.object({
  /**
   * A URI or CURIE specifying the resource the metadata is about.
   */
  about: z.string(),
  /**
   * Specifying a relationship with another resource.
   */
  rel: z.string(),
  /**
   * Specifying a reverse-relationship with another resource.
   */
  rev: z.string(),
  /**
   * Specifying the partner resource.
   */
  resource: z.string(),
  /**
   * Specifying a property for the content of an element or the partner resource.
   */
  property: z.string(),
  /**
   * Optional attribute that specifies the datatype of text specified for use with the property attribute.
   */
  datatype: z.string(),
  /**
   * Optional attribute that specifies the RDF type(s) of the subject or the partner resource
   * (the resource that the metadata is about).
   */
  typeof: z.string(),
}).partial()

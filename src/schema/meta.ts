import { z } from 'zod'
import { resolveKeyCasing } from '../resolve/utils'
import {
  DataSchema,
  HttpEquiv,
  StandardMetaDataNames,
} from '.'

const HTMLMetaEntry = z.object({
  /**
   * This attribute declares the document's character encoding.
   * If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8",
   * because UTF-8 is the only valid encoding for HTML5 documents.
   * <meta> elements which declare a character encoding must be located entirely within the first 1024 bytes
   * of the document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset
   */
  charset: z.string(),
  /**
   * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content
   */
  content: z.string(),
  /**
   * Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of
   * particular HTTP headers.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv
   */
  httpEquiv: z.enum(HttpEquiv),
  /**
   * The name and content attributes can be used together to provide document metadata in terms of name-value pairs,
   * with the name attribute giving the metadata name, and the content attribute giving the value.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name
   */
  name: z.union([z.enum(StandardMetaDataNames), z.string()]),
}).partial()

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

const MetaEntrySchema = z.intersection(HTMLMetaEntry.merge(RFDaSchema), DataSchema)

export const MetaEntriesSchema = z.array(
  MetaEntrySchema,
)

export type MetaInput = z.TypeOf<typeof MetaEntriesSchema>

export function defineMeta<T extends MetaInput>(input: T) {
  return input.map((entry) => {
    return resolveKeyCasing(entry)
  })
}

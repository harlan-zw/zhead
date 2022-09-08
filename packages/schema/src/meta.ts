import type { MetaFlat } from './meta-flat'

type Kebab<T extends string, A extends string = ''> =
  T extends `${infer F}${infer R}` ?
    Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`> :
    A

type KebabColon<T extends string, A extends string = ''> =
  T extends `${infer F}${infer R}` ?
    KebabColon<R, `${A}${F extends Lowercase<F> ? '' : ':'}${Lowercase<F>}`> :
    A

type FixCase<T extends string> =
  T extends 'fbAppId' ? 'fb:app_id' :
    T extends 'ogImageSecureUrl' ? 'og:image:secure_url' :
      T extends 'ogVideoSecureUrl' ? 'og:video:secure_url' :
        T extends
          `og${infer R}` | `twitter${infer R}`
          ? KebabColon<T> : Kebab<T>

type ContentKeys<T extends string> = T extends
  `og${infer R}` | `twitter${infer R}` ? never : T

type PropertyKeys<T extends string> = T extends
  `og${infer R}` | `twitter${infer R}` ? T : never

export interface Meta {
  /**
   * This attribute declares the document's character encoding.
   * If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8",
   * because UTF-8 is the only valid encoding for HTML5 documents.
   * <meta> elements which declare a character encoding must be located entirely within the first 1024 bytes
   * of the document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset
   */
  charset: string
  /**
   * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content
   */
  content: MetaFlat[keyof MetaFlat] | string
  /**
   * Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of
   * particular HTTP headers.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv
   */
  ['http-equiv']: 'content-security-policy' |
  'content-type' |
  'default-style' |
  'x-ua-compatible' |
  'refresh'
  /**
   * The name and content attributes can be used together to provide document metadata in terms of name-value pairs,
   * with the name attribute giving the metadata name, and the content attribute giving the value.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name
   */
  name: FixCase<ContentKeys<keyof MetaFlat>>
  /**
   * The property attribute is used to define a property associated with the content attribute.
   *
   * Mainly used for og and twitter meta tags.
   */
  property: FixCase<PropertyKeys<keyof MetaFlat>>
  /**
   * @internal This property is used to dedupe the link tags
   */
  key: string
}

export type MetaEntries = Partial<
  Meta &
  // pass through for data attributes
  {
    [key: string]: string | boolean
  }
  >[]

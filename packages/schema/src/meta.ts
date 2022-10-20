import type { Stringable } from './types'

export type MetaNames =
'charset' |
'description' |
'color-scheme' |
'application-name' |
'author' |
'creator' |
'publisher' |
'generator' |
'referrer' |
'viewport' |
'robots' |
'google' |
'googlebot' |
'google-site-verification' |
'rating' |
'fb:app_id' |
'theme-color' |
'mobile-web-app-capable' |
'apple-mobile-web-app-capable' |
'apple-mobile-web-app-status-bar-style' |
'apple-mobile-web-app-title' |
'apple-itunes-app' |
'format-detection' |
'msapplication-TileImage' |
'msapplication-TileColor' |
'msapplication-Config' |
'content-security-policy' |
'content-type' |
'default-style' |
'x-ua-compatible' |
'refresh'

export type MetaProperties = 'og:url' |
'og:title' |
'og:description' |
'og:type' |
'og:locale' |
'og:locale:alternate' |
'og:determiner' |
'og:site:name' |
'og:video' |
'og:video:url' |
'og:video:secure_url' |
'og:video:type' |
'og:video:width' |
'og:video:height' |
'og:image' |
'og:image:url' |
'og:image:secure_url' |
'og:image:type' |
'og:image:width' |
'og:image:height' |
'fb:app:id' |
'twitter:card' |
'twitter:title' |
'twitter:description' |
'twitter:image' |
'twitter:image:alt' |
'twitter:site' |
'twitter:site:id' |
'twitter:creator' |
'twitter:creator:id' |
'twitter:player' |
'twitter:player:width' |
'twitter:player:height' |
'twitter:player:stream' |
'twitter:app:name:iphone' |
'twitter:app:id:iphone' |
'twitter:app:url:iphone' |
'twitter:app:name:ipad' |
'twitter:app:id:ipad' |
'twitter:app:url:ipad' |
'twitter:app:name:googleplay' |
'twitter:app:id:googleplay' |
'twitter:app:url:googleplay' |
'twitter:data:1' |
'twitter:label:1' |
'twitter:data:2' |
'twitter:label:2'

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
  charset?: 'utf-8' | (string & Record<never, never>)
  /**
   * This attribute contains the value for the http-equiv or name attribute, depending on which is used.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-content
   */
  content?: Stringable
  /**
   * Defines a pragma directive. The attribute is named http-equiv(alent) because all the allowed values are names of
   * particular HTTP headers.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-http-equiv
   */
  ['http-equiv']?: 'content-security-policy' |
  'content-type' |
  'default-style' |
  'x-ua-compatible' |
  'refresh' |
  'accept-ch'
  /**
   * The name and content attributes can be used together to provide document metadata in terms of name-value pairs,
   * with the name attribute giving the metadata name, and the content attribute giving the value.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-name
   */
  name?: MetaNames | (string & Record<never, never>)
  /**
   * The property attribute is used to define a property associated with the content attribute.
   *
   * Mainly used for og and twitter meta tags.
   */
  property?: MetaProperties | (string & Record<never, never>)
  /**
   * This attribute defines the unique ID.
   */
  id?: string
  /**
   * A valid media query list that can be included to set the media the `theme-color` metadata applies to.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color
   */
  media?: '(prefers-color-scheme: light)' | '(prefers-color-scheme: dark)' | (string & Record<never, never>)
}

import type { ComputedRef, Ref } from 'vue'
import type {
  Head,
  MergeHead,
  MetaFlat,
} from '@zhead/schema'

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

export type MaybeRefObject<T> = MaybeRef<T> | {
  [key in keyof T]?: MaybeRef<T[key]>
}

export type MetaFlatRef = MaybeRefObject<Partial<MetaFlat>>

type InferArrayEntry<T> = T extends Array<infer U> ? U : T
type ReffableArrayEntries<T> =
  // root can be ref / computed
  MaybeRef<
    // each entry can be ref / computed
    MaybeRef<
      // each entries values can be ref / computed
      MaybeRefObject<
        // need to infer array contents rather then the array itself to swap reactivity properly
        InferArrayEntry<T>
        >
      >[]
    >

export { Head } from '@zhead/schema'

export interface ReactiveHead<E extends MergeHead = {}> {
  /**
   * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
   * It only contains text; tags within the element are ignored.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   */
  title?: MaybeRef<Head<E>['title']>
  /**
   * Generate the title from a template.
   */
  titleTemplate?:
    // function should not be reactive but string can be
    Head<E>['titleTemplate'] | MaybeRef<string>
  /**
   * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base?: Head<E>['base'] | MaybeRef<MaybeRefObject<Head<E>['base']>>
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link?: Head<E>['link'] | ReffableArrayEntries<Head<E>['link']>
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta?: Head<E>['meta'] | ReffableArrayEntries<Head<E>['meta']>
  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style?: Head<E>['style'] | ReffableArrayEntries<Head<E>['style']>
  /**
   * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script?: Head<E>['script'] | ReffableArrayEntries<Head<E>['script']>
  /**
   * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
   * or if scripting is currently turned off in the browser.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
   */
  noscript?: Head<E>['noscript'] | ReffableArrayEntries<Head<E>['noscript']>
  /**
   * Attributes for the <html> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  htmlAttrs?: MaybeRef<Head<E>['htmlAttrs']>
  /**
   * Attributes for the <body> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
   */
  bodyAttrs?: MaybeRef<Head<E>['bodyAttrs']>
}


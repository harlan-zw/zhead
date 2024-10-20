import type { Base } from './base'
import type { AsyncBodyAttributes } from './bodyAttributes'
import type { BaseHead } from './head'
import type { AsyncHtmlAttributes } from './htmlAttributes'
import type { AsyncMeta } from './meta'
import type { AsyncNoscript } from './noscript'
import type { AsyncScript } from './script'
import type { AsyncStyle } from './style'
import type { DataKeys, DefinedValueOrEmptyObject, Merge, MergeHead } from './utils'

export interface AsyncHead<E extends MergeHead = MergeHead> extends BaseHead {
  /**
   * The `<title>` HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
   * It only contains text; tags within the element are ignored.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   */
  title?: string
  /**
   * The `<base>` HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base?: Partial<Merge<E['base'], Base>>
  /**
   * The `<link>` HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link?: (AsyncStyle & DataKeys & DefinedValueOrEmptyObject<E['link']>)[]
  /**
   * The `<meta>` element represents metadata that cannot be expressed in other HTML elements, like `<link>` or `<script>`.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta?: (AsyncMeta & DataKeys & DefinedValueOrEmptyObject<E['meta']>)[]
  /**
   * The `<style>` HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the `<style>` element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style?: (AsyncStyle & DataKeys & DefinedValueOrEmptyObject<E['style']>)[]
  /**
   * The `<script>` HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script?: (AsyncScript & DataKeys & DefinedValueOrEmptyObject<E['script']>)[]
  /**
   * The `<noscript>` HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
   * or if scripting is currently turned off in the browser.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
   */
  noscript?: (AsyncNoscript & DataKeys & DefinedValueOrEmptyObject<E['noscript']>)[]
  /**
   * Attributes for the `<html>` HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  htmlAttrs?: (AsyncHtmlAttributes & DataKeys & DefinedValueOrEmptyObject<E['htmlAttrs']>)
  /**
   * Attributes for the `<body>` HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
   */
  bodyAttrs?: (AsyncBodyAttributes & DataKeys & DefinedValueOrEmptyObject<E['bodyAttrs']>)
}

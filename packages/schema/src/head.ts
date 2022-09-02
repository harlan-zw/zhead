import { z } from 'zod'
import { BaseSchema } from './base'
import { StyleEntriesSchema } from './style'
import { ScriptEntriesSchema } from './script'
import { LinkEntriesSchema, MetaEntriesSchema } from '.'

export const HeadSchema = z.object({
  /**
   * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
   * It only contains text; tags within the element are ignored.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   */
  title: z.string(),
  /**
   * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base: BaseSchema,
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link: LinkEntriesSchema,
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta: MetaEntriesSchema,

  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style: StyleEntriesSchema,
  script: ScriptEntriesSchema,
  noscript: z.array(
    z.object({
      children: z.string(),
      key: z.string(),
    }),
  ),
}).deepPartial()

export type HeadInput = z.infer<typeof HeadSchema>

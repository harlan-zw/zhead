import { z } from 'zod'
import { baseSchema } from './base'
import { styleSchema } from './style'
import { scriptSchema } from './script'
import { linkSchema } from './link'
import { metaSchema } from './meta'

export const headSchema = z.object({
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
  base: baseSchema,
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link: z.array(linkSchema.partial().passthrough()),
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta: z.array(
    metaSchema
      .partial()
      .passthrough()
      .refine((data) => {
        return !(!data.content && !data.charset)
      }, {
        message: 'The attribute `content` must be included.',
      }),
  ),
  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style: z.array(styleSchema.partial().passthrough()),
  /**
   * The <script> HTML element is used to embed or reference an executable script within an HTML or XHTML document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script: z.array(
    scriptSchema
      .partial()
      .passthrough()
      .refine(data => !(data.defer && !data.src), {
        message: 'The attribute `defer` must not be used if the `src` attribute is absent.',
      })
      // modules
      .refine(data => !(data.type === 'module' && data.defer), {
        message: 'The attribute `defer` must not be used with the `type` attribute set to `module`.',
      }),
  ),
}).deepPartial()

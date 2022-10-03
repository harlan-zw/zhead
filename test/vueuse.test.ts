import { describe, it } from 'vitest'
import { ref } from 'vue'
import { defineHead } from '../packages/vue'

interface Dedupes {
  /**
   * Key used to dedupe the link tags.
   */
  key?: string
}

interface RendersToBody {
  /**
   * Used to render script in the body of the document
   */
  body?: boolean
}

interface RendersInnerContent {

  /**
   * Content of the script tag
   */
  children?: string
}

interface HeadAugmentation {
  /**
   * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base: Dedupes
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link: Dedupes & RendersToBody
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta: Dedupes
  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style: Dedupes & RendersToBody & RendersInnerContent
  /**
   * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script: Dedupes & RendersToBody & RendersInnerContent
  /**
   * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
   * or if scripting is currently turned off in the browser.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
   */
  noscript: Dedupes & RendersToBody & RendersInnerContent
  /**
   * Attributes for the <html> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  htmlAttrs: Dedupes
  /**
   * Attributes for the <body> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
   */
  bodyAttrs: Dedupes
}

describe('vueuse example', () => {
  it('define head', () => {
    const title = ref('title')
    const tags = defineHead<HeadAugmentation>({
      title: 'hello',
      base: {
        href: '/base',
      },
      meta: [
        {
          name: 'description',
          content: () => `${title.value} - hello`,
        },
        {
          name: 'description',
          content: 'desc 2',
        },
        {
          property: 'og:locale:alternate',
          content: 'fr',
          key: 'fr',
        },
        {
          property: 'og:locale:alternate',
          content: 'zh',
          key: 'zh',
        },
      ],
      htmlAttrs: {
        lang: () => 'en',
        dir: () => 'ltr',
      },
      script: [
        {
          'src': 'foo.js',
          'data-something': 'test',
          'some-rubbish': 'test',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "base": {
          "href": "/base",
        },
        "htmlAttrs": {
          "dir": [Function],
          "lang": [Function],
        },
        "meta": [
          {
            "content": [Function],
            "name": "description",
          },
          {
            "content": "desc 2",
            "name": "description",
          },
          {
            "content": "fr",
            "key": "fr",
            "property": "og:locale:alternate",
          },
          {
            "content": "zh",
            "key": "zh",
            "property": "og:locale:alternate",
          },
        ],
        "script": [
          {
            "data-something": "test",
            "some-rubbish": "test",
            "src": "foo.js",
          },
        ],
        "title": "hello",
      }
    `)
  })
})

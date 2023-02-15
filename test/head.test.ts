import { describe, it } from 'vitest'
import { defineHead } from '../src'
import type { DataKeys } from '../src'

describe('head', () => {
  it('define head', () => {
    const tags = defineHead<{
      script: DataKeys
    }>({
      title: 'test',
      script: [
        {
          'src': 'https://idea-lets-dance.harlanzw.com/script.js',
          'data-spa': 'auto',
          'data-site': 'VDJUVDNA',
          'defer': true,
        },
      ],
      bodyAttrs: {
        'data-something': 'some value',
      },
      htmlAttrs: {
        lang: 'test',
        dir: 'ltr',
      },
      link: [
        {
          href: 'style.css',
          as: 'style',
          crossorigin: 'anonymous',
        },
      ],
      meta: [
        {
          name: 'description',
          content: 'ad',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "bodyAttrs": {
          "data-something": "some value",
        },
        "htmlAttrs": {
          "dir": "ltr",
          "lang": "test",
        },
        "link": [
          {
            "as": "style",
            "crossorigin": "anonymous",
            "href": "style.css",
          },
        ],
        "meta": [
          {
            "content": "ad",
            "name": "description",
          },
        ],
        "script": [
          {
            "data-site": "VDJUVDNA",
            "data-spa": "auto",
            "defer": true,
            "src": "https://idea-lets-dance.harlanzw.com/script.js",
          },
        ],
        "title": "test",
      }
    `)
  })
})

import { describe, it } from 'vitest'
import { defineHead } from 'zhead'

describe('head', () => {
  it('define head', () => {
    const tags = defineHead({
      title: 'test',
      script: [
        {
          'src': 'https://idea-lets-dance.harlanzw.com/script.js',
          'data-spa': 'auto',
          'data-site': 'VDJUVDNA',
          'defer': true,
        },
      ],
      link: [
        { href: 'style.css', as: 'style', crossorigin: 'anonymous' },
      ],
      meta: [
        { name: 'description', content: 'test' },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "link": [
          {
            "as": "style",
            "crossorigin": "anonymous",
            "href": "style.css",
          },
        ],
        "meta": [
          {
            "content": "test",
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

import { describe, it } from 'vitest'
import { defineHead } from 'zhead'

describe('head', () => {
  it('define head', () => {
    const tags = defineHead({
      title: 'test',
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
        "title": "test",
      }
    `)
  })
})

import { describe, it } from 'vitest'
import { defineHead } from '../src'

describe('head', () => {
  it('define head', () => {
    const tags = defineHead({
      title: 'test',
      link: [
        { href: 'style.css', as: 'style', crossorigin: 'anonymous' },
      ],
      meta: [
        { 'name': 'description', 'property': 'test', 'data-test': 'something' },
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
            "data-test": "something",
            "name": "description",
            "property": "test",
          },
        ],
        "title": "test",
      }
    `)
  })
})

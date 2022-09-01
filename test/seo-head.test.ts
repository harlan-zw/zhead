import { describe, it } from 'vitest'
import { resolveSeoHead } from '../src'

describe('seo head', () => {
  it('build seo head', () => {
    const tags = resolveSeoHead({
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
            "charset": "utf-8",
          },
          {
            "content": "initial-scale=1",
            "name": "viewport",
          },
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

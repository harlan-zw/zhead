import { describe, it } from 'vitest'
import { resolveSeoHead, unpackMeta } from 'zhead'

describe('seo head', () => {
  it('build seo head', () => {
    const tags = resolveSeoHead({
      title: 'test',
      link: [
        {
          id: 'test',
          href: 'style.css',
          as: 'style',
          crossorigin: 'anonymous',
        },
      ],
      meta: unpackMeta({
        description: 'test',
        dataTestSomething: 'test',
        somegibberish: 'ttreg',
      }),
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "link": [
          {
            "as": "style",
            "crossorigin": "anonymous",
            "href": "style.css",
            "id": "test",
          },
        ],
        "meta": [
          {
            "content": "test",
            "name": "description",
          },
          {
            "content": "test",
            "name": "data-test-something",
          },
          {
            "content": "ttreg",
            "name": "somegibberish",
          },
        ],
        "title": "test",
      }
    `)
  })

  it('build seo head example', () => {
    const tags = resolveSeoHead({
      title: 'My Title',
      meta: [
        { name: 'description', content: 'Some description' },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "meta": [
          {
            "content": "Some description",
            "name": "description",
          },
        ],
        "title": "My Title",
      }
    `)
  })
})

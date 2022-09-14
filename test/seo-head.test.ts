import { describe, it } from 'vitest'
import { resolveSeoHead, unpackMeta } from '../packages/zhead/src'

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
          {
            "charset": "utf-8",
          },
          {
            "content": "initial-scale=1, width=device-width",
            "name": "viewport",
          },
          {
            "content": "test",
            "property": "og:title",
          },
          {
            "content": "test",
            "property": "og:description",
          },
          {
            "content": "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
            "name": "robots",
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
          {
            "charset": "utf-8",
          },
          {
            "content": "initial-scale=1, width=device-width",
            "name": "viewport",
          },
          {
            "content": "My Title",
            "property": "og:title",
          },
          {
            "content": "Some description",
            "property": "og:description",
          },
          {
            "content": "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
            "name": "robots",
          },
        ],
        "title": "My Title",
      }
    `)
  })
})

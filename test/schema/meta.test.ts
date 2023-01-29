import { describe, it } from 'vitest'
import { defineHead } from 'zhead'

describe('metatags', () => {
  it('charset', () => {
    const tags = defineHead({
      meta: [
        {
          charset: 'utf-8',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "meta": [
          {
            "charset": "utf-8",
          },
        ],
      }
    `)
  })

  it('http equiv', () => {
    const tags = defineHead({
      meta: [
        {
          'http-equiv': 'refresh',
          'content': '30',
          'data-test': '123',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "meta": [
          {
            "content": "30",
            "data-test": "123",
            "http-equiv": "refresh",
          },
        ],
      }
    `)
  })

  it('typing', () => {
    const tags = defineHead({
      meta: [
        {
          name: 'google',
          content: 'My Description',
        },
        {
          property: 'og:image',
          content: 'https://example.com/image.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'referrer',
          content: 'origin-when-cross-origin',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "meta": [
          {
            "content": "My Description",
            "name": "google",
          },
          {
            "content": "https://example.com/image.jpg",
            "property": "og:image",
          },
          {
            "content": "summary_large_image",
            "name": "twitter:card",
          },
          {
            "content": "origin-when-cross-origin",
            "name": "referrer",
          },
        ],
      }
    `)
  })
})

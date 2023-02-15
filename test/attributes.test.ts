import { describe, it } from 'vitest'
import { defineHead } from '../src'

describe('attributes', () => {
  it('html', () => {
    const tags = defineHead({
      htmlAttrs: {
        'lang': 'en',
        'dir': 'ltr',
        'data-something': '123',
      },
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "htmlAttrs": {
          "data-something": "123",
          "dir": "ltr",
          "lang": "en",
        },
      }
    `)
  })

  it('body', () => {
    const tags = defineHead({
      bodyAttrs: {
        'data-something': '123',
      },
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "bodyAttrs": {
          "data-something": "123",
        },
      }
    `)
  })
})

import type { Head } from '../src'
import { describe, expect, it } from 'vitest'

describe('attributes', () => {
  it('html', () => {
    const tags: Head = {
      htmlAttrs: {
        'lang': 'en',
        'dir': 'ltr',
        'data-something': '123',
      },
    }

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
    const tags: Head = {
      bodyAttrs: {
        'data-something': '123',
      },
    }

    expect(tags).toMatchInlineSnapshot(`
      {
        "bodyAttrs": {
          "data-something": "123",
        },
      }
    `)
  })
})

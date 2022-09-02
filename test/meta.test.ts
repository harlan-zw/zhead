import { describe, it } from 'vitest'
import { resolveHead } from 'zhead'

describe('metatags', () => {
  it('charset', () => {
    const tags = resolveHead({
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
    const tags = resolveHead({
      meta: [
        {
          httpEquiv: 'refresh',
          content: '30',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "meta": [
          {
            "content": "30",
            "http-equiv": "refresh",
          },
        ],
      }
    `)
  })
})

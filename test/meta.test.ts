import { describe, it } from 'vitest'
import { defineMeta } from '../src'

describe('metatags', () => {
  it('charset', () => {
    const tags = defineMeta([
      {
        charset: 'utf-8',
      },
    ])

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "charset": "utf-8",
        },
      ]
    `)
  })

  it('charset', () => {
    const tags = defineMeta([
      {
        httpEquiv: 'refresh',
        content: '30',
      },
    ])

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "30",
          "http-equiv": "refresh",
        },
      ]
    `)
  })
})

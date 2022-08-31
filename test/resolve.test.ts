import { describe, it } from 'vitest'
import { resolveMetaTags } from '../src'

describe('resolve', () => {
  it('basic', () => {
    const tags = resolveMetaTags({
      ogTitle: 'My Title',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "My Title",
          "property": "og:title",
        },
      ]
    `)
  })
})

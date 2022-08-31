import { describe, it } from 'vitest'
import { resolveMetaFlat } from '../src'

describe('metatags', () => {
  it('define meta tags', () => {
    const tags = resolveMetaFlat({
      ogTitle: 'My Title',
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "ogTitle": "My Title",
      }
    `)
  })

  it('viewport', () => {
    const tags = resolveMetaFlat({
      viewport: {
        maximumScale: 2100,
        viewportFit: 'auto',
      },
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "viewport": {
          "maximumScale": 2100,
          "viewportFit": "auto",
        },
      }
    `)
  })
})

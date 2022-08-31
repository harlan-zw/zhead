import { describe, it } from 'vitest'
import { resolveMetaFlat, validateMetaTags } from '../src'

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

  it('resolve meta tags', () => {
    const meta = resolveMetaFlat({
      ogUrl: 'someurl',
      ogTitle: 'My Title',
      ogDescription: 'test',
    })
    const tags = validateMetaTags({
      meta,
    })

    expect(tags.url.success).toBeFalsy()
    expect(tags.url.error.issues).toMatchInlineSnapshot(`
      [
        {
          "code": "invalid_string",
          "message": "Invalid url",
          "path": [],
          "validation": "url",
        },
      ]
    `)

    expect(tags).toMatchInlineSnapshot(`
      {
        "ogDescription": {
          "data": "test",
          "success": true,
        },
        "ogTitle": {
          "data": "My Title",
          "success": true,
        },
        "url": {
          "error": [ZodError: [
        {
          "validation": "url",
          "code": "invalid_string",
          "message": "Invalid url",
          "path": []
        }
      ]],
          "success": false,
        },
      }
    `)
  })
})

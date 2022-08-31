import { describe, it } from 'vitest'
import { defineHead, validateMetaTags } from '../src'

describe('head', () => {
  it('define head', () => {
    const tags = defineHead({
      title: 132,
      link: [
        { href: 'style.css', as: 123, crossorigin: 'anonymous' },
      ],
      meta: [
        { 'name': 'description', 'content': () => '', 'property': 'test', 'data-test': 'something' },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "ogTitle": "My Title",
      }
    `)
  })

  it('viewport', () => {
    const tags = defineMetaTags({
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
    const tags = validateMetaTags({
      ogTitle: 'My Title',
      ogDescription: 'test',
      url: 'some url',
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

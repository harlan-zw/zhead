import { describe, it } from 'vitest'
import {resolveHead, resolveHeadFlat} from '../src'

describe('head', () => {
  it('define head', () => {
    const tags = resolveHead({
      title: 'test',
      link: [
        { href: 'style.css', as: 'style', crossorigin: 'anonymous' },
      ],
      meta: [
        { name: 'description', property: 'test', dataTest: 'something' },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "link": [
          {
            "as": "style",
            "crossorigin": "anonymous",
            "href": "style.css",
          },
        ],
        "meta": [
          {
            "data-test": "something",
            "name": "description",
            "property": "test",
          },
        ],
        "title": "test",
      }
    `)
  })

  it('readme example', () => {
    const head = resolveHeadFlat({
      title: 'My Page',
      base: {
        href: 'https://example.com',
        target: '_blank',
      },
      meta: [
        { charset: 'utf-8' }
      ]
    })

    expect(head).toMatchInlineSnapshot(`
      [
        {
          "attributes": {
            "children": "My Page",
          },
          "tag": "title",
        },
        {
          "attributes": {
            "href": "https://example.com",
            "target": "_blank",
          },
          "tag": "base",
        },
        {
          "attributes": {
            "charset": "utf-8",
          },
          "tag": "meta",
        },
      ]
    `)
  })
})

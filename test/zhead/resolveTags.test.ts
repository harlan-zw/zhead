import { describe, it } from 'vitest'
import { resolveTags } from 'zhead'

describe('resolveTags', () => {
  it('basic', () => {
    const head = resolveTags({
      title: 'test',
      script: [
        { src: 'https://example.com/script.js' },
      ],
      meta: [
        {
          name: 'description',
          content: 'test',
        },
      ],
    })
    expect(head).toMatchInlineSnapshot(`
      [
        {
          "children": "test",
          "props": {},
          "tag": "title",
        },
        {
          "props": {
            "src": "https://example.com/script.js",
          },
          "tag": "script",
        },
        {
          "props": {
            "content": "test",
            "name": "description",
          },
          "tag": "meta",
        },
      ]
    `)
  })
})

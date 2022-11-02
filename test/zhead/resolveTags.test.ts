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
          "props": {
            "children": "test",
          },
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

import { describe, it } from 'vitest'
import { resolveTags } from 'zhead'
import type { AsyncHead } from '@zhead/schema'

describe('resolveTags', () => {
  it('basic', async () => {
    const head = await resolveTags({
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

  it('promise', async () => {
    const tag = await resolveTags<AsyncHead>({
      meta: [
        {
          name: new Promise<string>(resolve => resolve('description')),
          content: new Promise(resolve => setTimeout(() => resolve('my description'), 250)),
        },
      ],
    })

    expect(tag).toMatchInlineSnapshot(`
      [
        {
          "props": {
            "content": "my description",
            "name": "description",
          },
          "tag": "meta",
        },
      ]
    `)
  })
})

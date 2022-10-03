import { describe, it } from 'vitest'
import { defineHeadRaw } from 'zhead'

describe('raw head', () => {
  it('define head', () => {
    const tags = defineHeadRaw({
      title: 'test',
      script: [
        {
          contenteditable: true,
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "script": [
          {
            "contenteditable": true,
          },
        ],
        "title": "test",
      }
    `)
  })
})

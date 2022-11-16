import { describe, it } from 'vitest'
import { ssrRenderTags } from 'zhead'

describe('ssrRenderTags', () => {
  it('tagPosition', () => {
    const head = ssrRenderTags([
      {
        tag: 'script',
        tagPosition: 'bodyOpen',
        props: {
          src: 'https://example.com/body-open.js',
        },
      },
      {
        tag: 'script',
        tagPosition: 'bodyClose',
        props: {
          src: 'https://example.com/body-close.js',
        },
      },
      {
        tag: 'script',
        props: {
          src: 'https://example.com/head.js',
        },
      },
    ])
    expect(head).toMatchInlineSnapshot(`
      {
        "bodyAttrs": "",
        "bodyTags": "<script src=\\"https://example.com/body-close.js\\"></script>",
        "bodyTagsOpen": "<script src=\\"https://example.com/body-open.js\\"></script>",
        "headTags": "<script src=\\"https://example.com/head.js\\"></script>",
        "htmlAttrs": "",
      }
    `)
  })
})

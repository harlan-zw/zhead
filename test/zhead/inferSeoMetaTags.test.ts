import { describe, it } from 'vitest'
import { inferSeoMetaTags, resolveTags, unpackMeta } from 'zhead'

describe('inferSeoMetaTags', () => {
  it('basic', async () => {
    const tags = await resolveTags({
      title: 'test',
      link: [
        {
          id: 'test',
          href: 'style.css',
          as: 'style',
          crossorigin: 'anonymous',
        },
      ],
      meta: unpackMeta({
        description: 'test',
        dataTestSomething: 'test',
        somegibberish: 'ttreg',
      }),
    })

    const seoTags = inferSeoMetaTags(tags)

    expect(seoTags).toMatchInlineSnapshot(`
      [
        {
          "children": "test",
          "props": {},
          "tag": "title",
        },
        {
          "props": {
            "as": "style",
            "crossorigin": "anonymous",
            "href": "style.css",
            "id": "test",
          },
          "tag": "link",
        },
        {
          "props": {
            "content": "test",
            "name": "description",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "test",
            "name": "data-test-something",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "ttreg",
            "name": "somegibberish",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "test",
            "property": "og:title",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "test",
            "name": "og:description",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "max-snippet: -1; max-image-preview: large; max-video-preview: -1",
            "name": "robots",
          },
          "tag": "meta",
        },
      ]
    `)
  })

  it('build seo head example', async () => {
    const tags = await resolveTags({
      title: 'My Title',
      meta: [
        { name: 'description', content: 'Some description' },
      ],
    })

    const seoTags = inferSeoMetaTags(tags)

    expect(seoTags).toMatchInlineSnapshot(`
      [
        {
          "children": "My Title",
          "props": {},
          "tag": "title",
        },
        {
          "props": {
            "content": "Some description",
            "name": "description",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "My Title",
            "property": "og:title",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "Some description",
            "name": "og:description",
          },
          "tag": "meta",
        },
        {
          "props": {
            "content": "max-snippet: -1; max-image-preview: large; max-video-preview: -1",
            "name": "robots",
          },
          "tag": "meta",
        },
      ]
    `)
  })
})

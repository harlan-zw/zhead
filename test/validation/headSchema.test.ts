import { describe, it } from 'vitest'
import { defineHead, resolveTags, ssrRenderTags, unpackMeta } from 'zhead'
import { headSchema, validateTag } from '@zhead/validation'

describe('headSchema', () => {
  it('can validate', () => {
    const tags = defineHead({
      meta: [
        { description: 'My Description' },
      ],
    })

    expect(headSchema.safeParse(tags)).toMatchInlineSnapshot(`
      {
        "error": [ZodError: [
        {
          "code": "custom",
          "message": "The attribute \`content\` must be included.",
          "path": [
            "meta",
            0
          ]
        }
      ]],
        "success": false,
      }
    `)
  })
  it('tags malformed example', () => {
    const tags = resolveTags({
      meta: [
      ],
      script: [
        { src: 'https://example.com/script.js', dataTestId: '12345' },
      ],
      somethingMissing: 'test',
    })

    const validatedTags = tags.map(tag => validateTag(tag))

    expect(validatedTags).toMatchInlineSnapshot(`
      [
        {
          "props": {
            "dataTestId": "12345",
            "src": "https://example.com/script.js",
          },
          "tag": "script",
        },
        {
          "props": {
            "0": "t",
            "1": "e",
            "2": "s",
            "3": "t",
          },
          "tag": "somethingMissing",
        },
      ]
    `)
  })
  it('html malformed example', () => {
    const tags = resolveTags({
      meta: [
        {
          charset: 'utf-8',
        },
        ...unpackMeta({
          ogTitle: 'test',
        }),
        {
          name: 'description',
          content: 'desc',
        },
        {
          name: 'description',
          content: 'desc 2',
        },
        {
          property: 'og:locale:alternate',
          content: 'fr',
          key: 'fr',
        },
        {
          property: 'og:locale:alternate',
          content: 'zh',
          key: 'zh',
        },
      ],
      script: [
        { src: 'https://example.com/script.js', dataTestId: '12345' },
        {
          src: 'foo.js',
          dataSomething: 'test',
          someRubbish: 'test',
        },
      ],
      somethingMissing: 'test',

      title: 'hello',
      base: {
        href: '/base',
      },
    })

    const validatedTags = tags.map(tag => validateTag(tag))

    expect(ssrRenderTags(validatedTags)).toMatchInlineSnapshot(`
      {
        "bodyAttrs": "",
        "bodyTags": "",
        "bodyTagsOpen": "",
        "headTags": "<meta charset=\\"utf-8\\">
      <meta content=\\"test\\" property=\\"og:title\\">
      <meta content=\\"desc\\" name=\\"description\\">
      <meta content=\\"desc 2\\" name=\\"description\\">
      <meta content=\\"fr\\" key=\\"fr\\" property=\\"og:locale:alternate\\">
      <meta content=\\"zh\\" key=\\"zh\\" property=\\"og:locale:alternate\\">
      <script src=\\"https://example.com/script.js\\" dataTestId=\\"12345\\"></script>
      <script src=\\"foo.js\\" dataSomething=\\"test\\" someRubbish=\\"test\\"></script>
      <somethingMissing 0=\\"t\\" 1=\\"e\\" 2=\\"s\\" 3=\\"t\\"></somethingMissing>
      <title>hello</title>
      <base href=\\"/base\\">",
        "htmlAttrs": "",
      }
    `)
  })
})

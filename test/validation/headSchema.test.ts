import { describe, it } from 'vitest'
import { defineHead, resolveTags, ssrRenderTags, unpackMeta } from 'zhead'
import { validateTag } from '../../packages/validation/src'
import { headSchema } from '../../packages/validation'

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
            "data-test-id": "12345",
            "src": "https://example.com/script.js",
          },
          "tag": "script",
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
      "<title>hello</title>
      <base href=\\"/base\\">
      <meta charset=\\"utf-8\\">
      <meta content=\\"test\\" property=\\"og:title\\">
      <meta content=\\"desc\\" name=\\"description\\">
      <meta content=\\"desc 2\\" name=\\"description\\">
      <meta content=\\"fr\\" property=\\"og:locale:alternate\\">
      <meta content=\\"zh\\" property=\\"og:locale:alternate\\">
      <script src=\\"https://example.com/script.js\\" data-test-id=\\"12345\\"></script>
      <script src=\\"foo.js\\" data-something=\\"test\\" some-rubbish=\\"test\\"></script>"
    `)
  })
})

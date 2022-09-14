import { describe, it } from 'vitest'
import { generateHtml, generateHtmlStrict, generateTags, generateTagsStrict, unpackMeta } from 'zhead'

describe('generate', () => {
  it('example tags', () => {
    const head = generateTags({
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
  it('example html', () => {
    const head = generateHtml({
      title: 'test',
      script: [
        { src: 'https://example.com/script.js' },
      ],
      meta: [
        { name: 'description', content: 'test' },
      ],
    })

    expect(head).toMatchInlineSnapshot(`
      "<title>test</title>
      <script src=\\"https://example.com/script.js\\"></script>
      <meta name=\\"description\\" content=\\"test\\">"
    `)
  })

  it('tags malformed example', () => {
    const head = generateTagsStrict({
      meta: [
      ],
      script: [
        { src: 'https://example.com/script.js', dataTestId: '12345' },
      ],
      somethingMissing: 'test',
    })

    expect(head).toMatchInlineSnapshot(`
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
    const head = generateHtmlStrict({
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

    expect(head).toMatchInlineSnapshot(`
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

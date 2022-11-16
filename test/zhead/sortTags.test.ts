import { resolveTags, sortTags } from 'zhead'
import { basicSchema } from '../fixtures'

describe('sortTags', () => {
  test('basic numeric', async () => {
    const tags = (await resolveTags({
      script: [
        {
          src: '/not-important-script.js',
        },
        {
          src: '/very-important-script.js',
          tagPriority: 1,
        },
      ],
    })).sort(sortTags)

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "props": {
            "src": "/very-important-script.js",
          },
          "tag": "script",
          "tagPriority": 1,
        },
        {
          "props": {
            "src": "/not-important-script.js",
          },
          "tag": "script",
        },
      ]
    `)
  })

  test('basic schema', async () => {
    const tags = (await resolveTags(basicSchema)).sort(sortTags)
    // charset -> base -> http-equiv -> title -> everything else
    expect(tags[0].tag).toEqual('meta')
    expect(tags[0].props.charset).toEqual('utf-8')

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "props": {
            "charset": "utf-8",
          },
          "tag": "meta",
        },
        {
          "props": {
            "href": "/",
          },
          "tag": "base",
        },
        {
          "props": {
            "content": "default-src 'self'",
            "http-equiv": "content-security-policy",
          },
          "tag": "meta",
        },
        {
          "children": "hello world",
          "props": {},
          "tag": "title",
        },
        {
          "props": {
            "dir": "ltr",
            "lang": "en",
          },
          "tag": "htmlAttrs",
        },
        {
          "props": {
            "class": "dark",
          },
          "tag": "bodyAttrs",
        },
        {
          "props": {
            "src": "https://cdn.example.com/script.js",
          },
          "tag": "script",
        },
        {
          "props": {
            "href": "https://cdn.example.com/favicon.ico",
            "rel": "icon",
            "type": "image/x-icon",
          },
          "tag": "link",
        },
      ]
    `)
  })
})

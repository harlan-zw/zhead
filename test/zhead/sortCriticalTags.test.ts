import {resolveTags, sortCriticalTags} from "zhead";
import {basicSchema} from "../fixtures";

describe('sortCriticalTags', () => {
  test('basic schema', async () => {
    const tags = resolveTags(basicSchema).sort(sortCriticalTags)
    // charset -> base -> http-equiv -> title -> everything else
    expect(tags[0].tag).toEqual('meta')
    expect(tags[0].props['charset']).toEqual('utf-8')

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
          "props": {
            "children": "hello world",
          },
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

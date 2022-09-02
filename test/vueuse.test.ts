import { describe, it } from 'vitest'
import { resolveHead } from 'zhead'

describe('seo head', () => {
  it('build seo head', () => {
    const tags = resolveHead({
      title: 'hello',
      base: {
        href: '/base',
      },
      meta: [
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
        {
          src: 'foo.js',
          dataSomething: 'test',
          someRubbish: 'test',
        },
      ],
    })

    expect(tags).toMatchInlineSnapshot(`
      {
        "base": {
          "href": "/base",
        },
        "meta": [
          {
            "content": "desc",
            "name": "description",
          },
          {
            "content": "desc 2",
            "name": "description",
          },
          {
            "content": "fr",
            "key": "fr",
            "property": "og:locale:alternate",
          },
          {
            "content": "zh",
            "key": "zh",
            "property": "og:locale:alternate",
          },
        ],
        "script": [
          {
            "data-something": "test",
            "some-rubbish": "test",
            "src": "foo.js",
          },
        ],
        "title": "hello",
      }
    `)
  })
})

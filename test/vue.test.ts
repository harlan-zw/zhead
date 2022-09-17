import { describe, it } from 'vitest'
import { computed, nextTick, ref } from 'vue'
import type { Head } from '../packages/vue/src'
import { defineHead, packMeta, unpackMeta } from '../packages/vue/src'
import { deepUnref } from '../packages/vue/src/util'

describe('vue', () => {
  it('define head', async () => {
    const title = ref('')
    const scripts = ref<Required<Head>['script']>([])
    const desc = computed<Required<Head>['meta'][number]>(() => {
      return {
        name: 'description',
        content: 'test2',
      }
    })
    const meta = defineHead({
      title,
      base: {
        href: ref('title'),
        target: computed(() => 'test'),
      },
      link: [
        {
          as: 'style',
        },
      ],
      meta: [
        desc,
        {
          name: 'description',
          content: () => `${title.value} this is my description`,
        },
        {
          property: 'og:url',
          content: 'adult',
        },
      ],
      htmlAttrs: {
        lang: 'test',
        dir: 'ltr',
      },
      script: scripts,
    })
    scripts.value.push({
      src: 'foo.js',
      defer: true,
    })
    title.value = 'hello'
    await nextTick()

    expect(deepUnref(meta)).toMatchInlineSnapshot(`
      {
        "base": {
          "href": "title",
          "target": "test",
        },
        "htmlAttrs": {
          "dir": "ltr",
          "lang": "test",
        },
        "link": [
          {
            "as": "style",
          },
        ],
        "meta": [
          {
            "content": "test2",
            "name": "description",
          },
          {
            "content": [Function],
            "name": "description",
          },
          {
            "content": "adult",
            "property": "og:url",
          },
        ],
        "script": [
          {
            "defer": true,
            "src": "foo.js",
          },
        ],
        "title": "hello",
      }
    `)
  })

  it('unpack meta reactivity', async () => {
    const ogTitle = ref('my title')

    const meta = unpackMeta({
      ogTitle,
    })

    ogTitle.value = 'new title'

    await nextTick()

    expect(meta.value).toMatchInlineSnapshot(`
      [
        {
          "content": "new title",
          "property": "og:title",
        },
      ]
    `)
  })

  it('pack meta reactivity', async () => {
    const title = ref('my title')

    const meta = packMeta([
      {
        property: 'og:title',
        content: title,
      },
    ])

    title.value = 'new title'

    await nextTick()

    expect(meta.value).toMatchInlineSnapshot(`
      {
        "ogTitle": "new title",
      }
    `)
  })
})

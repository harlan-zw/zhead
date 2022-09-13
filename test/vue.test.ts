import { describe, it } from 'vitest'
import { computed, nextTick, ref } from 'vue'
import type { MetaRef, ScriptRef } from '../packages/vue/src'
import { defineHead, packMeta, unpackMeta } from '../packages/vue/src'
import { deepUnref } from '../packages/vue/src/util'

describe('vue', () => {
  it('define head', async () => {
    const title = ref('')
    const scripts = ref<Array<ScriptRef>>([])
    const desc = computed<MetaRef>(() => {
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
      meta: [
        desc,
        {
          name: 'description',
          content: computed(() => `${title.value} this is my description`),
        },
        {
          property: 'og:url',
          content: 'adult',
        },
      ],
      script: scripts,
    })
    scripts.value.push({
      'src': 'foo.js',
      'defer': true,
      'data-test': 'trr',
    })
    title.value = 'hello'
    await nextTick()

    expect(deepUnref(meta)).toMatchInlineSnapshot(`
      {
        "base": {
          "href": "title",
          "target": "test",
        },
        "meta": [
          {
            "content": "test2",
            "name": "description",
          },
          {
            "content": "hello this is my description",
            "name": "description",
          },
          {
            "content": "adult",
            "property": "og:url",
          },
        ],
        "script": [
          {
            "data-test": "trr",
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

import { describe, it } from 'vitest'
import { nextTick, ref } from 'vue'
import { packMeta, unpackMeta } from '../packages/vue/src'

describe('vue', () => {
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

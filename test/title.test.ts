import { describe, it } from 'vitest'
import { defineHead, renderTemplate } from 'zhead'

describe('title', () => {
  it('%s shortcut', () => {
    const tags = defineHead({
      title: 'test',
      titleTemplate: '%s - My Site',
    })

    const title = renderTemplate(tags.titleTemplate, tags.title)
    expect(title).toMatchInlineSnapshot('"test - My Site"')
  })
})

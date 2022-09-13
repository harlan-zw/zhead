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

  it('fn', () => {
    const tags = defineHead({
      title: 'test 2',
      titleTemplate: title => `${title} - My Site`,
    })

    const title = renderTemplate(tags.titleTemplate, tags.title)
    expect(title).toMatchInlineSnapshot('"test 2 - My Site"')
  })
})

import {resolveTitleTemplateFromTags} from "zhead";

describe('titleTemplate', () => {
  test('string replace', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'titleTemplate',
        children: '%s - my template',
        props: {}
      },
      {
        tag: 'title',
        children: 'test',
        props: {}
      }
    ])
    expect(tags[0].children).toEqual('test - my template')
  })
  test('fn replace', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'titleTemplate',
        // @ts-expect-error runtime type
        children: (title?: string) => `${title} - my template`,
        props: {}
      },
      {
        tag: 'title',
        children: 'test',
        props: {}
      }
    ])
    expect(tags[0].children).toEqual('test - my template')
  })
  test('titleTemplate as title', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'titleTemplate',
        // @ts-expect-error runtime type
        children: (title?: string) => title ? `${title} - Template` : 'Default Title',
        props: {}
      },
      {
        tag: 'title',
        // @ts-expect-error runtime type
        children: null,
        props: {}
      }
    ])
    expect(tags[0].children).toEqual('Default Title')
  })
  test('reset title template', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'titleTemplate',
        // @ts-expect-error runtime type
        children: null,
        props: {}
      },
      {
        tag: 'title',
        children: 'page title',
        props: {}
      }
    ])
    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "children": "page title",
          "props": {},
          "tag": "title",
        },
      ]
    `)
    expect(tags[0].children).toEqual('page title')
  })
  //
  test('null fn return', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'titleTemplate',
        // @ts-expect-error runtime type
        children: (title?: string | null) => title === 'test' ? null : `${title} - Template`,
        props: {}
      },
      {
        tag: 'title',
        children: 'test',
        props: {}
      }
    ])
    expect(tags.length).toEqual(0)
  })

  test('empty title', async () => {
    const tags = resolveTitleTemplateFromTags([
      {
        tag: 'title',
        children: '',
        props: {}
      }
    ])
    expect(tags[0].children).toEqual('')
  })
})

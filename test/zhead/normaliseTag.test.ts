import { normaliseTag } from 'zhead'

describe('normaliseTag', () => {
  test('basic', async () => {
    const tag = normaliseTag('meta', {
      test: true,
      something: false,
    })

    expect(tag.props.something).toBeUndefined()
    expect(tag.props.test).toBe('')
  })

  test('children', async () => {
    const tag = normaliseTag('title', 'test')

    expect(tag).toMatchInlineSnapshot(`
      {
        "children": "test",
        "props": {},
        "tag": "title",
      }
    `)
  })
})

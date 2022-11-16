import { normaliseTag } from 'zhead'

describe('normaliseTag', () => {
  test('basic', async () => {
    const tag = await normaliseTag('meta', {
      test: true,
      something: false,
    })

    expect(tag.props.something).toBeUndefined()
    expect(tag.props.test).toBe('')
  })

  test('promise', async () => {
    const tag = await normaliseTag('meta', {
      test: new Promise<true>(resolve => resolve(true)),
      something: new Promise(resolve => setTimeout(() => resolve(false), 250)),
    })

    expect(tag.props.something).toBeUndefined()
    expect(tag.props.test).toBe('')
  })

  test('children', async () => {
    const tag = await normaliseTag('title', 'test')

    expect(tag).toMatchInlineSnapshot(`
      {
        "children": "test",
        "props": {},
        "tag": "title",
      }
    `)
  })
})

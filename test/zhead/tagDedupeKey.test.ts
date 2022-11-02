import { tagDedupeKey} from "zhead";

describe('tagDedupeKey', () => {
  test('title key', async () => {
    const key = tagDedupeKey({
      tag: 'title',
      children: 'test',
      props: {}
    })
    expect(key).toEqual('title')
  })

  test('canonical key', async () => {
    const key = tagDedupeKey({
      tag: 'link',
      props: {
        rel: 'canonical',
        href: 'https://website.com'
      }
    })
    expect(key).toEqual('canonical')
  })

  test('canonical key', async () => {
    const key = tagDedupeKey({
      tag: 'meta',
      props: {
        charset: 'utf-test'
      }
    })
    expect(key).toEqual('charset')
  })

  test('id key', async () => {
    const key = tagDedupeKey({
      tag: 'script',
      props: {
        id: 'test',
        src: 'https://website.com'
      }
    })
    expect(key).toEqual('script:id:test')
  })

  test('meta key', async () => {
    const key = tagDedupeKey({
      tag: 'meta',
      props: {
        name: 'description'
      }
    })
    expect(key).toEqual('meta:name:description')
  })
})

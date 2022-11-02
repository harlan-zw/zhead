import {normaliseProps} from "zhead";

describe('normaliseProps', () => {
  test('true', async () => {
    const props = normaliseProps({
      test: true,
      something: false
    })

    expect(props.something).toBeUndefined()
    expect(props.test).toBe('')
  })
})

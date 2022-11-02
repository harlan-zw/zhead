import {describe, it} from "vitest";
import {tagToString} from "zhead";

describe('tagToString', () => {
  it('basic', () => {
    expect(tagToString({
      tag: 'script',
      props: {
        src: 'https://website.com',
        async: true,
        id: 'test',
        'data-test': 'test',
        'data-test2': 'test2',
      },
    })).toMatchInlineSnapshot('"<script src=\\"https://website.com\\" async id=\\"test\\" data-test=\\"test\\" data-test2=\\"test2\\"></script>"')
  })
})

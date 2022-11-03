import { describe, it } from 'vitest'
import { propsToString } from 'zhead'

describe('propsToStrings', () => {
  it('basic', () => {
    expect(propsToString({
      test: 'test',
      something: 'something',
      third: '',
      somethingWithSpace: 'something with space',
      somethingWithQuote: 'something with "quote"',
      somethingWithQuoteAndSpace: 'something with "quote" and space',
      somethingWithQuoteAndSpaceAndEqual: 'something with "quote" and space and =',
      somethingWithQuoteAndSpaceAndEqualAndColon: 'something with "quote" and space and = and :',
      somethingWithQuoteAndSpaceAndEqualAndColonAndSemicolon: 'something with "quote" and space and = and : and ;',
      somethingWithQuoteAndSpaceAndEqualAndColonAndSemicolonAndComma: 'something with "quote" and space and = and : and ; and ,',
    })).toMatchInlineSnapshot('" test=\\"test\\" something=\\"something\\" third=\\"\\" somethingWithSpace=\\"something with space\\" somethingWithQuote=\\"something with &quot;quote&quot;\\" somethingWithQuoteAndSpace=\\"something with &quot;quote&quot; and space\\" somethingWithQuoteAndSpaceAndEqual=\\"something with &quot;quote&quot; and space and =\\" somethingWithQuoteAndSpaceAndEqualAndColon=\\"something with &quot;quote&quot; and space and = and :\\" somethingWithQuoteAndSpaceAndEqualAndColonAndSemicolon=\\"something with &quot;quote&quot; and space and = and : and ;\\" somethingWithQuoteAndSpaceAndEqualAndColonAndSemicolonAndComma=\\"something with &quot;quote&quot; and space and = and : and ; and ,\\""')
  })
})

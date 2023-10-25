import type { MetaSchema } from '../../metaFlat'

export const twitterAppUrlIpad: MetaSchema = {
  name: 'twitter:app:url:ipad',
  key: 'name',
  description: 'The URL to open your app to a specific page in the Twitter app on iPad.',
  tags: ['social-share'],
  color: '#FFCDD2',
  examples: [
    {
      value: 'twitter://page?id=12345',
      description: 'Opens the Twitter app on iPad and navigates to the page with the specified ID.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference-ios',
  ],
}

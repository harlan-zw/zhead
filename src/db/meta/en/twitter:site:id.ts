import type { MetaSchema } from '../../metaFlat'

export const twitterSiteId: MetaSchema = {
  name: 'twitter:site:id',
  key: 'name',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Specifies the Twitter username associated with the website or content.',
  tips: [
    {
      title: 'Use the Twitter Username',
      description: 'Provide your Twitter site username to associate your website or content with your Twitter account.',
    },
    {
      title: 'Ensure Consistency',
      description: 'Use the same Twitter username across all platforms and channels to maintain brand consistency and make it easier for users to find and follow you.',
    },
  ],
  examples: [
    {
      value: '@example',
      description: 'Assigns the Twitter username "@example" to the website or content.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const twitterCreator: MetaSchema = {
  name: 'twitter:creator',
  key: 'name',
  color: '#00acee',
  tags: 'social-share',
  description: 'Indicates the Twitter username of the content creator or author for a webpage.',
  tips: [
    {
      title: 'Use an @username',
      description: 'Make sure to include the "@" symbol before the Twitter username in the value of the "twitter:creator" meta tag.',
    },
    {
      title: 'Use a Real Twitter Account',
      description: 'Provide the Twitter username of the actual content creator or author on Twitter. This allows users to easily find and connect with the creator on Twitter.',
    },
  ],
  examples: [
    {
      value: '@username',
      description: 'Specifies the "twitter:creator" meta tag with the Twitter username of the content creator or author for a webpage.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
  ],
}

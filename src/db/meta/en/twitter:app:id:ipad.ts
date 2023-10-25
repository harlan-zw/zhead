import type { MetaSchema } from '../../metaFlat'

export const twitterAppIdIpad: MetaSchema = {
  name: 'twitter:app:id:ipad',
  key: 'name',
  color: '#FFB30D',
  tags: 'social-share',
  description: 'Specifies the unique identifier for the iPad-specific app associated with the web page, allowing the app to be deep-linked when shared on Twitter.',
  tips: [
    {
      title: 'App Deep Linking',
      description: 'Ensure that the specified Twitter app ID for iPad is associated with an iOS app that supports deep linking to provide a seamless experience for users.',
    },
  ],
  examples: [
    {
      value: '1234567890',
      description: 'Specifies the "twitter:app:id:ipad" meta tag with the unique identifier "1234567890" for the iPad-specific app.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

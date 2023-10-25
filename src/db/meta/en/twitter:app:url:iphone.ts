import type { MetaSchema } from '../../metaFlat'

export const twitterAppUrlIphone: MetaSchema = {
  name: 'twitter:app:url:iphone',
  key: 'name',
  color: '#0390fc',
  tags: 'social-share',
  description: 'Specifies the deep link URL for the iOS app associated with the website when shared on Twitter using an iPhone.',
  tips: [
    {
      title: 'Use a Deep Link URL',
      description: 'Provide a deep link URL that opens a specific section or page within your iOS app when shared on Twitter using an iPhone.',
    },
    {
      title: 'Ensure App Integration',
      description: 'Make sure your iOS app is integrated with the Twitter app by implementing the necessary app-specific URL schemes.',
    },
  ],
  examples: [
    {
      value: 'yourapp://deeplink',
      description: 'Specifies the "twitter:app:url:iphone" meta tag with the deep link URL for the iOS app "yourapp" when shared on Twitter using an iPhone.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

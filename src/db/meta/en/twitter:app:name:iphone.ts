import type { MetaSchema } from '../../metaFlat'

export const twitterAppNameIphone: MetaSchema = {
  name: 'twitter:app:name:iphone',
  key: 'name',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Specifies the name of your iPhone app if you have one associated with your website. This meta tag is used for Twitter sharing on iOS devices and allows users to open your app directly from a tweet.',
  tips: [
    {
      title: 'Provide a Consistent App Experience',
      description: 'Make sure the name specified in the "twitter:app:name:iphone" meta tag matches the actual name of your iPhone app in the App Store. This will provide a seamless user experience when opening your app from a tweet.',
    },
    {
      title: 'Include Deep Linking',
      description: 'To enhance user engagement, consider implementing deep linking within your iPhone app. This will allow users to be directed to specific content within the app when they open it from a tweet.',
    },
  ],
  examples: [
    {
      value: 'MyApp',
      description: 'Specifies the name of a fictional iPhone app called "MyApp" for Twitter sharing on iOS devices.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const twitterAppIdIphone: MetaSchema = {
  name: 'twitter:app:id:iphone',
  key: 'name',
  color: '#00ACED',
  tags: 'social-share',
  description: 'Specifies the Twitter App ID for iOS devices. This meta tag is used to associate your iOS app with your website, allowing users to easily navigate between your website and app.',
  tips: [
    {
      title: 'Obtain a Twitter App ID',
      description: 'Before using this meta tag, you need to register your iOS app with Twitter and obtain a unique App ID.',
    },
    {
      title: 'Include the Meta Tag on your Web Page',
      description: 'Place the "twitter:app:id:iphone" meta tag in the head section of your web page, with the "content" attribute set to your Twitter App ID.',
    },
    {
      title: 'Test the Association',
      description: 'After adding the meta tag, test the association between your website and iOS app using the Twitter Card Validator.',
    },
  ],
  examples: [
    {
      value: '123456789',
      description: 'Associates the Twitter App ID "123456789" with the website for iOS devices.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/ios-apps/guides/preparing-your-ios-app-to-link-to-your-website',
  ],
}

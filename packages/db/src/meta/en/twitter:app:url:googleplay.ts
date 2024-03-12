import type { MetaSchema } from '../../metaFlat'

export const twitterAppUrlGoogleplay: MetaSchema = {
  name: 'twitter:app:url:googleplay',
  key: 'name',
  color: '#29B6F6',
  tags: 'social-share',
  description: 'Specifies the custom URL scheme for an Android app on the Google Play Store. It allows users to open the app directly from a link in a Twitter post on Android devices.',
  tips: [
    {
      title: 'Use Deep Linking',
      description: 'Make sure the custom URL scheme specified in the "twitter:app:url:googleplay" meta tag is supported and properly configured in your Android app.',
    },
    {
      title: 'Provide a Relevant Page',
      description: 'Ensure that the custom URL scheme specified in the meta tag points to a relevant page within your Android app, improving the user experience.',
    },
  ],
  examples: [
    {
      value: 'myapp://playstore?id=com.example.myapp',
      description: 'Specifies the "twitter:app:url:googleplay" meta tag with a custom URL scheme for the Android app on the Google Play Store. The scheme opens the app directly to the page with the ID "com.example.myapp."',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
  ],
}

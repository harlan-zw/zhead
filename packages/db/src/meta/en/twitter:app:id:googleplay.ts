import type { MetaSchema } from '../../metaFlat'

export const twitterAppIdGoogleplay: MetaSchema = {
  name: 'twitter:app:id:googleplay',
  key: 'name',
  color: '#B4C1D7',
  tags: 'social-share',
  description: 'Specifies the Google Play app ID associated with the website for use on Twitter.',
  tips: [
    {
      title: 'Use the Correct App ID',
      description: 'Ensure that the specified Google Play app ID is accurate and corresponds to the correct application on the Google Play Store.',
    },
  ],
  examples: [
    {
      value: 'com.example.app',
      description: 'Specifies the "twitter:app:id:googleplay" meta tag with the Google Play app ID "com.example.app". This allows Twitter to associate the website with the specified app on the Google Play Store.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/app-card',
  ],
}

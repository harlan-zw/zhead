import type { MetaSchema } from '../../metaFlat'

export const twitterAppNameGoogleplay: MetaSchema = {
  name: 'twitter:app:name:googleplay',
  key: 'name',
  color: '#913ad6',
  tags: 'social-share',
  type: 'twitter',
  description: 'Specifies the name of the Android app to associate with a webpage when shared on Twitter via Google Play.',
  tips: [
    {
      title: 'Choose a Descriptive Name',
      description: 'Select a clear and concise app name that accurately represents your Android app.',
    },
    {
      title: 'Consistency with App Store',
      description: 'Ensure that the name defined with the "twitter:app:name:googleplay" meta tag matches the title of your Android app on the Google Play Store.',
    },
  ],
  examples: [
    {
      value: 'My Awesome App',
      description: 'Specifies the name "My Awesome App" for the associated Android app when shared on Twitter via Google Play.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/app-card',
  ],
}

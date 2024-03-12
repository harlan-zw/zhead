import type { MetaSchema } from '../../metaFlat'

export const twitterAppNameIpad: MetaSchema = {
  name: 'twitter:app:name:ipad',
  key: 'name',
  color: '#FF3366',
  tags: 'social-share',
  description: 'Specifies the name of the iPad-optimized app that should be used to open the webpage when shared on Twitter.',
  tips: [
    {
      title: 'Use the official app name',
      description: 'Provide the accurate name of the iPad-optimized app to ensure a consistent experience for users when they open the shared webpage.',
    },
  ],
  examples: [
    {
      value: 'MyApp',
      description: 'Specifies the "twitter:app:name:ipad" meta tag with the value "MyApp", indicating that the webpage should be opened in the "MyApp" iPad-optimized app when shared on Twitter.',
    },
    {
      value: 'AnotherApp',
      description: 'Defines the "twitter:app:name:ipad" meta tag with the value "AnotherApp", specifying that the shared webpage should be opened in the "AnotherApp" app optimized for iPad.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-ipad-name',
  ],
}

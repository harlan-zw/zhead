import type { MetaSchema } from '../../metaFlat'

export const appleItunesApp: MetaSchema = {
  name: 'apple-itunes-app',
  key: 'name',
  color: '#FFB30',
  tags: 'other',
  description: 'Used to configure how iOS handles links to the App Store and enables various behaviors within a web app when it is launched from the home screen.',
  tips: [
    {
      title: 'Include Essential Values',
      description: 'Ensure that you include the required values such as "app-id" to specify the unique identifier of your iOS app.',
    },
    {
      title: 'Define Behavior',
      description: 'Use the "app-argument" parameter to set up custom behavior within your web app when it is opened from the home screen.',
    },
  ],
  examples: [
    {
      value: 'app-id=123456789',
      description: 'Specifies the "apple-itunes-app" meta tag with "app-id" parameter set to the unique identifier of an iOS app.',
    },
    {
      value: 'app-argument=custom-behavior',
      description: 'Defines the "apple-itunes-app" meta tag with "app-argument" parameter to enable custom behavior within a web app launched from the home screen.',
    },
  ],
  documentation: [
    'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/PromotingAppswithAppBanners/PromotingAppswithAppBanners.html',
  ],
}

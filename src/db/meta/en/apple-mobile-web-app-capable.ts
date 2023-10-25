import type { MetaSchema } from '../../metaFlat'

export const appleMobileWebAppCapable: MetaSchema = {
  name: 'apple-mobile-web-app-capable',
  key: 'name',
  color: '#FF8C00',
  tags: 'pwa',
  description: 'Specifies whether a web application can run in full-screen mode on iOS devices. When set to "yes", the web app can be launched from the home screen and appears without Safari browser UI.',
  tips: [
    {
      title: 'Set to "yes" for Progressive Web Apps (PWA)',
      description: 'If you are building a PWA and want to provide users with a native-like app experience on iOS, set the "apple-mobile-web-app-capable" meta tag to "yes".',
    },
    {
      title: 'Ensure Compatibility with Safari',
      description: 'Keep in mind that this meta tag is specific to iOS and will not have any effect on other operating systems or browsers.',
    },
  ],
  examples: [
    {
      value: 'yes',
      description: 'Enables the web app to run in full-screen mode on iOS devices, providing a native-like app experience for users.',
    },
    {
      value: 'no',
      description: 'Disables the full-screen mode for the web app on iOS devices, causing it to open in Safari with browser UI.',
    },
  ],
  documentation: [
    'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
  ],
}

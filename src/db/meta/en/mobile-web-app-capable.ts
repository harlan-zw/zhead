import type { MetaSchema } from '../../metaFlat'

export const mobileWebAppCapable: MetaSchema = {
  name: 'mobile-web-app-capable',
  key: 'name',
  description: 'Specifies whether a web application should run in full-screen mode as a standalone web application on mobile devices.',
  color: '#00C2FF',
  tags: 'pwa',
  tips: [
    {
      title: 'Use with PWA',
      description: 'This meta tag is commonly used in Progressive Web Applications (PWAs) to enhance user experience by allowing the web application to run in full-screen mode on mobile devices.',
    },
    {
      title: 'Keep Appropriate Fallback',
      description: 'Ensure that your web application has an appropriate fallback for devices that do not support full-screen mode. This can be achieved by using responsive design techniques to provide a consistent experience.',
    },
  ],
  examples: [
    {
      value: 'yes',
      description: 'Enables the web application to run in full-screen mode on supported mobile devices.',
    },
    {
      value: 'no',
      description: 'Disables full-screen mode for the web application on mobile devices.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/Manifest',
    'https://developers.google.com/web/fundamentals/web-app-manifest/',
  ],
}

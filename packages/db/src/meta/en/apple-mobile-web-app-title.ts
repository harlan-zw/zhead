import type { MetaSchema } from '../../metaFlat'

export const appleMobileWebAppTitle: MetaSchema = {
  name: 'apple-mobile-web-app-title',
  key: 'name',
  color: '#FFA500',
  tags: 'browser',
  description: 'Specifies the title of a web application when it is saved to the home screen on an Apple device.',
  tips: [
    {
      title: 'Keep it Short and Clear',
      description: 'Choose a concise and descriptive title for your web application to provide users with a clear understanding of its purpose.',
    },
  ],
  examples: [
    {
      value: 'My App',
      description: 'Sets the "apple-mobile-web-app-title" meta tag to display "My App" as the title of the web application on the home screen of an Apple device.',
    },
    {
      value: 'My Awesome App',
      description: 'Specifies the "apple-mobile-web-app-title" meta tag with the value "My Awesome App" to set the title of the web application on the home screen of an Apple device.',
    },
  ],
  documentation: [
    'https://developer.apple.com/documentation/webkit/delivering_app-like_user_experiences_on_the_web?language=javascript#add_the_web_app_manifest',
  ],
}

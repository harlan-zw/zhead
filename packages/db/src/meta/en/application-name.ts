import type { MetaSchema } from '../../metaFlat'

export const applicationName: MetaSchema = {
  name: 'application-name',
  key: 'name',
  color: '#FF96A8',
  tags: 'browser',
  description: 'Specifies the name of the web application or site.',
  tips: [
    {
      title: 'Keep it Short and Descriptive',
      description: 'Choose a concise and descriptive name for your web application or site that accurately reflects its purpose.',
    },
    {
      title: 'Avoid Keyword Stuffing',
      description: 'Don\'t use this meta tag as an opportunity to stuff in keywords. Instead, focus on providing a clear and meaningful name for your application or site.',
    },
  ],
  examples: [
    {
      value: 'My Cool App',
      description: 'Specifies the "application-name" meta tag with the name "My Cool App" for a web application or site.',
    },
    {
      value: 'Awesome Web',
      description: 'Defines the "application-name" meta tag with the name "Awesome Web" for a web application or site.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#attr-application-name',
    'https://developer.chrome.com/docs/extensions/mv2/manifest/manifest-intro/#name',
  ],
}

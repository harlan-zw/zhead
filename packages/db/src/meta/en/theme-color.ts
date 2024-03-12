import type { MetaSchema } from '../../metaFlat'

export const themeColor: MetaSchema = {
  name: 'theme-color',
  key: 'name',
  color: '#FF78A3',
  tags: 'other',
  description: 'Specifies the theme color for a web page. The theme color is used by some browsers to customize the address bar, toolbar, and other interface elements to match the page.',
  tips: [],
  examples: [
    {
      value: '#FF0000',
      description: 'Sets the "theme-color" meta tag to the color red (#FF0000), resulting in a red-themed interface in supporting browsers.',
    },
    {
      value: '#00FF00',
      description: 'Defines the "theme-color" meta tag with the color green (#00FF00), resulting in a green-themed interface in supporting browsers.',
    },
  ],
  documentation: [
    'https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color',
  ],
}

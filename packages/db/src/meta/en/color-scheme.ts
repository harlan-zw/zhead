import type { MetaSchema } from '../../metaFlat'

export const colorScheme: MetaSchema = {
  name: 'color-scheme',
  key: 'name',
  color: '#FFD700',
  tags: 'browser',
  description: 'Specifies the preferred color scheme for rendering a web page.',
  tips: [
    {
      title: 'Set a Preferred Color Scheme',
      description: 'Use the "color-scheme" meta tag to specify the preferred color scheme for your web page. This helps ensure a consistent user experience across different devices and operating systems.',
    },
    {
      title: 'Fallback to Default',
      description: 'If the preferred color scheme is not supported or not specified, the browser will use the default color scheme.',
    },
  ],
  examples: [
    {
      value: 'light',
      description: 'Specifies the "color-scheme" meta tag with a preferred color scheme of light. This is suitable for web pages with a light background.',
    },
    {
      value: 'dark',
      description: 'Specifies the "color-scheme" meta tag with a preferred color scheme of dark. This is suitable for web pages with a dark background.',
    },
    {
      value: 'light dark',
      description: 'Specifies the "color-scheme" meta tag with multiple preferred color schemes, indicating support for both light and dark backgrounds.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/color-scheme',
    'https://css-tricks.com/dark-modes-with-css/',
  ],
}

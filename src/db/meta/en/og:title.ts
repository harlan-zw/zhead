import type { MetaSchema } from '../../metaFlat'

export const ogTitle: MetaSchema = {
  name: 'og:title',
  key: 'property',
  color: '#FFC107',
  tags: 'social-share',
  description: 'The og:title meta tag is used to define the title of a webpage when it is shared on social media platforms that support the Open Graph Protocol. It is displayed as the title of the shared link in the feed or post.',
  tips: [
    {
      title: 'Make it Compelling',
      description: 'Craft an engaging and descriptive title that captures the attention of users and entices them to click on the shared link.',
    },
    {
      title: 'Keep it Concise',
      description: 'Although social media platforms may allow longer titles, it is recommended to keep the og:title tag within 60-70 characters for optimal visibility.',
    },
  ],
  examples: [
    {
      value: 'Example Article Title',
      description: 'Specifies the og:title meta tag with the title "Example Article Title" for a webpage when it is shared on social media.',
    },
    {
      value: 'Product Name - Sale Now!',
      description: 'Defines the og:title meta tag with the title "Product Name - Sale Now!" for a webpage when it is shared on social media platforms.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
  ],
}

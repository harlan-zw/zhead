import type { MetaSchema } from '../../metaFlat'

export const ogImageUrl: MetaSchema = {
  key: 'property',
  name: 'og:image:url',
  parameters: [
    { value: 'URL', description: 'The URL of the image to be displayed in social media shares.' },
  ],
  type: 'open-graph-protocol',
  color: '#FF8888',
  tags: 'social-share',
  description: 'Specifies the URL of an image to be displayed when the web page is shared on social media platforms using Open Graph Protocol.',
  tips: [
    {
      title: 'Use High-Quality Images',
      description: 'To maximize the impact of your shared links on social media, use high-quality images that are visually appealing and relevant to the content.',
    },
    {
      title: 'Optimize Image Size',
      description: 'Optimize the size of the image to ensure fast loading times on social media platforms.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/image.jpg',
      description: 'Specifies the "og:image:url" meta tag with the URL of an image to be displayed in social media shares.',
    },
  ],
  documentation: [
    'https://ogp.me/#structured',
    'https://developers.facebook.com/docs/sharing/webmasters#images',
  ],
}

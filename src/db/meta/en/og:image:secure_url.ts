import type { MetaSchema } from '../../metaFlat'

export const ogImageSecureUrl: MetaSchema = {
  name: 'og:image:secure_url',
  key: 'property',
  color: '#FF9966',
  tags: 'social-share',
  description: 'Specifies the URL of an image associated with a web page when shared on social media platforms that support the Open Graph Protocol.',
  tips: [
    {
      title: 'Use HTTPS',
      description: 'Always use HTTPS for the "og:image:secure_url" meta tag to ensure a secure connection when the image is shared on social media platforms.',
    },
    {
      title: 'Optimize Image Size',
      description: 'Make sure the image specified in the "og:image:secure_url" meta tag is optimized for web to improve loading speed and user experience.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/image.jpg',
      description: 'Specifies the "og:image:secure_url" meta tag with a secure URL for an image to be displayed when the web page is shared on social media platforms.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters#images',
  ],
}

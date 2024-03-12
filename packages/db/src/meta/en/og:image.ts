import type { MetaSchema } from '../../metaFlat'

export const ogImage: MetaSchema = {
  name: 'og:image',
  key: 'property',
  color: '#6194EB',
  tags: 'social-share',
  description: 'Specifies the image to be used when a webpage is shared on social media platforms like Facebook and Twitter.',
  tips: [
    {
      title: 'Use high-quality images',
      description: 'Make sure to use high-resolution images that are relevant to the content of the webpage. This will attract more attention and provide a better user experience when shared on social media.',
    },
    {
      title: 'Optimize image size',
      description: 'Optimize the image size to reduce the load time of the webpage. Use image compression techniques to maintain image quality while keeping the file size small.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/image.jpg',
      description: 'Specifies the "og:image" meta tag with the URL of the image to be used when the webpage is shared on social media platforms.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

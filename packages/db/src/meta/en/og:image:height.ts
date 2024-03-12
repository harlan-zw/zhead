import type { MetaSchema } from '../../metaFlat'

export const ogImageHeight: MetaSchema = {
  name: 'og:image:height',
  key: 'property',
  color: '#FFBF00',
  tags: ['social-share'],
  description: 'Specifies the height of the image to be displayed when a web page is shared on social media platforms using Open Graph protocol. It allows for better visualization and optimization of shared content.',
  tips: [
    {
      title: 'Provide High-Quality Images',
      description: 'Ensure that the og:image property value is set to an image with an appropriate height that is clear, visually appealing, and relevant to the shared content. High-resolution images are recommended for optimal display.',
    },
    {
      title: 'Consider Aspect Ratio',
      description: 'Maintain the aspect ratio of the image to avoid distortion when displayed on different social media platforms.',
    },
    {
      title: 'Use Recommended Minimum Heights',
      description: 'Follow the recommended minimum height guidelines provided by each social media platform to ensure your image is displayed correctly and attractively.',
    },
  ],
  examples: [
    {
      value: '630',
      description: 'Specifies the "og:image:height" meta tag with a value of 630 pixels, indicating the height of the shared image.',
    },
    {
      value: '1200',
      description: 'Specifies the "og:image:height" meta tag with a value of 1200 pixels, indicating the height of the shared image.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/images',
  ],
}

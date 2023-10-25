import type { MetaSchema } from '../../metaFlat'

export const twitterImageWidth: MetaSchema = {
  name: 'twitter:image:width',
  key: 'name',
  color: '#FF8C42',
  tags: 'social-share',
  description: 'Specifies the width of the image to be displayed when sharing a web page on Twitter.',
  tips: [
    {
      title: 'Optimize Image Size',
      description: 'Ensure that the image being shared has the specified width to enhance the visual appearance on Twitter.',
    },
  ],
  examples: [
    {
      value: '1200',
      description: 'Sets the "twitter:image:width" meta tag value to 1200 pixels, indicating the width of the image to be displayed in tweets.',
    },
    {
      value: '800',
      description: 'Specifies the width of the image to be 800 pixels when shared on Twitter using the "twitter:image:width" meta tag.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
    'https://dev.twitter.com/cards/types/summary-large-image',
  ],
}

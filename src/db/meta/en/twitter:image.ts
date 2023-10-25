import type { MetaSchema } from '../../metaFlat'

export const twitterImage: MetaSchema = {
  name: 'twitter:image',
  key: 'property',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Specifies the URL of the image to be displayed in tweets when a web page is shared on Twitter. The image should have a minimum size of 120x120px and a maximum size of 4096x4096px.',
  tips: [
    {
      title: 'Use High-Resolution Images',
      description: 'To ensure optimal image quality, use high-resolution images with an aspect ratio of 1:1 and a minimum size of 120x120px.',
    },
    {
      title: 'Consider Image Placement',
      description: 'Keep in mind that the shared image may be cropped on certain devices and platforms, so make sure the important elements are centered.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/img/twitter.jpg',
      description: 'Specifies the "twitter:image" meta tag with the URL of a JPEG image to be displayed in tweets when a web page is shared on Twitter.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image',
  ],
}

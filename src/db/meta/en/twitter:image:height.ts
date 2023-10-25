import type { MetaSchema } from '../../metaFlat'

export const twitterImageHeight: MetaSchema = {
  name: 'twitter:image:height',
  key: 'name',
  color: '#FFAC33',
  tags: 'social-share',
  description: 'Specifies the height of the image to be displayed when a web page is shared on Twitter. It is used by Twitter to properly display the image in the tweet.',
  tips: [
    {
      title: 'Use Optimal Image Height',
      description: 'Ensure that the height of the image matches the recommended dimensions provided by Twitter for optimal display.',
    },
    {
      title: 'Consider Aspect Ratio',
      description: 'Maintaining the aspect ratio of the image is important to avoid distortion or cropping when displayed on Twitter.',
    },
  ],
  examples: [
    {
      value: '1200',
      description: 'Sets the "twitter:image:height" meta tag to 1200 pixels, indicating the height of the image to be displayed on Twitter when the web page is shared.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

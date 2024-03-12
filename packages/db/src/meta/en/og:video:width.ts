import type { MetaSchema } from '../../metaFlat'

export const ogVideoWidth: MetaSchema = {
  name: 'og:video:width',
  key: 'property',
  color: '#FFA500',
  tags: 'social-share',
  description: 'Specifies the width of the video in pixels when the web page is shared on social media platforms that support the Open Graph Protocol.',
  tips: [
    {
      title: 'Use a Responsive Video Player',
      description: 'To ensure optimal video playback on various devices, use a responsive video player that automatically adjusts the video width based on the screen size.',
    },
    {
      title: 'Provide the Correct Video Width',
      description: 'Make sure to provide the actual width of the video in pixels. Incorrect values may result in distorted video playback on social media platforms.',
    },
  ],
  examples: [
    {
      value: '1280',
      description: 'Specifies the "og:video:width" meta tag with a width of 1280 pixels for a shared web page with a video.',
    },
    {
      value: '1920',
      description: 'Defines the "og:video:width" meta tag with a width of 1920 pixels for a shared web page with a video.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters#video',
  ],
}

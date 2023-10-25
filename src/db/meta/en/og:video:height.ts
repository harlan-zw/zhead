import type { MetaSchema } from '../../metaFlat'

export const ogVideoHeight: MetaSchema = {
  name: 'og:video:height',
  key: 'property',
  color: '#FF5733',
  type: 'open-graph-protocol',
  tags: 'social-share',
  description: 'Specifies the height of the video in pixels for Open Graph Protocol (OGP) meta tags. It is used to provide social media platforms with information about the video content and its display dimensions.',
  tips: [
    {
      title: 'Ensure Accurate Video Dimensions',
      description: 'Provide the correct height value to ensure that the video is displayed with the correct aspect ratio on social media platforms.',
    },
    {
      title: 'Use the Recommended Aspect Ratio',
      description: 'To maintain the video quality across different platforms, it is recommended to use standard aspect ratios like 16:9 or 4:3.',
    },
    {
      title: 'Consider Responsive Design',
      description: 'For responsive web pages, dynamically set the height value based on the device or screen size to optimize video presentation.',
    },
  ],
  examples: [
    {
      value: '720',
      description: 'Specifies the "og:video:height" meta tag with a height of 720 pixels for an Open Graph Protocol video, ensuring high-quality display on social media platforms.',
    },
    {
      value: '1080',
      description: 'Defines the "og:video:height" meta tag with a height of 1080 pixels for an Open Graph Protocol video, providing a Full HD experience on supported platforms.',
    },
  ],
  documentation: [
    'https://ogp.me/#structured',
    'https://developers.facebook.com/docs/sharing/webmasters#video',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const ogVideo: MetaSchema = {
  name: 'og:video',
  key: 'property',
  color: '#FFC300',
  tags: 'social-share',
  description: 'Specifies the URL of a video to be displayed when a web page is shared on social media platforms that support the Open Graph Protocol. The og:video meta tag is used to provide a thumbnail image, video dimensions, and other video-related metadata.',
  tips: [
    {
      title: 'Use a High-Quality Thumbnail Image',
      description: 'Choose a visually appealing and descriptive thumbnail image that accurately represents the video content.',
    },
    {
      title: 'Optimize Video Dimensions and Format',
      description: 'Ensure that the video dimensions and format (e.g., MP4) are supported by various social media platforms.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/video.mp4',
      description: 'Specifies the URL of the video file to be displayed on social media when the web page is shared.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/#video',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#video',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const ogVideoUrl: MetaSchema = {
  name: 'og:video:url',
  key: 'property',
  color: '#FF6D00',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies the URL of a video associated with a web page when shared on social media platforms.',
  tips: [
    {
      title: 'Use HTTPS',
      description: 'Ensure that the URL provided for the video is served over HTTPS for a secure connection.',
    },
    {
      title: 'Optimize for Different Platforms',
      description: 'Different social media platforms have different video requirements and aspect ratios. Make sure to optimize the video URL accordingly for better visibility and user experience across platforms.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/video.mp4',
      description: 'Specifies the "og:video:url" meta tag with the URL of a video file in MP4 format.',
    },
    {
      value: 'https://example.com/video.webm',
      description: 'Defines the "og:video:url" meta tag with the URL of a video file in WebM format.',
    },
  ],
  documentation: [
    'https://ogp.me/#type_video',
    'https://developers.facebook.com/docs/sharing/webmasters/#videos',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const ogVideoType: MetaSchema = {
  name: 'og:video:type',
  key: 'property',
  color: '#FFB30',
  tags: 'social-share',
  description: 'Indicates the type of video content when using Open Graph protocol. It helps social media platforms understand the format of the video for proper handling and display.',
  tips: [
    {
      title: 'Specify the Correct Video Type',
      description: 'Ensure that you accurately specify the video type using the "og:video:type" meta tag. This helps social media platforms choose the appropriate video player and settings when sharing your content.',
    },
  ],
  examples: [
    {
      value: 'video/mp4',
      description: 'Specifies the "og:video:type" meta tag with the value "video/mp4", indicating that the video is in MP4 format.',
    },
    {
      value: 'video/webm',
      description: 'Defines the "og:video:type" meta tag with the value "video/webm", indicating that the video is in WebM format.',
    },
  ],
  documentation: [
    'https://ogp.me/',
  ],
}

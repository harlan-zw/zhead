import type { MetaSchema } from '../../metaFlat'

export const ogVideoSecureUrl: MetaSchema = {
  name: 'og:video:secure_url',
  key: 'property',
  color: '#FF6F00',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies the URL of a secure video to be displayed when sharing a web page on social media platforms using the Open Graph Protocol. This meta tag is used in combination with the "og:video" meta tag.',
  tips: [
    {
      title: 'Use HTTPS Protocol',
      description: 'Ensure that the video URL provided is served over a secure HTTPS connection. Most modern browsers require secure connections for media playback, and social media platforms often prioritize secure content.',
    },
    {
      title: 'Optimize Video Size and Format',
      description: 'To provide the best user experience and reduce page loading times, compress and optimize the video file using appropriate codecs and formats. Consider using modern video formats like MP4 with H.264 encoding.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/videos/myvideo.mp4',
      description: 'Specifies the secure URL of a video file in MP4 format for sharing on social media platforms.',
    },
    {
      value: 'https://example.com/videos/myvideo.webm',
      description: 'Defines the secure URL of a video file in WebM format for sharing on social media platforms.',
    },
  ],
  documentation: [
    'https://ogp.me/#video',
  ],
}

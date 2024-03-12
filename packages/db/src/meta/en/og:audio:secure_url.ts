import type { MetaSchema } from '../../metaFlat'

export const ogAudioSecureUrl: MetaSchema = {
  name: 'og:audio:secure_url',
  key: 'property',
  color: '#FF8C00',
  tags: ['social-share', 'seo', 'other'],
  description: 'Specifies the secure URL of an audio file to be associated with the web page when shared on social media platforms that support the Open Graph Protocol.',
  tips: [
    {
      title: 'Use HTTPS',
      description: 'Ensure that the URL provided is served over HTTPS to maintain data security and compatibility with platforms that enforce secure connections.',
    },
    {
      title: 'Provide High-Quality Audio',
      description: 'Use high-quality audio files to enhance the user experience when the web page is shared on social media platforms.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/audio.mp3',
      description: 'Specifies the secure URL of an MP3 audio file',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
  ],
}

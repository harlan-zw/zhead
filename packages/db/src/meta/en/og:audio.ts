import type { MetaSchema } from '../../metaFlat'

export const ogAudio: MetaSchema = {
  name: 'og:audio',
  key: 'property',
  color: '#FF6384',
  tags: 'social-share',
  description: 'Specifies the URL to an audio file to be associated with the webpage when shared on social media platforms that support the Open Graph protocol.',
  tips: [
    {
      title: 'Use High-Quality Audio',
      description: 'To provide the best user experience, use high-quality audio files that are optimized for web playback.',
    },
    {
      title: 'Include Audio Metadata',
      description: 'When specifying the URL to the audio file, also include relevant metadata, such as the title, artist, and album, to enhance the shareability and discoverability of the audio content.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/audio.mp3',
      description: 'Specifies the "og:audio" meta tag with the URL to an MP3 audio file for the associated webpage.',
    },
    {
      value: 'https://example.com/audio.wav',
      description: 'Defines the "og:audio" meta tag with the URL to a WAV audio file for the associated webpage.',
    },
  ],
  documentation: [
    'https://ogp.me/#type_music.song',
    'https://developers.facebook.com/docs/marketing-apis/open-graph',
  ],
}

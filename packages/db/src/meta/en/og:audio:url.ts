import type { MetaSchema } from '../../metaFlat'

export const ogAudioUrl: MetaSchema = {
  name: 'og:audio:url',
  key: 'property',
  tags: 'social-share',
  type: 'open-graph-protocol',
  color: '#AED581',
  description: 'Specifies the URL of an audio file to be associated with a webpage when shared on social media platforms using Open Graph Protocol. This meta tag is used to provide a preview of the audio content and enhance the user experience when sharing the webpage.',
  tips: [
    {
      title: 'Provide High-Quality Audio',
      description: 'Ensure that the specified audio URL leads to a high-quality audio file to provide the best possible listening experience for users when sharing the webpage on social media platforms.',
    },
    {
      title: 'Use Supported Audio Formats',
      description: 'Check the supported audio formats for the target social media platforms to ensure compatibility and proper rendering of the audio file preview.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/audio/podcast.mp3',
      description: 'Specifies the "og:audio:url" meta tag with the URL of a podcast audio file to be associated with the shared webpage.',
    },
    {
      value: 'https://example.com/audio/soundtrack.ogg',
      description: 'Defines the "og:audio:url" meta tag with the URL of an Ogg Vorbis audio file to be associated with the shared webpage.',
    },
  ],
  documentation: [
    'https://ogp.me/',
  ],
}

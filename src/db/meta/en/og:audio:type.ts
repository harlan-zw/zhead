import type { MetaSchema } from '../../metaFlat'

export const ogAudioType: MetaSchema = {
  key: 'property',
  name: 'og:audio:type',
  color: '#FFB30',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies the MIME type of the audio content when sharing a web page on social media platforms using Open Graph protocol.',
  tips: [
    {
      title: 'Provide Accurate MIME Type',
      description: 'Ensure that the MIME type specified for the "og:audio:type" meta tag accurately reflects the format of the audio content being shared. This helps social media platforms determine how to handle the audio file.',
    },
  ],
  examples: [
    {
      value: 'audio/mpeg',
      description: 'Specifies the "og:audio:type" meta tag with the MIME type "audio/mpeg" for an MP3 audio file.',
    },
    {
      value: 'audio/wav',
      description: 'Specifies the "og:audio:type" meta tag with the MIME type "audio/wav" for a WAV audio file.',
    },
  ],
  documentation: [
    'https://ogp.me/',
  ],
}

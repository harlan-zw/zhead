import type { MetaSchema } from '../../metaFlat'

export const ogVideoAlt: MetaSchema = {
  name: 'og:video:alt',
  key: 'property',
  color: '#EF7D0B',
  tags: 'social-share',
  description: 'Specifies an alternative text for the video displayed in a social media post when the video cannot be played or is not available. This meta tag is used in conjunction with the Open Graph Protocol (OGP) to enhance the visual representation of shared content.',
  tips: [
    {
      title: 'Use descriptive alt text',
      description: 'Provide a concise and descriptive alt text that accurately represents the video content. This helps visually impaired users understand the context of the video.',
    },
    {
      title: 'Keep it brief',
      description: 'Limit the alt text to a few words or a short phrase to ensure that it is easily readable and does not clutter the social media post.',
    },
  ],
  examples: [
    {
      value: 'Explainer video for product XYZ',
      description: 'Specifies the "og:video:alt" meta tag with an alternative text describing the video as an explainer video for product XYZ. This alt text will be displayed when the video cannot be played or is not available.',
    },
    {
      value: 'Funny cat compilation',
      description: 'Defines the "og:video:alt" meta tag with an alternative text indicating that the video is a compilation of funny cat videos. This alt text helps users understand the content of the video without playing it.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/#video',
  ],
}

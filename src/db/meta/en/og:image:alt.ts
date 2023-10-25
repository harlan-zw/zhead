import type { MetaSchema } from '../../metaFlat'

export const ogImageAlt: MetaSchema = {
  name: 'og:image:alt',
  key: 'property',
  color: '#FFC107',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies alternative text for the image specified in the "og:image" property. This text is used by social media platforms when the image cannot be displayed.',
  tips: [
    {
      title: 'Be Descriptive and Concise',
      description: 'Use descriptive and concise alternative text that accurately represents the content of the image. This text should be helpful and meaningful for visually impaired users.',
    },
    {
      title: 'Include Relevant Keywords',
      description: 'Consider including relevant keywords in the alternative text, but avoid keyword stuffing or using misleading descriptions. The alternative text should accurately describe the image.',
    },
  ],
  examples: [
    {
      value: 'An illustration of a couple hiking in the mountains',
      description: 'Specifies alternative text for an image of a couple hiking in the mountains.',
    },
    {
      value: 'A close-up of a delicious pizza',
      description: 'Sets the alternative text for an image of a mouth-watering pizza.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
  ],
}

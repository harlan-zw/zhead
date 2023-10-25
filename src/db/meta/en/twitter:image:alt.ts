import type { MetaSchema } from '../../metaFlat'

export const twitterImageAlt: MetaSchema = {
  name: 'twitter:image:alt',
  key: 'name',
  color: '#FFDD85',
  tags: 'social-share',
  description: 'Specifies the alternative text for an image when shared on Twitter. Alternative text provides a text description of the image for users who can\'t see it, such as those using screen readers or with slow internet connections.',
  tips: [
    {
      title: 'Be Descriptive',
      description: 'Ensure that the alternative text accurately describes the content and purpose of the image. Use relevant keywords but avoid keyword stuffing.',
    },
    {
      title: 'Keep it Concise',
      description: 'Alternative text should be concise and to the point, while still providing enough context for users to understand the image.',
    },
    {
      title: 'Avoid Repetition',
      description: 'If an image is used multiple times within a page or across multiple pages, ensure that the alternative text remains unique and descriptive for each instance.',
    },
    {
      title: 'Use Plain Language',
      description: 'Avoid using jargon or technical language in the alternative text. Use plain and simple language that is easily understandable.',
    },
  ],
  examples: [
    {
      value: 'A person holding a smartphone',
      description: 'Specifies the "twitter:image:alt" meta tag with alternative text describing a person holding a smartphone, which helps visually impaired users understand the image content.',
    },
    {
      value: 'A red bicycle on a sunny day',
      description: 'Defines the "twitter:image:alt" meta tag with alternative text describing a red bicycle on a sunny day, providing context for users who can\'t see the image.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

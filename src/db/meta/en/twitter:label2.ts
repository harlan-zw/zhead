import type { MetaSchema } from '../../metaFlat'

export const twitterLabel2: MetaSchema = {
  name: 'twitter:label2',
  key: 'property',
  description: 'Custom label for the second value of a Twitter card.',
  tags: 'social-share',
  color: '#FFA500',
  examples: [
    {
      value: 'Year',
      description: 'Specifies a custom label for the year value in a Twitter card.',
    },
    {
      value: 'Category',
      description: 'Defines a custom label for the category value in a Twitter card.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

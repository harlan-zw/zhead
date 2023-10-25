import type { MetaSchema } from '../../metaFlat'

export const twitterCard: MetaSchema = {
  name: 'twitter:card',
  key: 'name',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Specifies the card type to be used when a link to a web page is shared on Twitter. The card type determines how the shared content appears on Twitter.',
  tips: [
    {
      title: 'Choose the Appropriate Card Type',
      description: 'Select the most suitable card type based on the content you want to display on Twitter. The available card types include "summary", "summary_large_image", "app", "player", and "gallery". Refer to the Twitter documentation for guidelines on using each card type.',
    },
    {
      title: 'Add Relevant Meta Tags',
      description: 'Include other relevant meta tags such as "twitter:title", "twitter:description", and "twitter:image" to provide additional information and optimize the appearance of the shared content on Twitter.',
    },
  ],
  examples: [
    {
      value: 'summary',
      description: 'Specifies the "twitter:card" meta tag with the "summary" card type, which displays a small thumbnail, a title, and a description of the shared content on Twitter.',
    },
    {
      value: 'summary_large_image',
      description: 'Defines the "twitter:card" meta tag with the "summary_large_image" card type, which displays a large image in addition to the title and description of the shared content on Twitter.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
  ],
}

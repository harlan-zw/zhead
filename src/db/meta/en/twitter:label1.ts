import type { MetaSchema } from '../../metaFlat'

export const twitterLabel1: MetaSchema = {
  name: 'twitter:label1',
  key: 'name',
  type: 'twitter',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Used to define the label for the first data field in a Twitter card. Twitter cards allow you to attach rich media experiences to tweets shared from your website.',
  tips: [
    {
      title: 'Use Clear and Concise Labels',
      description: 'Choose a label that accurately describes the data field and provides useful information to users.',
    },
    {
      title: 'Keep it Short',
      description: 'Keep the label brief to ensure it fits within the limited space available in a tweet.',
    },
  ],
  examples: [
    {
      value: 'Author',
      description: 'Specifies the "twitter:label1" meta tag with the label "Author" for the first data field in a Twitter card.',
    },
    {
      value: 'Location',
      description: 'Defines the "twitter:label1" meta tag with the label "Location" for the first data field in a Twitter card.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
  ],
}

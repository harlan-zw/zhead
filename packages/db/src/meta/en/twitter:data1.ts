import type { MetaSchema } from '../../metaFlat'

export const twitterData1: MetaSchema = {
  name: 'twitter:data1',
  key: 'name',
  color: '#00ACEE',
  tags: 'social-share',
  description: 'A data field used by Twitter Cards to display additional information in a tweet containing a URL to a web page. The "twitter:data1" meta tag allows you to specify the value for the data field, which can be used to provide context or important details about the shared content.',
  tips: [
    {
      title: 'Choose relevant and compelling data',
      description: 'Select a value for "twitter:data1" that is relevant to the content being shared and will catch the attention of users.',
    },
    {
      title: 'Use appropriate data format',
      description: 'Ensure that the value for "twitter:data1" is formatted correctly according to the expected data type, such as numbers, dates, or custom data formats.',
    },
  ],
  examples: [
    {
      value: '5.99',
      description: 'Specifies the "twitter:data1" meta tag with the value of "5.99" to display a price or monetary value in a tweet.',
    },
    {
      value: 'January 1, 2022',
      description: 'Defines the "twitter:data1" meta tag with the value of "January 1, 2022" to display a specific date in a tweet.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

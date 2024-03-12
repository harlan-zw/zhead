import type { MetaSchema } from '../../metaFlat'

export const articleExpirationTime: MetaSchema = {
  name: 'article:expiration_time',
  key: 'property',
  color: '#FF69B4',
  tags: 'social-share',
  description: 'Specifies the date and time after which the article is no longer considered relevant or up-to-date.',
  tips: [
    {
      title: 'Format the Date and Time',
      description: 'Use the ISO 8601 format (YYYY-MM-DDThh:mm:ssZ) to specify the expiration date and time.',
    },
    {
      title: 'Consider Time Zones',
      description: 'Make sure to specify the time zone when defining the expiration time to avoid confusion.',
    },
  ],
  examples: [
    {
      value: '2022-12-31T23:59:59Z',
      description: 'Sets the "article:expiration_time" meta tag to December 31, 2022, at 23:59:59 UTC.',
    },
    {
      value: '2023-06-15T12:00:00-07:00',
      description: 'Defines the "article:expiration_time" meta tag to June 15, 2023, at 12:00:00 in the GMT-7 time zone.',
    },
  ],
  documentation: [
    'https://ogp.me/#structured',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image',
  ],
}

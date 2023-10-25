import type { MetaSchema } from '../../metaFlat'

export const articlePublishedTime: MetaSchema = {
  name: 'article:published_time',
  key: 'property',
  color: '#FF8C00',
  tags: ['seo', 'social-share'],
  description: 'Specifies the date and time when an article was published.',
  tips: [
    {
      title: 'Use ISO 8601 Format',
      description: 'When specifying the value for the article:published_time meta tag, use the ISO 8601 date and time format (YYYY-MM-DDTHH:MM:SSZ). This format ensures compatibility and consistency across different platforms and systems.',
    },
    {
      title: 'Keep the Published Time Accurate',
      description: 'Ensure that the value provided for the article:published_time meta tag accurately reflects the actual date and time when the article was published. This information is important for search engines and social media platforms to display and order content correctly.',
    },
  ],
  examples: [
    {
      value: '2022-01-15T10:30:00Z',
      description: 'Specifies the "article:published_time" meta tag with the value set to January 15, 2022, at 10:30:00 AM UTC.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary',
  ],
}

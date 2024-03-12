import type { MetaSchema } from '../../metaFlat'

export const twitterTitle: MetaSchema = {
  name: 'twitter:title',
  key: 'name',
  color: '#33CCFF',
  tags: 'social-share',
  description: 'Specifies the title of a webpage when shared on Twitter. It is used to provide a concise and compelling title that grabs users\' attention and encourages engagement.',
  tips: [
    {
      title: 'Keep it Short',
      description: 'Twitter has a character limit for tweet content, so ensure that the title is concise and compelling within that limit.',
    },
    {
      title: 'Include Keywords',
      description: 'Including relevant keywords in the title can help improve visibility and search engine optimization on Twitter.',
    },
    {
      title: 'Use Dynamic Titles',
      description: 'For better engagement, consider using dynamic titles that change according to the content being shared, rather than static titles.',
    },
  ],
  examples: [
    {
      value: 'My Webpage Title',
      description: 'Specifies the "twitter:title" meta tag with a static title for a webpage shared on Twitter.',
    },
    {
      value: '{pageTitle} - {siteName}',
      description: 'Defines the "twitter:title" meta tag with a dynamic title for a webpage shared on Twitter, including the page title and site name variables.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

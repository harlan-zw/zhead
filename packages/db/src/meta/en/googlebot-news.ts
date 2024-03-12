import type { MetaSchema } from '../../metaFlat'

export const googlebotNews: MetaSchema = {
  name: 'googlebot-news',
  key: 'name',
  color: '#FFAB00',
  tags: 'seo',
  description: 'Used to control the behavior of Google News crawler on a web page. It allows developers to specify directives that influence indexing, following links, and other interactions specifically for Google News.',
  tips: [
    {
      title: 'Follow Google News Guidelines',
      description: 'Refer to Google News Publisher Center guidelines to ensure that your web page meets the requirements and best practices for Google News indexing and visibility.',
    },
    {
      title: 'Optimize for Search Visibility',
      description: 'Use "news_keywords" meta tag in conjunction with "googlebot-news" to provide relevant keywords for better search visibility within Google News search results.',
    },
  ],
  examples: [
    {
      value: 'noindex',
      description: 'Instructs Google News crawler not to index the page within Google News.',
    },
    {
      value: 'max-snippet:50, max-image-preview:large',
      description: 'Sets the maximum length of the page snippet to 50 characters and allows Google to display larger image previews in search results for the page.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/advanced/robots/robots_meta_tag_news',
  ],
}

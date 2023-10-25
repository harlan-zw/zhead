import type { MetaSchema } from '../../metaFlat'

export const google: MetaSchema = {
  name: 'google',
  key: 'name',
  color: '#FF6400',
  tags: 'seo',
  description: 'Used to provide specific instructions to Google search engine for indexing and displaying web pages in search results.',
  tips: [
    {
      title: 'Use with Other Meta Tags',
      description: 'Combine the "google" meta tag with other relevant meta tags, such as "robots" and "description", to optimize your site for Google search.',
    },
    {
      title: 'Avoid Over-Optimization',
      description: 'Avoid excessive use of targeted keywords or other manipulative techniques to optimize your site for Google search, as it may lead to penalties.',
    },
  ],
  examples: [
    {
      value: 'nositelinkssearchbox',
      description: 'Instructs Google not to display a sitelinks search box for the web page in search results.',
    },
    {
      value: 'notranslate',
      description: 'Prevents Google from offering translation services for the web page in search results.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/advanced/crawling/googlebot#google-mobile-friendly-search-results',
    'https://developers.google.com/search/reference/robots_meta_tag#google-specific-instructions',
  ],
}

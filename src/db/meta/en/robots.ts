import type { MetaSchema } from '../../metaFlat'

export const robots: MetaSchema = {
  name: 'robots',
  key: 'name',
  color: '#FF5733',
  tags: 'seo',
  description: 'Used to control the behavior of search engine crawlers on a web page. It allows developers to specify directives that influence indexing, following links, and other interactions.',
  tips: [
    {
      title: 'Use Directives Wisely',
      description: 'Carefully choose and use directives, such as "noindex" and "nofollow," to guide search engine behavior according to your site\'s requirements.',
    },
    {
      title: 'Prevent Duplicate Content',
      description: 'Using "canonical" and "noindex" directives can help prevent duplicate content issues, improving your site\'s SEO.',
    },
    {
      title: 'Use "noarchive" to Prevent Cached Copies',
      description: 'Including "noarchive" in the "robots" meta tag prevents search engines from displaying cached copies of the page in their search results.',
    },
  ],
  examples: [
    {
      value: 'index, follow',
      description: 'Allows search engines to index the page and follow links.',
    },
    {
      value: 'noindex, nofollow',
      description: 'Instructs search engines not to index the page and not to follow any links on the page.',
    },
  ],
  parameters: [
    { value: 'index', description: 'Allows search engines to index the page.' },
    { value: 'noindex', description: 'Instructs search engines not to index the page.' },
    { value: 'follow', description: 'Allows search engines to follow links on the page.' },
    { value: 'nofollow', description: 'Instructs search engines not to follow links on the page.' },
    { value: 'noarchive', description: 'Prevents search engines from displaying cached copies of the page.' },
  ],
  documentation: [
    'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    'https://moz.com/learn/seo/robotstxt',
  ],
}

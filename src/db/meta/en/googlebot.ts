import type { MetaSchema } from '../../metaFlat'

export const googlebot: MetaSchema = {
  name: 'googlebot',
  key: 'name',
  description: 'Used to provide specific instructions to Googlebot, the web crawler used by Google for indexing and ranking web pages.',
  examples: [
    {
      value: 'noimageindex',
      description: 'Instructs Googlebot not to index images on the page.',
    },
    {
      value: 'nosnippet',
      description: 'Prevents Google from generating a snippet for the page in search results.',
    },
  ],
  parameters: [
    { value: 'noimageindex', description: 'Instructs Googlebot not to index images on the page.' },
    { value: 'nosnippet', description: 'Prevents Google from generating a snippet for the page in search results.' },
    { value: 'nofollow', description: 'Instructs Googlebot not to follow links on the page.' },
    { value: 'noindex', description: 'Instructs Googlebot not to index the page.' },
    { value: 'max-snippet:[number]', description: 'Specifies the maximum length of a snippet for the page in search results.' },
  ],
  tips: [
    {
      title: 'Customize Googlebot Behavior',
      description: 'Use Googlebot directives to customize how Google crawls and indexes your web pages to meet your specific requirements.',
    },
    {
      title: 'Improve Page Visibility',
      description: 'Using directives like "noindex" and "nofollow" can help improve the visibility and search ranking of your pages.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/reference/robots_meta_tag',
    'https://developers.google.com/search/docs/advanced/crawling/control-crawl-index',
  ],
  importance: 'recommended',
  tags: 'seo',
}

import type { MetaSchema } from '../../metaFlat'

export const ogDescription: MetaSchema = {
  name: 'og:description',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#FF9800',
  tags: ['social-share'],
  description: 'The "og:description" meta tag is used in Open Graph protocol to provide a brief summary or description of the content being shared. It is often used by social media platforms when a webpage is shared, allowing users to quickly understand the context or message of the shared content.',
  tips: [
    {
      title: 'Keep it concise',
      description: 'The description should be short and concise, typically between 100-300 characters. This allows for better readability on social media platforms and encourages users to click on the shared link.',
    },
    {
      title: 'Use relevant keywords',
      description: 'Include relevant keywords in the description to improve search engine optimization (SEO) and ensure that the content is properly indexed by search engines.',
    },
    {
      title: 'Avoid duplication',
      description: 'Each webpage should have a unique "og:description" meta tag. Avoid using the same description for multiple pages, as it can negatively impact SEO and user experience.',
    },
  ],
  examples: [
    {
      value: 'Discover delicious recipes for homemade pizza!',
      description: 'Specifies the "og:description" meta tag with a description for a website that shares homemade pizza recipes.',
    },
    {
      value: 'Learn how to play guitar with easy-to-follow tutorials.',
      description: 'Defines the "og:description" meta tag with a brief summary for a website offering guitar tutorial videos.',
    },
  ],
  documentation: [
    'https://ogp.me/#metadata',
    'https://developers.facebook.com/docs/sharing/webmasters/',
  ],
}

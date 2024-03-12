import type { MetaSchema } from '../../metaFlat'

export const ogType: MetaSchema = {
  name: 'og:type',
  key: 'property',
  color: '#FF6700',
  tags: 'social-share',
  description: 'Specifies the type of object or content being shared on social media platforms using Open Graph Protocol meta tags.',
  tips: [
    {
      title: 'Choose the right type',
      description: 'Select the appropriate type that accurately represents the content being shared, such as "website", "article", or "video".',
    },
    {
      title: 'Use article type for blog posts',
      description: 'If you are sharing a blog post or an article, set the "og:type" meta tag value to "article" to provide more context to social media platforms.',
    },
  ],
  examples: [
    {
      value: 'website',
      description: 'Specifies the "og:type" meta tag with the value "website" for a general webpage or website.',
    },
    {
      value: 'article',
      description: 'Defines the "og:type" meta tag with the value "article" for a blog post or article.',
    },
  ],
  documentation: [
    'https://ogp.me/#types',
    'https://developers.facebook.com/docs/sharing/webmasters#markup',
  ],
}

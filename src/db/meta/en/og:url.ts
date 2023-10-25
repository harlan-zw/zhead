import type { MetaSchema } from '../../metaFlat'

export const ogUrl: MetaSchema = {
  name: 'og:url',
  key: 'property',
  color: '#FFC107',
  tags: 'social-share',
  description: 'Specifies the canonical URL for the Open Graph object. It provides a permanent link to the resource being shared and helps ensure that the correct content is displayed when the URL is shared on social media platforms.',
  tips: [
    {
      title: 'Use Absolute URLs',
      description: 'Always use absolute URLs for the "og:url" meta tag to ensure accurate sharing and avoid potential issues with redirection.',
    },
    {
      title: 'Include UTM Parameters',
      description: 'Consider adding UTM parameters to the "og:url" URL to track traffic sources and better analyze the performance of your shared content.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/blog/article',
      description: 'Specifies the "og:url" meta tag with an absolute URL pointing to the blog article to ensure correct sharing on social media platforms.',
    },
    {
      value: 'https://example.com/product/123?utm_source=facebook&utm_medium=social',
      description: 'Defines the "og:url" meta tag with an absolute URL including UTM parameters to track traffic from a specific social media platform.',
    },
  ],
  documentation: [
    'https://ogp.me/#url',
    'https://developers.facebook.com/docs/sharing/webmasters#markup',
  ],
}

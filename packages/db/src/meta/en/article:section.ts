import type { MetaSchema } from '../../metaFlat'

export const articleSection: MetaSchema = {
  name: 'article:section',
  key: 'property',
  color: '#FF9900',
  tags: 'seo',
  description: 'Specifies the section or category of an article for search engines and social media platforms. It helps organize and classify content, improving its visibility in relevant search results.',
  tips: [
    {
      title: 'Choose Relevant Sections',
      description: 'Select appropriate and relevant sections or categories for your articles to help search engines and users understand the context of your content.',
    },
    {
      title: 'Be Specific',
      description: 'Use specific section names that accurately reflect the topic or theme of your articles. Avoid generic or vague section names that may not provide meaningful information.',
    },
    {
      title: 'Consistency',
      description: 'Ensure consistency in the usage of "article:section" meta tag across your website. Use the same section names for articles within the same category or topic.',
    },
  ],
  examples: [
    {
      value: 'Technology',
      description: 'Specifies the "article:section" meta tag with the value "Technology" to indicate that the article belongs to the Technology section of the website.',
    },
    {
      value: 'Sports',
      description: 'Defines the "article:section" meta tag with the value "Sports" to categorize the article under the Sports section.',
    },
  ],
  documentation: [
    'https://moz.com/learn/seo/meta-description',
    'https://developers.facebook.com/docs/sharing/webmasters#markup',
    'https://ogp.me/',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

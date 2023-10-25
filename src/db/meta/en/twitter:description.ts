import type { MetaSchema } from '../../metaFlat'

export const twitterDescription: MetaSchema = {
  name: 'description',
  key: 'property',
  type: 'twitter',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Provides a concise description of the content being shared on Twitter. This meta tag is used by Twitter when a webpage URL is shared on the platform.',
  tips: [
    {
      title: 'Use Concise and Compelling Descriptions',
      description: 'Make sure your Twitter description accurately represents the content and entices users to click through to your webpage.',
    },
    {
      title: 'Optimize for Twitter Card Display',
      description: 'To enhance the appearance of shared links on Twitter, consider implementing Twitter Cards, which provide a rich media preview of your webpage.',
    },
  ],
  examples: [
    {
      value: 'Check out this amazing article on web development!',
      description: 'Specifies the "twitter:description" meta tag with a brief description of the webpage content being shared on Twitter.',
    },
    {
      value: 'Discover the latest trends in design and development.',
      description: 'Sets the "twitter:description" meta tag with a concise description of the webpage content to be displayed on Twitter.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

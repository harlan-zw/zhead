import type { MetaSchema } from '../../metaFlat'

export const twitterSite: MetaSchema = {
  key: 'name',
  name: 'twitter:site',
  color: '#1DA1F2',
  tags: 'social-share',
  type: 'twitter',
  description: 'Specifies the Twitter username of the website or author associated with a webpage.',
  tips: [
    {
      title: 'Use Your Twitter Username',
      description: 'Provide your Twitter username in the "content" attribute to associate your website or content with your Twitter account.',
    },
    {
      title: 'Use @mention Instead of Full URL',
      description: 'Instead of using the full URL, use the Twitter handle (@mention) to provide a more concise and easily recognizable association.',
    },
    {
      title: 'Use Consistent Twitter Username',
      description: 'Ensure that the Twitter username used in the "twitter:site" meta tag matches the actual Twitter handle of the website or author.',
    },
  ],
  examples: [
    {
      value: '@exampleUsername',
      description: 'Specifies the Twitter username for a website or author as "@exampleUsername".',
    },
    {
      value: '@moz',
      description: 'Associates the webpage with the Twitter account of Moz (a popular SEO software company) by specifying the Twitter handle as "@moz".',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
    'https://moz.com/learn/seo/meta-tag',
  ],
}

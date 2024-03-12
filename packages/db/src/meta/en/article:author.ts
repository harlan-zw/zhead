import type { MetaSchema } from '../../metaFlat'

export const articleAuthor: MetaSchema = {
  name: 'article:author',
  key: 'property',
  color: '#1890FF',
  tags: 'social-share',
  description: 'Specifies the author of an article or a blog post for social media sharing. This meta tag is used by platforms like Facebook and Twitter to display the author of the article when the content is shared on their platforms.',
  tips: [
    {
      title: 'Include Author Name',
      description: 'Make sure to include the full name of the author in the value of the meta tag to ensure proper attribution.',
    },
    {
      title: 'Use Personal Profile URL',
      description: 'Consider including the URL of the author\'s personal profile page or their website in the value of the meta tag to provide a direct link to their work.',
    },
  ],
  examples: [
    {
      value: 'John Doe',
      description: 'Specifies the "article:author" meta tag with the author\'s name to indicate that John Doe is the author of the article or blog post.',
    },
    {
      value: 'John Doe, https://johndoe.com',
      description: 'Specifies the "article:author" meta tag with the author\'s name and their personal website URL to provide attribution and a direct link to their work.',
    },
  ],
  documentation: [
    'https://developers.facebook.com/docs/sharing/webmasters#markup',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

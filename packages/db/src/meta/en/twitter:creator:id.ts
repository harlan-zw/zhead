import type { MetaSchema } from '../../metaFlat'

export const twitterCreatorId: MetaSchema = {
  name: 'twitter:creator:id',
  key: 'name',
  color: '#85c1e9',
  tags: 'social-share',
  description: 'Specifies the Twitter user ID of the content creator or author. This meta tag helps Twitter display the correct Twitter card when the content is shared on the platform.',
  tips: [
    {
      title: 'Use numeric user ID',
      description: 'Make sure to use the numeric ID of the Twitter user instead of their username. This ensures accurate identification of the content creator.',
    },
  ],
  examples: [
    {
      value: '@JohnDoe',
      description: 'Incorrect usage: Specifies the Twitter username "@JohnDoe" as the content creator ID. This may lead to incorrect display of the Twitter card.',
    },
    {
      value: '1234567890',
      description: 'Correct usage: Specifies the numeric user ID "1234567890" as the content creator ID. This ensures accurate identification of the content creator.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

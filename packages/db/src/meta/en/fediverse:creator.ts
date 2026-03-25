import type { MetaSchema } from '../../metaFlat'

export const fediverseCreator: MetaSchema = {
  name: 'fediverse:creator',
  key: 'name',
  color: '#6364FF',
  tags: 'social-share',
  description: 'Indicates the Fediverse account of the content creator or author for a webpage. Used by Mastodon and other Fediverse platforms to attribute content to creators.',
  tips: [
    {
      title: 'Use a Full Fediverse Handle',
      description: 'Include the full handle with the "@" symbol and the instance domain, e.g. "@user@mastodon.social".',
    },
    {
      title: 'Pair with rel="me" Link',
      description: 'For verification, also add a <link rel="me" href="https://mastodon.social/@user" /> tag pointing to the Fediverse profile.',
    },
  ],
  examples: [
    {
      value: '@gargron@mastodon.social',
      description: 'Specifies the Fediverse creator as the user @gargron on mastodon.social.',
    },
  ],
  documentation: [
    'https://blog.joinmastodon.org/2024/07/highlighting-journalism-on-mastodon/',
  ],
}
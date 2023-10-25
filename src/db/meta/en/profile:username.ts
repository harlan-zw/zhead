import type { MetaSchema } from '../../metaFlat'

export const profileUsername: MetaSchema = {
  name: 'profile:username',
  key: 'name',
  color: '#FF8C00',
  tags: 'social-share',
  description: 'Specifies the username or handle associated with a social media profile.',
  tips: [
    {
      title: 'Include Social Media Profile',
      description: 'Use the "profile:username" meta tag to specify the username or handle associated with a social media profile. This can enhance the social sharing experience and improve link previews on platforms like Facebook and Twitter.',
    },
    {
      title: 'Consistent Format',
      description: 'Ensure that the username or handle used in the "profile:username" meta tag matches the exact username or handle associated with the social media profile. Inconsistent formats may result in incorrect link previews.',
    },
  ],
  examples: [
    {
      value: '@myusername',
      description: 'Specifies the "profile:username" meta tag with the username or handle "@myusername" for a social media profile.',
    },
    {
      value: 'myusername',
      description: 'Defines the "profile:username" meta tag with the username or handle "myusername" for a social media profile.',
    },
  ],
  documentation: [
    'https://developers.facebook.com/docs/sharing/webmasters/#markup-multiple-users',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

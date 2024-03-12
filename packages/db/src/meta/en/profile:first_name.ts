import type { MetaSchema } from '../../metaFlat'

export const profileFirstName: MetaSchema = {
  name: 'profile:first_name',
  key: 'property',
  color: '#FFC300',
  tags: ['social-share'],
  description: 'Specifies the first name of the person associated with the web page, particularly for social sharing platforms.',
  tips: [
    {
      title: 'Consider Privacy',
      description: 'Ensure that you have the necessary consent or permission to include personal information such as the first name in the meta tag.',
    },
  ],
  examples: [
    {
      value: 'John',
      description: 'Specifies the "profile:first_name" meta tag with the first name "John" for a web page.',
    },
    {
      value: 'Jane',
      description: 'Defines the "profile:first_name" meta tag with the first name "Jane" for a web page.',
    },
  ],
  documentation: [
    'https://ogp.me/#type_profile',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

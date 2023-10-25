import type { MetaSchema } from '../../metaFlat'

export const profileGender: MetaSchema = {
  name: 'profile:gender',
  key: 'property',
  color: '#FFA500',
  tags: 'social-share',
  description: 'Specifies the gender of the person associated with a web page, typically used in the context of social media profiles.',
  tips: [
    {
      title: 'Use Appropriate Values',
      description: 'Use values that accurately represent the gender of the person associated with the page, such as "male", "female", or "non-binary".',
    },
    {
      title: 'Consider Inclusivity',
      description: 'When using the "profile:gender" meta tag, consider providing an option for users to select "prefer not to say" or a similar inclusive option.',
    },
  ],
  examples: [
    {
      value: 'male',
      description: 'Specifies the "profile:gender" meta tag with the value "male" to indicate that the person associated with the page identifies as male.',
    },
    {
      value: 'female',
      description: 'Specifies the "profile:gender" meta tag with the value "female" to indicate that the person associated with the page identifies as female.',
    },
    {
      value: 'non-binary',
      description: 'Specifies the "profile:gender" meta tag with the value "non-binary" to indicate that the person associated with the page identifies as non-binary.',
    },
  ],
  documentation: [
    'https://developers.facebook.com/docs/marketing-apis/overview/meta-tags#profile-gender',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#profilegender',
  ],
}

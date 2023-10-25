import type { MetaSchema } from '../../metaFlat'

export const profileLastName: MetaSchema = {
  name: 'profile:last_name',
  key: 'property',
  color: '#FFEB3B',
  tags: 'other',
  description: 'Specifies the last name of the individual or entity associated with a social profile. It is used to provide additional information about the profile.',
  tips: [
    {
      title: 'Use with "profile:first_name"',
      description: 'To provide a complete name for a social profile, use the "profile:first_name" meta tag in conjunction with the "profile:last_name" meta tag.',
    },
    {
      title: 'Include Accurate Information',
      description: 'Ensure that the last name provided in the "profile:last_name" meta tag accurately represents the individual or entity associated with the social profile.',
    },
  ],
  examples: [
    {
      value: 'Doe',
      description: 'Specifies the last name "Doe" for the individual or entity associated with a social profile.',
    },
    {
      value: 'Smith',
      description: 'Indicates the last name "Smith" for the individual or entity associated with a social profile.',
    },
  ],
  documentation: [
    'https://developers.facebook.com/docs/marketing-apis/profile#properties',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-profile.last_name',
  ],
}

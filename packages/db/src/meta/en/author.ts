import type { MetaSchema } from '../../metaFlat'

export const author: MetaSchema = {
  name: 'author',
  key: 'name',
  color: '#FF4081',
  tags: ['seo', 'other'],
  description: 'Specifies the author of the web page or content.',
  tips: [
    {
      title: 'Use Real Names',
      description: 'Use the real name of the author to provide transparency and trustworthiness to the content.',
    },
    {
      title: 'Avoid Keywords',
      description: 'Do not use keywords in the author meta tag. It is meant to represent a person, not for SEO purposes.',
    },
  ],
  examples: [
    {
      value: 'John Doe',
      description: 'Specifies the author of the web page as John Doe.',
    },
    {
      value: 'Jane Smith',
      description: 'Specifies the author of the web page as Jane Smith.',
    },
  ],
  documentation: [
  ],
}

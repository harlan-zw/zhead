import type { MetaSchema } from '../../metaFlat'

export const ogDeterminer: MetaSchema = {
  name: 'og:determiner',
  key: 'property',
  description: 'Specifies the word that should appear before the title of the resource in social media shares. The determiner is used to clarify the type of the resource.',
  tags: 'social-share',
  color: '#FF99CC',
  examples: [
    {
      value: 'a',
      description: 'Specifies that the resource is a generic object, like "a video" or "an article".',
    },
    {
      value: 'an',
      description: 'Specifies that the resource is a generic object, like "an image" or "an infographic".',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters#tags',
  ],
}

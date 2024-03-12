import type { MetaSchema } from '../../metaFlat'

export const bookTag: MetaSchema = {
  name: 'book:tag',
  key: 'property',
  color: '#FF6699',
  tags: 'seo',
  description: 'Specifies the keywords or tags associated with a book or publication.',
  tips: [
    {
      title: 'Choose Relevant Tags',
      description: 'Select tags that accurately represent the content of the book and are relevant to potential readers.',
    },
    {
      title: 'Use Specific Tags',
      description: 'Avoid using generic tags and instead use specific keywords that describe the book in more detail.',
    },
  ],
  examples: [
    {
      value: 'fiction, mystery, thriller',
      description: 'Specifies the "book:tag" meta tag with tags for a fictional book belonging to the mystery and thriller genres.',
    },
    {
      value: 'non-fiction, self-help, personal development',
      description: 'Defines the "book:tag" meta tag with tags for a non-fictional book focused on self-help and personal development.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/data-types/book',
    'https://schema.org/keywords',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const bookAuthor: MetaSchema = {
  name: 'book:author',
  key: 'name',
  color: '#FF7F50',
  tags: 'other',
  description: 'Specifies the author of a book or literary work. This meta tag is commonly used in web pages that provide information about books or have a book-related focus.',
  tips: [
    {
      title: 'Provide Accurate Author Information',
      description: 'Ensure that the author name provided in the "book:author" meta tag is accurate and matches the actual author of the book or literary work.',
    },
    {
      title: 'Use Schema.org Markup Instead',
      description: 'Consider using Schema.org markup for book-related information, including author details. This can provide more structured data to search engines.',
    },
  ],
  examples: [
    {
      value: 'John Doe',
      description: 'Specifies the "book:author" meta tag with the name "John Doe" as the author of the book.',
    },
    {
      value: 'Jane Smith',
      description: 'Defines the "book:author" meta tag with the name "Jane Smith" as the author of the book.',
    },
  ],
  documentation: [
    'https://schema.org/Person',
    'https://developers.google.com/search/docs/data-types/book',
  ],
}

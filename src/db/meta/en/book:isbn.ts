import type { MetaSchema } from '../../metaFlat'

export const bookIsbn: MetaSchema = {
  name: 'book:isbn',
  key: 'property',
  color: '#FF99CC',
  tags: 'seo',
  description: 'Provides the International Standard Book Number (ISBN) for a book page on a website. ISBNs are unique numeric identifiers used to identify books globally.',
  tips: [
    {
      title: 'Include Accurate ISBN',
      description: 'Make sure to include the correct ISBN for the book. Incorrect or missing ISBNs can lead to confusion and affect the book\'s discoverability.',
    },
    {
      title: 'Use Valid ISBN Format',
      description: 'Ensure that the ISBN is in the correct format. ISBNs can be either 10 or 13 digits long and may include hyphens. Verify the formatting guidelines provided by ISBN registration authorities.',
    },
  ],
  examples: [
    {
      value: '978-0-306-40615-7',
      description: 'Specifies the "book:isbn" meta tag with the ISBN 978-0-306-40615-7 for a book page, providing a unique identifier for the book.',
    },
    {
      value: '0-201-61622-X',
      description: 'Defines the "book:isbn" meta tag with the ISBN 0-201-61622-X for a book page, using the older 10-digit format.',
    },
  ],
  documentation: [
    'https://moz.com/learn/seo/meta-tags',
    'https://www.isbn-international.org/',
  ],
}

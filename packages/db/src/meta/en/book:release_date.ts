import type { MetaSchema } from '../../metaFlat'

export const bookReleaseDate: MetaSchema = {
  name: 'book:release_date',
  key: 'property',
  color: '#FF00FF',
  tags: 'other',
  description: 'Specifies the release date of a book for search engines and social media platforms. It helps search engines understand the publishing timeline of a book and enable enhanced search features for users interested in specific release dates.',
  tips: [],
  examples: [
    {
      value: '2022-10-20',
      description: 'Specifies the "book:release_date" meta tag with the release date of the book as October 20, 2022. This allows search engines and social media platforms to display the book\'s release date in search results and other relevant features.',
    },
    {
      value: '2023-01-01',
      description: 'Defines the "book:release_date" meta tag with the release date of the book as January 1, 2023. This provides accurate information to search engines and social media platforms for displaying release date-related features.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/data-types/book',
    'https://twitter.com/opengraph',
    'https://ogp.me/',
  ],
}

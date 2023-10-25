import type { MetaSchema } from '../../metaFlat'

export const rating: MetaSchema = {
  name: 'rating',
  key: 'name',
  description: 'Labels a page as containing adult content, to signal that it be filtered by SafeSearch results.',
  examples: [
    {
      value: 'adult',
      description: 'Specifies the "rating" meta tag as "adult," indicating that the web page contains adult content and should be filtered accordingly by SafeSearch.',
    },
  ],
  documentation: [
    'https://developers.google.com/search/docs/advanced/guidelines/safesearch',
  ],
}

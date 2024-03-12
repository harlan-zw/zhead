import type { MetaSchema } from '../../metaFlat'

export const ogLocaleAlternate: MetaSchema = {
  name: 'og:locale:alternate',
  key: 'property',
  color: '#FF8C00',
  tags: 'social-share',
  description: 'Specifies alternative locales for an Open Graph object. It indicates the available translations of the Open Graph object.',
  tips: [
    {
      title: 'Use Proper Locale Codes',
      description: 'Use the proper locale codes according to the BCP 47 standard. For example, "en_US" for English (United States) or "fr_FR" for French (France).',
    },
    {
      title: 'Include All Available Translations',
      description: 'Ensure that you include all available translations of the Open Graph object by specifying multiple "og:locale:alternate" meta tags for each locale.',
    },
  ],
  examples: [
    {
      value: 'en_US',
      description: 'Specifies the "og:locale:alternate" meta tag with the "en_US" locale code to indicate English (United States) translation for the Open Graph object.',
    },
    {
      value: 'fr_FR',
      description: 'Specifies the "og:locale:alternate" meta tag with the "fr_FR" locale code to indicate French (France) translation for the Open Graph object.',
    },
  ],
  documentation: [
    'https://ogp.me/#array',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const ogLocale: MetaSchema = {
  name: 'og:locale',
  key: 'property',
  color: '#FFB300',
  tags: 'social-share',
  description: 'Specifies the locale of the web page for Open Graph protocol. It helps to determine the appropriate language and cultural settings for the content when sharing on social media platforms.',
  tips: [
    {
      title: 'Use ISO 639-1 Language Code',
      description: 'Follow the ISO 639-1 standard language codes to specify the locale. For example, "en_US" for English (United States) or "fr_FR" for French (France).',
    },
    {
      title: 'Default Language',
      description: 'If the og:locale meta tag is not specified, the default language will depend on the user\'s regional settings or the assumed language of the web page.',
    },
  ],
  examples: [
    {
      value: 'en_US',
      description: 'Sets the "og:locale" meta tag to specify English (United States) as the locale for the Open Graph content.',
    },
    {
      value: 'fr_FR',
      description: 'Defines the "og:locale" meta tag to specify French (France) as the locale for the Open Graph content.',
    },
  ],
  documentation: [
    'https://ogp.me/#locales',
    'https://developers.facebook.com/docs/sharing/webmasters#markup',
  ],
}

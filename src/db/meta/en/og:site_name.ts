import type { MetaSchema } from '../../metaFlat'

export const ogSiteName: MetaSchema = {
  name: 'og:site_name',
  key: 'property',
  color: '#FFB30',
  tags: 'social-share',
  description: 'Specifies the name of the website or web page that the content belongs to. It is used by social media platforms when displaying shared content.',
  tips: [
    {
      title: 'Use a Clear and Recognizable Name',
      description: 'Choose a site name that accurately represents your website and is easily recognizable by users.',
    },
  ],
  examples: [
    {
      value: 'Example Website',
      description: 'Specifies the "og:site_name" meta tag with the name "Example Website" for a web page.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const publisher: MetaSchema = {
  name: 'publisher',
  key: 'name',
  color: '#27AE60',
  tags: 'seo',
  description: 'Specifies the name of the organization or entity that publishes the web page.',
  tips: [
    {
      title: 'Use a Recognizable Name',
      description: 'Ensure that the publisher name specified in the meta tag is easily recognizable to users and helps establish trust.',
    },
  ],
  examples: [
    {
      value: 'Your Company',
      description: `Specifies the "publisher" meta tag with the name of your company as the publisher of the web page, providing information about the entity responsible for the content.`,
    },
    {
      value: 'Example Magazine',
      description: `Defines the "publisher" meta tag with the name of Example Magazine as the publisher of the web page, establishing the source of the content.`,
    },
  ],
  documentation: [
    'https://moz.com/learn/seo/meta-tags',
    'https://ogp.me/#type_article',
  ],
}

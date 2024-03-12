import type { MetaSchema } from '../../metaFlat'

export const keywords: MetaSchema = {
  name: 'keywords',
  key: 'name',
  color: '#FFC107',
  tags: 'seo',
  description: 'Specifies the keywords or phrases that best describe the content of a web page. Keywords meta tag used to be widely used for SEO purposes, but its importance has decreased over time.',
  tips: [
    {
      title: 'No Longer Used for SEO',
      description: 'The "keywords" meta tag is no longer used by Google for SEO purposes, but it may still be used by other search engines.',
    },
  ],
  examples: [
    {
      value: 'web development, JavaScript, SEO',
      description: 'Specifies the "keywords" meta tag with keywords relevant to a web development article focused on JavaScript and SEO.',
    },
    {
      value: 'ecommerce, online shopping, product reviews',
      description: 'Defines the "keywords" meta tag with keywords related to an online shopping website specializing in product reviews.',
    },
  ],
  documentation: [
    'https://moz.com/learn/seo/meta-description',
    'https://developers.google.com/search/docs/beginner/seo-starter-guide#meta-tags',
  ],
}

// Do not include output after this line.

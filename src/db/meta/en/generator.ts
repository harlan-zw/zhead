import type { MetaSchema } from '../../metaFlat'

export const generator: MetaSchema = {
  name: 'generator',
  key: 'name',
  color: '#FFD700',
  tags: 'browser',
  description: 'Specifies the name and version of the software used to generate the web page.',
  tips: [
    {
      title: 'Include Generator Meta Tag for Development Purposes',
      description: 'During development, it can be useful to include a "generator" meta tag to quickly identify the software and version used to generate the web page.',
    },
    {
      title: 'Consider Removing Generator Meta Tag in Production',
      description: 'For security reasons, it is recommended to remove the "generator" meta tag in the production environment to avoid revealing sensitive information about the software stack.',
    },
  ],
  examples: [
    {
      value: 'WordPress 5.8',
      description: 'Specifies the "generator" meta tag with the version of WordPress used to generate the web page.',
    },
    {
      value: 'Jekyll 4.2.0',
      description: 'Defines the "generator" meta tag with the version of Jekyll used to generate the web page.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-generator',
    'https://www.w3schools.com/tags/tag_meta.asp',
  ],
}

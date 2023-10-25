import type { MetaSchema } from '../../metaFlat'

export const articleModifiedTime: MetaSchema = {
  name: 'article:modified_time',
  key: 'property',
  color: '#50BDBD',
  tags: 'social-share',
  description: 'Specifies the time when the article was last modified. This meta tag is used by social media platforms to display the updated timestamp of an article when it is shared.',
  tips: [
    {
      title: 'Include the Correct Time Format',
      description: 'Make sure to include the timestamp in the ISO 8601 format (YYYY-MM-DDThh:mm:ssZ) to ensure compatibility with various platforms.',
    },
    {
      title: 'Update After Content Changes',
      description: 'Update the "article:modified_time" meta tag whenever the content of the article is modified to ensure accurate display of the updated timestamp.',
    },
  ],
  examples: [
    {
      value: '2022-01-12T13:30:45Z',
      description: 'Specifies the "article:modified_time" meta tag with the timestamp of January 12, 2022, at 13:30:45 UTC.',
    },
    {
      value: '2021-11-05T09:15:00Z',
      description: 'Defines the "article:modified_time" meta tag with the timestamp of November 5, 2021, at 09:15:00 UTC.',
    },
  ],
  documentation: [
    'https://ogp.me/',
    'https://developers.facebook.com/docs/sharing/webmasters/',
    'https://dev.twitter.com/cards/types',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const twitterData2: MetaSchema = {
  name: 'data2',
  key: 'name',
  color: '#FF00FF',
  tags: 'social-share',
  description: 'A custom meta tag for specifying a secondary value associated with the shared content on Twitter. This meta tag is used in conjunction with the "twitter:card" meta tag to provide additional information or context about the shared content.',
  tips: [
    {
      title: 'Use Unique and Relevant Data',
      description: 'Ensure that the value provided for the "data2" meta tag is unique and relevant to the shared content. This can help improve the visibility and understanding of the shared content on Twitter.',
    },
    {
      title: 'Consider Length Limitations',
      description: 'Be aware that Twitter has character limitations for the data values in meta tags. Consider the length of the "data2" value to ensure it fits within the allowed limit.',
    },
    {
      title: 'Use Appropriate Data Type',
      description: 'Choose an appropriate data type for the "data2" value based on the content being shared. It can be a string, number, or any other valid data type supported by Twitter.',
    },
  ],
  examples: [
    {
      value: 'Author Name',
      description: 'Specifies the "data2" meta tag with the name of the author associated with the shared content. This provides additional context about the content on Twitter.',
    },
    {
      value: 'Publication Date',
      description: 'Defines the "data2" meta tag with the publication date of the shared content. This adds relevant information for users on Twitter.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup',
  ],
}

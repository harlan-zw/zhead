import type { MetaSchema } from '../../metaFlat'

export const articleTag: MetaSchema = {
  name: 'article:tag',
  key: 'property',
  color: '#FFA700',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies one or more tags or keywords that are relevant to the content of an article or blog post. These tags can be used for categorizing and organizing articles in search results and social media platforms.',
  tips: [
    {
      title: 'Use Relevant and Specific Tags',
      description: 'Choose tags that accurately describe the content of the article. Avoid using generic or unrelated tags that may mislead readers or search engines.',
    },
    {
      title: 'Include Properly Capitalized Tags',
      description: 'Ensure that the tags are capitalized correctly and consistently. This can improve the readability and presentation of the tags on social media platforms.',
    },
    {
      title: 'Limit the Number of Tags',
      description: 'While the article:tag meta allows multiple tags, it is recommended to limit the number of tags to a reasonable amount. Too many tags can make the content appear spammy and may have a negative impact on SEO.',
    },
  ],
  examples: [
    {
      value: 'web development',
      description: 'Specifies the "article:tag" meta tag with the tag "web development" for an article about web development. This tag can be used by social media platforms to categorize and display the article.',
    },
    {
      value: 'technology, artificial intelligence',
      description: 'Defines the "article:tag" meta tag with multiple tags "technology" and "artificial intelligence" for an article related to these topics. These tags can provide additional context and improve discoverability of the article.',
    },
  ],
  documentation: [
    'https://ogp.me/#type_article',
  ],
}

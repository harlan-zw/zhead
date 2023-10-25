import type { MetaSchema } from '../../metaFlat'

export const creator: MetaSchema = {
  name: 'creator',
  key: 'name',
  color: '#1E88E5',
  tags: 'other',
  description: 'Specifies the author or creator of the web page or content. It is used to provide attribution and credit for the work.',
  tips: [
    {
      title: 'Use Real People or Organization Names',
      description: 'When using the "creator" meta tag, provide the actual name of the individual or organization responsible for the page or content. This helps establish credibility and provides proper attribution.',
    },
    {
      title: 'Don\'t Overuse or Misuse',
      description: 'Avoid using the "creator" meta tag excessively or for misleading purposes. It should accurately reflect the true creator of the content.',
    },
  ],
  examples: [
    {
      value: 'John Doe',
      description: 'Specifies the "creator" meta tag with the name "John Doe" as the author or creator of the web page.',
    },
    {
      value: 'Example Corp',
      description: 'Sets the "creator" meta tag to "Example Corp" to indicate that the organization is responsible for the web page or content.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
  ],
}

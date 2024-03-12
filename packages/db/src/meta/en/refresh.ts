import type { MetaSchema } from '../../metaFlat'

export const refresh: MetaSchema = {
  name: 'refresh',
  key: 'http-equiv',
  color: '#FF879D',
  tags: ['other', 'browser'],
  description: 'Used to specify an automatic refresh or redirect of a web page after a specified time interval.',
  tips: [
    {
      title: 'Limited Usage',
      description: 'The "refresh" meta tag is not recommended for frequent use as it disrupts the user experience and can negatively impact SEO.',
    },
    {
      title: 'Set an Appropriate Time Interval',
      description: 'Ensure that the time interval specified in the "refresh" meta tag is appropriate for the content and purpose of the page.',
    },
  ],
  examples: [
    {
      value: '5; url=https://example.com',
      description: 'Redirects the web page to "https://example.com" after a 5-second delay.',
    },
    {
      value: '10',
      description: 'Refreshes the web page after a 10-second delay.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#attr-refresh',
  ],
}

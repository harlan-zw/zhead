import type { MetaSchema } from '../../metaFlat'

export const formatDetection: MetaSchema = {
  name: 'format-detection',
  key: 'name',
  color: '#FFC107',
  tags: 'browser',
  description: 'Enables or disables automatic detection of potential phone numbers, email addresses, and addresses in a web page. This meta tag is specific to mobile browsers.',
  tips: [
    {
      title: 'Enable Detection for Specific Formats',
      description: 'Add specific format values to enable automatic detection for phone numbers, email addresses, or addresses. For example, "telephone=no" disables phone number detection, while "email=no" disables email address detection.',
    },
    {
      title: 'Disable Detection',
      description: 'Use "format-detection=telephone=no" meta tag to disable automatic phone number detection, "format-detection=email=no" to disable email address detection, and "format-detection=address=no" to disable address detection.',
    },
  ],
  examples: [
    {
      value: 'telephone=no',
      description: 'Disables automatic detection of phone numbers on a web page.',
    },
    {
      value: 'email=no',
      description: 'Disables automatic detection of email addresses on a web page.',
    },
    {
      value: 'address=no',
      description: 'Disables automatic detection of addresses on a web page.',
    },
  ],
  documentation: [
    'https://developer.apple.com/documentation/safari_web_content/SafariHTMLRef/Articles/MetaTags.html#//apple_ref/doc/uid/TP40008193-SW27',
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/format-detection',
  ],
}

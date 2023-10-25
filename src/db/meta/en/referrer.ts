import type { MetaSchema } from '../../metaFlat'

export const referrer: MetaSchema = {
  name: 'referrer',
  key: 'name',
  color: '#FF8C00',
  tags: 'browser',
  description: 'Specifies the referrer policy for requests made by the browser.',
  tips: [
    {
      title: 'Choose an appropriate referrer policy',
      description: 'Consider the privacy and security implications when choosing a referrer policy for your website.',
    },
    {
      title: 'Use strict referrer policies for sensitive information',
      description: 'If your website handles sensitive user information, it is recommended to use strict referrer policies, such as "no-referrer-when-downgrade" or "strict-origin-when-cross-origin".',
    },
  ],
  examples: [
    {
      value: 'no-referrer',
      description: 'Specifies that no referrer information should be sent in the HTTP header when navigating to other pages.',
    },
    {
      value: 'no-referrer-when-downgrade',
      description: 'Indicates that the referrer should not be sent when navigating to a less secure URL, such as from HTTPS to HTTP.',
    },
    {
      value: 'strict-origin-when-cross-origin',
      description: 'Specifies that the referrer should only be sent for same-origin requests and requests to a different origin, but with strict privacy restrictions.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy',
    'https://developers.google.com/web/updates/2016/03/referrer-policy',
  ],
}

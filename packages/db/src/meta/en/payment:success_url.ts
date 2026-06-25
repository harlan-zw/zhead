import type { MetaSchema } from '../../metaFlat'

export const paymentSuccessUrl: MetaSchema = {
  name: 'payment:success_url',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies the URL users are redirected to after a successful payment.',
  tips: [
    {
      title: 'Use an absolute URL',
      description: 'Use a full HTTPS URL so payment consumers can redirect reliably from any context.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/payment/success',
      description: 'Redirects users to a confirmation page after payment succeeds.',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

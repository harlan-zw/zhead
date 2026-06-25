import type { MetaSchema } from '../../metaFlat'

export const paymentExpiresAt: MetaSchema = {
  name: 'payment:expires_at',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies when an Open Graph payment link expires.',
  tips: [
    {
      title: 'Use an absolute timestamp',
      description: 'Use an ISO 8601 timestamp so consumers do not need to infer time zones or locale-specific date formats.',
    },
  ],
  examples: [
    {
      value: '2026-12-31T23:59:59Z',
      description: 'Specifies the UTC expiration time for the payment link.',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

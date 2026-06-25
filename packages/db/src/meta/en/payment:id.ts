import type { MetaSchema } from '../../metaFlat'

export const paymentId: MetaSchema = {
  name: 'payment:id',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies the unique identifier for a payment link or payment gateway record.',
  tips: [
    {
      title: 'Use a stable identifier',
      description: 'Use the provider identifier or a stable internal ID that lets the payment be reconciled later.',
    },
  ],
  examples: [
    {
      value: 'pay_123456789',
      description: 'Identifies the payment link using a provider-generated payment ID.',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

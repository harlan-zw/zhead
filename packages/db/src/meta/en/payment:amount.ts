import type { MetaSchema } from '../../metaFlat'

export const paymentAmount: MetaSchema = {
  name: 'payment:amount',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies the amount requested by an Open Graph payment link.',
  tips: [
    {
      title: 'Use a decimal amount',
      description: 'Use the exact payment amount without currency symbols, and pair it with "payment:currency".',
    },
  ],
  examples: [
    {
      value: '19.99',
      description: 'Specifies a payment link amount of 19.99 in the currency declared by "payment:currency".',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

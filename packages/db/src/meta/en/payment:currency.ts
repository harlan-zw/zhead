import type { MetaSchema } from '../../metaFlat'

export const paymentCurrency: MetaSchema = {
  name: 'payment:currency',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies the ISO 4217 currency code for an Open Graph payment link.',
  tips: [
    {
      title: 'Use currency codes',
      description: 'Use a three-letter ISO 4217 code such as USD, EUR, or AUD so consumers can interpret the amount consistently.',
    },
  ],
  examples: [
    {
      value: 'USD',
      description: 'Specifies that the payment amount is denominated in US dollars.',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

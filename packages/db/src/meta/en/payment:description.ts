import type { MetaSchema } from '../../metaFlat'

export const paymentDescription: MetaSchema = {
  name: 'payment:description',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Provides a short description of the payment link for Open Graph consumers.',
  tips: [
    {
      title: 'Keep it specific',
      description: 'Describe what the payment covers so previews and payment surfaces can show clear context.',
    },
  ],
  examples: [
    {
      value: 'Invoice 1042 for design services',
      description: 'Describes the item or invoice associated with the payment link.',
    },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

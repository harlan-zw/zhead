import type { MetaSchema } from '../../metaFlat'

export const paymentStatus: MetaSchema = {
  name: 'payment:status',
  key: 'property',
  type: 'open-graph-protocol',
  color: '#16A34A',
  tags: 'social-share',
  description: 'Specifies the current status of an Open Graph payment link.',
  tips: [
    {
      title: 'Keep status current',
      description: 'Update this value when the payment state changes so shared previews do not advertise stale availability.',
    },
  ],
  examples: [
    {
      value: 'PENDING',
      description: 'Indicates that the payment link is active and awaiting payment.',
    },
    {
      value: 'PAID',
      description: 'Indicates that the payment has been completed.',
    },
  ],
  parameters: [
    { value: 'PENDING', description: 'The payment has not been completed yet.' },
    { value: 'PAID', description: 'The payment has been completed.' },
    { value: 'FAILED', description: 'The payment attempt failed.' },
    { value: 'EXPIRED', description: 'The payment link is no longer valid.' },
  ],
  documentation: [
    'https://ogp.me/ns/payment#',
  ],
}

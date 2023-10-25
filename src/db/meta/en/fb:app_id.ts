import type { MetaSchema } from '../../metaFlat'

export const fbAppId: MetaSchema = {
  name: 'fb:app_id',
  key: 'property',
  color: '#3B5998',
  tags: 'social-share',
  description: 'Used to associate a Facebook App ID with a web page. This allows the web page to be integrated and interact with the associated Facebook app.',
  tips: [
    {
      title: 'Create a Facebook App',
      description: 'Before using the "fb:app_id" meta tag, make sure you have created a Facebook app and obtained its corresponding ID.',
    },
    {
      title: 'Integrate with Facebook APIs',
      description: 'Once the "fb:app_id" meta tag is added, you can use the Facebook JavaScript SDK or other Facebook APIs to extend the functionality of your web page and integrate it with your Facebook app.',
    },
  ],
  examples: [
    {
      value: '1234567890',
      description: 'Specifies the "fb:app_id" meta tag with the Facebook App ID "1234567890" associated with a web page.',
    },
  ],
  documentation: [
    'https://developers.facebook.com/docs/sharing/webmasters#basic',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const xUaCompatible: MetaSchema = {
  name: 'x-ua-compatible',
  key: 'http-equiv',
  color: '#FF8000',
  tags: 'browser',
  description: 'Used to specify the document compatibility mode for Internet Explorer (IE). It allows developers to ensure that their webpage is rendered using the appropriate version of IE, avoiding compatibility issues.',
  tips: [
    {
      title: 'Specify Compatible Document Mode',
      description: 'Set the "x-ua-compatible" meta tag to specify the document compatibility mode your webpage should be rendered in IE.',
    },
  ],
  examples: [
    {
      value: 'IE=edge',
      description: 'Specifies the "x-ua-compatible" meta tag with "IE=edge" to force IE to use the highest document mode available.',
    },
    {
      value: 'IE=9',
      description: 'Defines the "x-ua-compatible" meta tag with "IE=9" to ensure IE renders the webpage using Internet Explorer 9 document mode.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-UA-Compatible',
    'https://docs.microsoft.com/en-us/openspecs/ie_standards/ms-decst/6ec87709-cf13-4a88-ac1c-3fe2c607b5f8',
  ],
}

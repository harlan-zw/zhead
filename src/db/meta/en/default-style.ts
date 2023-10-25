import type { MetaSchema } from '../../metaFlat'

export const defaultStyle: MetaSchema = {
  name: 'default-style',
  key: 'http-equiv',
  parameters: [
    'content-type',
  ],
  type: 'standard',
  color: '#FFB300',
  tags: 'browser',
  description: 'Specifies the preferred default style sheet for the web page. The "default-style" meta tag is used by older versions of Internet Explorer to set the default style for the page.',
  tips: [
    {
      title: 'Specify a Default Style Sheet',
      description: 'Set the preferred default style sheet for the web page using the "default-style" meta tag. This can help ensure that the page is displayed consistently across different browsers.',
    },
  ],
  examples: [
    {
      value: 'text/html; charset=utf-8',
      description: 'Specifies the default style sheet for the web page as "text/html; charset=utf-8", which is the recommended default style.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type',
  ],
}

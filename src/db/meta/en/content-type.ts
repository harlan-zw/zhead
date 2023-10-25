import type { MetaSchema } from '../../metaFlat'

export const contentType: MetaSchema = {
  name: 'content-type',
  key: 'http-equiv',
  color: '#FF8C00',
  tags: 'browser',
  description: 'Specifies the character encoding and media type of a web page. It helps the browser understand how to interpret the content of the page.',
  tips: [
    {
      title: 'Specify UTF-8 Encoding',
      description: 'Set the "content-type" meta tag with "charset=UTF-8" to ensure proper display of characters on the page.',
    },
    {
      title: 'Choose the Correct Media Type',
      description: 'Select the appropriate media type based on the nature of your content. Common examples include "text/html" for HTML pages and "application/javascript" for JavaScript files.',
    },
  ],
  examples: [
    {
      value: 'text/html; charset=UTF-8',
      description: 'Sets the "content-type" meta tag with the media type "text/html" and the UTF-8 character encoding.',
    },
    {
      value: 'application/javascript',
      description: 'Defines the "content-type" meta tag with the media type "application/javascript" for JavaScript files.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#attr-http-equiv-content-type',
    'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type',
  ],
}

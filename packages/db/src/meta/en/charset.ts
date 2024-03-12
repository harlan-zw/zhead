import type { MetaSchema } from '../../metaFlat'

export const charset: MetaSchema = {
  key: 'charset',
  name: 'charset',
  type: 'standard',
  color: '#FFA500',
  tags: ['browser'],
  description: 'Defines the character encoding for a web page. Character encoding specifies how characters are represented digitally, ensuring proper display of text and content on the page.',
  tips: [
    {
      title: 'Use UTF-8',
      description: 'The most widely supported and recommended character encoding for web pages is UTF-8.',
    },
    {
      title: 'Declare in HTML',
      description: 'Ensure that the "charset" meta tag is included in the head section of your HTML document.',
    },
    {
      title: 'Place It Early',
      description: 'To ensure proper interpretation of characters by the browser, place the "charset" meta tag as one of the first tags in the head section.',
    },
  ],
  examples: [
    {
      value: 'UTF-8',
      description: 'Specifies the "charset" meta tag with the UTF-8 character encoding for a web page, ensuring compatibility with a wide range of characters.',
    },
    {
      value: 'ISO-8859-1',
      description: 'Defines the "charset" meta tag with the ISO-8859-1 character encoding for a web page, which is less common but may be necessary for specific cases.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset',
    'https://www.w3.org/International/articles/definitions-characters/',
  ],
}

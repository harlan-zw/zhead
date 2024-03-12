import type { MetaSchema } from '../../metaFlat'

export const ogImageType: MetaSchema = {
  name: 'og:image:type',
  key: 'property',
  color: '#FF935D',
  tags: 'social-share',
  description: 'Specifies the type of content represented by an image in the Open Graph protocol. It provides additional information about the format and content of the image.',
  tips: [
    {
      title: 'Choose the Correct Image Type',
      description: 'Select the appropriate type that best describes the content of the image. This can help social platforms understand and display the image correctly.',
    },
  ],
  examples: [
    {
      value: 'image/jpeg',
      description: 'Indicates that the image is in JPEG format.',
    },
    {
      value: 'image/png',
      description: 'Specifies that the image is in PNG format.',
    },
  ],
  documentation: [
    'https://ogp.me/#type_image',
  ],
}

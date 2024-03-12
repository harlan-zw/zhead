import type { MetaSchema } from '../../metaFlat'

export const ogImageWidth: MetaSchema = {
  name: 'og:image:width',
  key: 'property',
  color: '#FF77B4',
  tags: 'social-share',
  type: 'open-graph-protocol',
  description: 'Specifies the width of the image referenced in the "og:image" meta tag. It is used by social media platforms and other services to determine the aspect ratio and display size of the shared image.',
  tips: [
    {
      title: 'Ensure image consistency',
      description: 'Set the "og:image:width" meta tag to match the actual width of the image to ensure consistent display across different platforms and devices.',
    },
  ],
  examples: [
    {
      value: '1200',
      description: 'Sets the "og:image:width" meta tag to the width of 1200 pixels for the shared image.',
    },
    {
      value: '1920',
      description: 'Specifies the "og:image:width" meta tag with a width of 1920 pixels for the image displayed when the content is shared.',
    },
  ],
  documentation: [
    'https://ogp.me/#array',
    'https://developers.facebook.com/docs/sharing/webmasters/images/',
  ],
}

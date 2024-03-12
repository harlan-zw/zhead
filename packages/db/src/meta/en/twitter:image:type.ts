import type { MetaSchema } from '../../metaFlat'

export const twitterImageType: MetaSchema = {
  name: 'twitter:image:type',
  key: 'name',
  description: 'Specifies the type of the image referenced in the "twitter:image" meta tag. This meta tag is used to define the type of image file that is being shared on Twitter.',
  tags: 'social-share',
  color: '#FFB536',
  tips: [
    {
      title: 'Choose the Appropriate Image Type',
      description: 'Select the correct image type for the "twitter:image:type" meta tag based on the format of the image file being shared. This ensures that the image is displayed correctly on Twitter.',
    },
  ],
  examples: [
    {
      value: 'image/jpeg',
      description: 'An example that specifies the "twitter:image:type" meta tag with the value "image/jpeg", indicating that the image being shared is in JPEG format.',
    },
    {
      value: 'image/png',
      description: 'An example that defines the "twitter:image:type" meta tag with the value "image/png", indicating that the image being shared is in PNG format.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started#image',
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/summary-card-with-large-image',
  ],
}

import type { MetaSchema } from '../../metaFlat'

export const twitterPlayerHeight: MetaSchema = {
  key: 'name',
  name: 'twitter:player:height',
  color: '#FF318E',
  tags: 'social-share',
  type: 'twitter',
  description: 'Specifies the height of the Twitter player card when embedded in a tweet. The player card allows you to attach rich media experiences, such as videos or interactive content, to your tweets.',
  tips: [
    {
      title: 'Provide an appropriate height',
      description: 'Ensure that you set the height of the Twitter player card to match the aspect ratio of your media to avoid distorted or cropped content.',
    },
    {
      title: 'Consider mobile devices',
      description: 'Due to limited screen space on mobile devices, it is recommended to use a responsive height value for the Twitter player card to ensure optimal display across different devices and orientations.',
    },
  ],
  examples: [
    {
      value: '450',
      description: 'Sets the "twitter:player:height" meta tag to 450 pixels, indicating the height of the embedded Twitter player card as 450 pixels.',
    },
    {
      value: '100%',
      description: 'Specifies the "twitter:player:height" meta tag as a percentage value, allowing the Twitter player card to adapt to the available space dynamically.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card',
  ],
}

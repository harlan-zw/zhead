import type { MetaSchema } from '../../metaFlat'

export const twitterPlayerWidth: MetaSchema = {
  name: 'twitter:player:width',
  key: 'name',
  color: '#FFB30D',
  tags: 'social-share',
  description: 'Specifies the width of the Twitter card player on a web page when shared on Twitter. The Twitter card player allows users to play video or audio content directly within a tweet.',
  tips: [
    {
      title: 'Set an Appropriate Width',
      description: 'Choose a width that provides a good user experience and fits well within a tweet. Avoid setting an excessively wide or narrow width that may cause usability issues.',
    },
    {
      title: 'Consider Responsive Design',
      description: 'Make sure that the player width is responsive and adapts well to different screen sizes and devices to ensure a consistent user experience.',
    },
  ],
  examples: [
    {
      value: '480',
      description: 'Sets the "twitter:player:width" meta tag with a width of 480 pixels, providing a moderate-sized player for Twitter card content.',
    },
    {
      value: '640',
      description: 'Specifies the "twitter:player:width" meta tag with a width of 640 pixels, providing a larger player size for better visibility on Twitter cards.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

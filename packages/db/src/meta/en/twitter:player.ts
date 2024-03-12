import type { MetaSchema } from '../../metaFlat'

export const twitterPlayer: MetaSchema = {
  name: 'twitter:player',
  key: 'name',
  color: '#1DA1F2',
  tags: 'social-share',
  description: 'Specifies the URL to a Twitter card player that should be used when the URL in the "twitter:card" meta tag is set to "player".',
  tips: [
    {
      title: 'Provide a Secure URL',
      description: 'Make sure the URL provided for the Twitter card player is using HTTPS to ensure secure communication.',
    },
    {
      title: 'Optimize for Mobile',
      description: 'Ensure that the Twitter card player works well on mobile devices, as a significant portion of Twitter users access the platform from their smartphones.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/video.mp4',
      description: 'Specifies the URL to a video file that should be played when the associated Twitter card is displayed in a tweet.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started',
  ],
}

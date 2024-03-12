import type { MetaSchema } from '../../metaFlat'

export const twitterPlayerStream: MetaSchema = {
  name: 'twitter:player:stream',
  key: 'name',
  color: '#00ACEE',
  tags: 'social-share',
  description: 'Specifies the URL to a live video stream on Twitter. When shared on Twitter, this meta tag allows the video player to display and play the live stream directly in the tweet.',
  tips: [
    {
      title: 'Use a Live Video Stream URL',
      description: 'Ensure that the value for the "twitter:player:stream" meta tag is a valid URL pointing to a live video stream. The video player on Twitter will use this URL to display the stream directly in tweets.',
    },
    {
      title: 'Check Video Stream Compatibility',
      description: 'Make sure that the live video stream URL is compatible with Twitter\'s video player requirements and formats. Check the documentation provided by Twitter for more details on supported formats.',
    },
  ],
  examples: [
    {
      value: 'https://example.com/live-stream',
      description: 'Specifies the "twitter:player:stream" meta tag with the URL to a live video stream. When shared on Twitter, the tweet will display the live stream directly within the Twitter video player.',
    },
  ],
  documentation: [
    'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card',
  ],
}

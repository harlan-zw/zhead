import type { MetaSchema } from '../../metaFlat'

export const googleSiteVerification: MetaSchema = {
  name: 'google-site-verification',
  key: 'name',
  color: '#4CAF50',
  tags: 'seo',
  type: 'google',
  description: 'Used to verify the ownership of a website with Google Search Console. It is an essential step for webmasters to gain access to data and settings related to their website in Google\'s search index.',
  tips: [
    {
      title: 'Follow the Verification Process',
      description: 'After adding the "google-site-verification" meta tag to your website, follow the verification process in Google Search Console to prove that you own the website.',
    },
    {
      title: 'Keep Verification Code Secure',
      description: 'Ensure that your verification code remains confidential and is not shared with unauthorized individuals, as it grants access to your website\'s data and settings in Google Search Console.',
    },
  ],
  examples: [
    {
      value: 'abcdefg123456789',
      description: 'Specifies the "google-site-verification" meta tag with a unique verification code provided by Google Search Console.',
    },
  ],
  documentation: [
    'https://support.google.com/webmasters/answer/9008080?hl=en',
  ],
}

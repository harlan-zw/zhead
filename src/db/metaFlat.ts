import type { MetaFlat } from 'zhead'

export interface MetaFlatSchema {
  name: string
  key: 'charset' | 'name' | 'property' | 'http-equiv'
  description: string
  suggestions: string[]
  importance?: 'required' | 'important' | 'recommended' | 'optional' | 'deprecated' | 'unknown' | 'not-recommended'
  category?: 'render' | 'device' | 'seo' | 'social-share' | 'unknown' | 'security' | 'privacy' | 'pwa'
  links?: string[]
}

export const metaFlatSchema: Record<keyof MetaFlat, MetaFlatSchema> = {
  charset: {
    name: 'charset',
    key: 'charset',
    description: 'This attribute declares the document\'s character encoding.',
    suggestions: ['utf-8'],
    links: ['https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset'],
    importance: 'required',
    category: 'render',
  },
  description: {
    name: 'description',
    key: 'name',
    description: 'Use this tag to provide a short description of the page.',
    suggestions: [],
    importance: 'important',
    links: ['https://developers.google.com/search/docs/advanced/appearance/snippet#meta-descriptions'],
    category: 'seo',
  },
  colorScheme: {
    name: 'color-scheme',
    key: 'name',
    description: 'Specifies one or more color schemes with which the document is compatible.',
    suggestions: ['normal', 'light dark', 'dark light', 'only light'],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#normal',
    ],
    category: 'device',
  },
  applicationName: {
    name: 'application-name',
    key: 'name',
    description: 'The name of the application running in the web page.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
    ],
    category: 'pwa',
  },
  author: {
    name: 'author',
    key: 'name',
    description: 'The name of the document\'s author.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
    ],
    importance: 'optional',
  },
  creator: {
    name: 'creator',
    key: 'name',
    description: 'The name of the creator of the document, such as an organization or institution.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names',
    ],
    importance: 'optional',
  },
  publisher: {
    name: 'publisher',
    key: 'name',
    description: 'The name of the document\'s publisher.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names',
    ],
    importance: 'optional',
  },
  generator: {
    name: 'generator',
    key: 'name',
    description: 'The identifier of the software that generated the page.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
    ],
    importance: 'optional',
  },
  referrer: {
    name: 'referrer',
    key: 'name',
    description: 'Controls the HTTP Referer header of requests sent from the document.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
    ],
    importance: 'optional',
  },
  viewport: {
    name: 'viewport',
    key: 'name',
    description: 'This tag tells the browser how to render a page on a mobile device.',
    suggestions: ['width=device-width, initial-scale=1.0'],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications',
    ],
    importance: 'required',
    category: 'render',
  },
  robots: {
    name: 'robots',
    key: 'name',
    description: 'Control the behavior of search engine crawling and indexing.',
    suggestions: ['noindex, nofollow', 'index, follow'],
    links: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'recommended',
    category: 'seo',
  },
  google: {
    name: 'google',
    key: 'name',
    description: 'Special meta tag for controlling Google\'s indexing behavior.',
    suggestions: [],
    links: [
      'https://developers.google.com/search/docs/crawling-indexing/special-tags',
    ],
    importance: 'optional',
    category: 'seo',
  },
  googlebot: {
    name: 'googlebot',
    key: 'name',
    description: 'Control how Google indexing works specifically for the googlebot crawler.',
    suggestions: [],
    links: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'optional',
    category: 'seo',
  },
  googlebotNews: {
    name: 'googlebot-news',
    key: 'name',
    description: 'Control how Google indexing works specifically for the googlebot-news crawler.',
    suggestions: [],
    links: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'optional',
    category: 'seo',
  },
  googleSiteVerification: {
    name: 'google-site-verification',
    key: 'name',
    description: 'Verify ownership of a site to Google.',
    suggestions: [],
    links: [
      'https://developers.google.com/search/docs/advanced/crawling/google-search-console-verification',
    ],
    importance: 'optional',
  },
  rating: {
    name: 'rating',
    key: 'name',
    description: 'Labels a page as containing adult content, to signal that it be filtered by SafeSearch results.',
    suggestions: ['adult'],
    links: [
      'https://developers.google.com/search/docs/advanced/guidelines/safesearch',
    ],
  },
  ogUrl: {
    name: 'og:url',
    key: 'property',
    description: 'The canonical URL for your page.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogType: {
    name: 'og:type',
    key: 'property',
    description: 'The type of object your page represents.',
    suggestions: ['website', 'article', 'book', 'profile'],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogTitle: {
    name: 'og:title',
    key: 'property',
    description: 'The title of your object as it should appear within the graph, e.g., "The Rock".',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogDescription: {
    name: 'og:description',
    key: 'property',
    description: 'A one to two sentence description of your object.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogDeterminer: {
    name: 'og:determiner',
    key: 'property',
    description: 'The word that appears before this object\'s title in a sentence. An enum of (a, an, the, "", auto).',
    suggestions: ['a', 'an', 'the', '', 'auto'],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogLocale: {
    name: 'og:locale',
    key: 'property',
    description: 'The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogLocaleAlternate: {
    name: 'og:locale:alternate',
    key: 'property',
    description: 'An array of other locales this page is available in.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogSiteName: {
    name: 'og:site_name',
    key: 'property',
    description: 'If your object is part of a larger web site, the name which should be displayed for the overall site.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogVideo: {
    name: 'og:video',
    key: 'property',
    description: 'A video URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoUrl: {
    name: 'og:video:url',
    key: 'property',
    description: 'A video URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoSecureUrl: {
    name: 'og:video:secure_url',
    key: 'property',
    description: 'A video URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoType: {
    name: 'og:video:type',
    key: 'property',
    description: 'A MIME type for this video. of the format type/subtype. e.g. video/mp4.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoAlt: {
    name: 'og:video:alt',
    key: 'property',
    description: 'A description of what is in the video (not a caption). If the page specifies an og:image it should specify og:image:alt.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
  },
  ogVideoHeight: {
    name: 'og:video:height',
    key: 'property',
    description: 'The height of the video in pixels.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoWidth: {
    name: 'og:video:width',
    key: 'property',
    description: 'The width of the video in pixels.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogImage: {
    name: 'og:image',
    key: 'property',
    description: 'An image URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogImageAlt: {
    name: 'og:image:alt',
    key: 'property',
    description: 'A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    category: 'social-share',
  },
  ogImageHeight: {
    name: 'og:image:height',
    key: 'property',
    description: 'The height of the image in pixels.',
    suggestions: ['630'],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogImageWidth: {
    name: 'og:image:width',
    key: 'property',
    description: 'The width of the image in pixels.',
    suggestions: ['1200'],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    category: 'social-share',
  },
  ogImageUrl: {
    name: 'og:image:url',
    key: 'property',
    description: 'An image URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    category: 'social-share',
  },
  ogImageType: {
    name: 'og:image:type',
    key: 'property',
    description: 'A MIME type for this image. of the format type/subtype. e.g. image/jpeg.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    category: 'social-share',
  },
  ogImageSecureUrl: {
    name: 'og:image:secure_url',
    key: 'property',
    description: 'An image URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    category: 'social-share',
  },
  ogAudio: {
    name: 'og:audio',
    key: 'property',
    description: 'An audio URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioUrl: {
    name: 'og:audio:url',
    key: 'property',
    description: 'An audio URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioSecureUrl: {
    name: 'og:audio:secure_url',
    key: 'property',
    description: 'An audio URL which should represent your object within the graph.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioType: {
    name: 'og:audio:type',
    key: 'property',
    description: 'A MIME type for this audio. of the format type/subtype. e.g. audio/mpeg.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  fbAppId: {
    name: 'fb:app_id',
    key: 'property',
    description: 'The unique ID that is associated with your app.',
    suggestions: [],
    links: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  twitterCard: {
    name: 'twitter:card',
    key: 'name',
    description: 'The card type, which can be summary, summary_large_image, app, or player.',
    suggestions: ['summary', 'summary_large_image', 'app', 'player'],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'recommended',
  },
  twitterSite: {
    name: 'twitter:site',
    key: 'name',
    description: '@username of website. Either twitter:card or og:site_name must be used.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterCreator: {
    name: 'twitter:creator',
    key: 'name',
    description: '@username of content creator.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterTitle: {
    name: 'twitter:title',
    key: 'name',
    description: 'Title of content (max 70 characters).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterDescription: {
    name: 'twitter:description',
    key: 'name',
    description: 'Description of content (maximum 200 characters).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImage: {
    name: 'twitter:image',
    key: 'name',
    description: 'URL of image to use in the card. Images must be less than 5MB in size.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageAlt: {
    name: 'twitter:image:alt',
    key: 'name',
    description: 'A text description of the image conveying the essential nature of an image to users who are visually impaired. Maximum 420 characters.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayer: {
    name: 'twitter:player',
    key: 'name',
    description: 'HTTPS URL of player iframe',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayerWidth: {
    name: 'twitter:player:width',
    key: 'name',
    description: 'Width of iframe in pixels',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayerHeight: {
    name: 'twitter:player:height',
    key: 'name',
    description: 'Height of iframe in pixels',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayerStream: {
    name: 'twitter:player:stream',
    key: 'name',
    description: 'URL to raw video or audio stream',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterAppIdGoogleplay: {
    name: 'twitter:app:id:googleplay',
    key: 'name',
    description: 'Your app ID in the Google Play Store (for Android apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppIdIphone: {
    name: 'twitter:app:id:iphone',
    key: 'name',
    description: 'Your app ID in the Apple App Store (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppIdIpad: {
    name: 'twitter:app:id:ipad',
    key: 'name',
    description: 'Your app ID in the Apple App Store (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameGoogleplay: {
    name: 'twitter:app:name:googleplay',
    key: 'name',
    description: 'Your app name in the Google Play Store (for Android apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameIphone: {
    name: 'twitter:app:name:iphone',
    key: 'name',
    description: 'Your app name in the Apple App Store (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameIpad: {
    name: 'twitter:app:name:ipad',
    key: 'name',
    description: 'Your app name in the Apple App Store (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlIphone: {
    name: 'twitter:app:url:iphone',
    key: 'name',
    description: 'Your app’s custom URL scheme (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlIpad: {
    name: 'twitter:app:url:ipad',
    key: 'name',
    description: 'Your app’s custom URL scheme (for iOS apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlGoogleplay: {
    name: 'twitter:app:url:googleplay',
    key: 'name',
    description: 'Your app’s custom URL scheme (for Android apps).',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterCreatorId: {
    name: 'twitter:creator:id',
    key: 'name',
    description: 'Your Twitter user ID.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterSiteId: {
    name: 'twitter:site:id',
    key: 'name',
    description: 'Your Twitter user ID.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterData1: {
    name: 'twitter:data1',
    key: 'name',
    description: 'A description of the first data element specified in twitter:label1.',
    suggestions: [],
    links: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterLabel1: {
    name: 'twitter:label1',
    key: 'name',
    description: 'The text label to display for the first data element.',
    suggestions: [],
    links: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterData2: {
    name: 'twitter:data2',
    key: 'name',
    description: 'A description of the second data element specified in twitter:label2.',
    suggestions: [],
    links: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterLabel2: {
    name: 'twitter:label2',
    key: 'name',
    description: 'The text label to display for the second data element.',
    suggestions: [],
    links: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterImageHeight: {
    name: 'twitter:image:height',
    key: 'name',
    description: 'The height of the image in pixels.',
    suggestions: ['630'],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageType: {
    name: 'twitter:image:type',
    key: 'name',
    description: 'A MIME type for this image. of the format type/subtype. e.g. image/jpeg.',
    suggestions: [],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageWidth: {
    name: 'twitter:image:width',
    key: 'name',
    description: 'The width of the image in pixels.',
    suggestions: ['1200'],
    links: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  themeColor: {
    name: 'theme-color',
    key: 'name',
    description: 'Specifies the theme color for the browser chrome.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#theme-color',
    ],
    importance: 'optional',
  },
  msapplicationTileColor: {
    name: 'msapplication-TileColor',
    key: 'name',
    description: 'Specifies the color of the tile in the Microsoft\'s tile-based user interface.',
    suggestions: [],
    links: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
    importance: 'optional',
  },
  msapplicationConfig: {
    name: 'msapplication-config',
    key: 'name',
    description: 'Specifies the location of the browser configuration file on the server.',
    suggestions: [],
    links: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
  },
  msapplicationTileImage: {
    name: 'msapplication-TileImage',
    key: 'name',
    description: 'Specifies the location of the tile image on the server.',
    suggestions: [],
    links: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
  },
  keywords: {
    name: 'keywords',
    key: 'name',
    description: 'A comma-separated list of keywords relevant to the page.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#keywords',
    ],
    category: 'seo',
    importance: 'deprecated',
  },
  contentSecurityPolicy: {
    name: 'content-security-policy',
    key: 'http-equiv',
    description: 'Defines a policy for loading content from a server into a webpage.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy',
    ],
    category: 'security',
    importance: 'optional',
  },
  defaultStyle: {
    name: 'default-style',
    key: 'http-equiv',
    description: 'Specifies the preferred stylesheet to use when presenting the document.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#default-style',
    ],
    importance: 'not-recommended',
  },
  refresh: {
    name: 'refresh',
    key: 'http-equiv',
    description: 'Specifies a time interval, in seconds, to wait before reloading the page automatically.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#refresh',
    ],
    importance: 'not-recommended',
  },
  contentType: {
    name: 'content-type',
    key: 'http-equiv',
    description: 'Specifies the character encoding for the document.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#content-type',
    ],
    importance: 'not-recommended',
  },
  appleMobileWebAppCapable: {
    name: 'apple-mobile-web-app-capable',
    key: 'name',
    description: 'Specifies whether or not the web application runs in full-screen mode.',
    suggestions: [],
    links: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    category: 'pwa',
    importance: 'optional',
  },
  appleItunesApp: {
    name: 'apple-itunes-app',
    key: 'name',
    description: 'Lets you associate the app with your website.',
    suggestions: [],
    links: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    importance: 'optional',
  },
  appleMobileWebAppTitle: {
    name: 'apple-mobile-web-app-title',
    key: 'name',
    description: 'Specifies a name for the application.',
    suggestions: [],
    links: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    category: 'pwa',
    importance: 'optional',
  },
  appleMobileWebAppStatusBarStyle: {
    name: 'apple-mobile-web-app-status-bar-style',
    key: 'name',
    description: 'Specifies the style of the status bar when the application is running in full-screen mode.',
    suggestions: [],
    links: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    category: 'pwa',
    importance: 'optional',
  },
  xUaCompatible: {
    name: 'x-ua-compatible',
    key: 'http-equiv',
    description: 'Specifies the version of Internet Explorer.',
    suggestions: [],
    links: [
      'https://docs.microsoft.com/en-us/openspecs/ie_standards/ms-csprem/8b3c9b7a-1e3e-4e8f-9e1a-0b2e1b8f7f1a',
    ],
    importance: 'not-recommended',
  },
  mobileWebAppCapable: {
    name: 'mobile-web-app-capable',
    key: 'name',
    description: 'Specifies whether or not the web application runs in full-screen mode.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/Manifest',
    ],
    importance: 'optional',
    category: 'pwa',
  },
  formatDetection: {
    name: 'format-detection',
    key: 'name',
    description: 'Controls whether phone numbers are automatically turned into links by the browser.',
    suggestions: [],
    links: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#format-detection',
    ],
    importance: 'optional',
  },
  articleAuthor: {
    name: 'article:author',
    key: 'property',
    description: 'The author of the article.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
    category: 'seo',
    importance: 'optional',
  },
  articleExpirationTime: {
    name: 'article:expiration_time',
    key: 'property',
    description: 'When the article is out of date after.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
  },
  articleTag: {
    name: 'article:tag',
    key: 'property',
    description: 'Tag words associated with this article.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
  },
  articleModifiedTime: {
    name: 'article:modified_time',
    key: 'property',
    description: 'When the article was last changed.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
  },
  articlePublishedTime: {
    name: 'article:published_time',
    key: 'property',
    description: 'When the article was first published.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
  },
  articleSection: {
    name: 'article:section',
    key: 'property',
    description: 'A high-level section name. E.g. Technology',
    suggestions: [],
    links: [
      'https://ogp.me/#type_article',
    ],
  },
  bookAuthor: {
    name: 'book:author',
    key: 'property',
    description: 'The author of the book.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_book',
    ],
  },
  bookIsbn: {
    name: 'book:isbn',
    key: 'property',
    description: 'The ISBN',
    suggestions: [],
    links: [
      'https://ogp.me/#type_book',
    ],
  },
  bookTag: {
    name: 'book:tag',
    key: 'property',
    description: 'Tag words associated with this book.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_book',
    ],
  },
  bookReleaseDate: {
    name: 'book:release_date',
    key: 'property',
    description: 'The date the book was released.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_book',
    ],
  },
  profileFirstName: {
    name: 'profile:first_name',
    key: 'property',
    description: 'A name normally given to an individual by a parent or self-chosen.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileLastName: {
    name: 'profile:last_name',
    key: 'property',
    description: 'A name inherited from a family or marriage and by which the individual is commonly known.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileGender: {
    name: 'profile:gender',
    key: 'property',
    description: 'Gender of the profile subject.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileUsername: {
    name: 'profile:username',
    key: 'property',
    description: 'A short unique string to identify them.',
    suggestions: [],
    links: [
      'https://ogp.me/#type_profile',
    ],
  },
}

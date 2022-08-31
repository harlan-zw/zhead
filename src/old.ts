import { z } from 'zod'
import {
  GoogleBotContent,
  GoogleContent,
  MaxImagePreview,
  OgDeterminator,
  OgImageType,
  OgTypes,
  OgVideoType, TwitterCard,
} from './constants'
import { DocumentMetaData, VendorMetaData } from './z-schema'

export const MetaTags = {
  /**
   * Use this tag to provide a short description of the page.
   * In some situations, this description is used in the snippet shown in search results.
   */
  description: {
    type: DocumentMetaData,
    property: 'description',
    schema: z.string(),
  },

  colorScheme: {
    type: DocumentMetaData,
    property: 'color-scheme',
    // @todo enum
    schema: z.string(),
  },

  /**
   * This tag tells the browser how to render a page on a mobile device.
   * Presence of this tag indicates to Google that the page is mobile friendly.
   */
  viewport: {
    type: DocumentMetaData,
    property: 'viewport',
    // @todo make nicer
    schema: z.object({
      /**
       * Defines the pixel width of the viewport that you want the web site to be rendered at.
       */
      width: z.union([z.number().min(0), z.literal('device-width')]),
      /**
       * Defines the height of the viewport. Not used by any browser.
       */
      height: z.union([z.number().min(0), z.literal('device-height')]),
      /**
       * Defines the ratio between the device width
       * (device-width in portrait mode or device-height in landscape mode) and the viewport size.
       */
      initialScale: z.number().min(0).max(10),
      /**
       * Defines the maximum amount to zoom in.
       * It must be greater or equal to the minimum-scale or the behavior is undefined.
       * Browser settings can ignore this rule and iOS10+ ignores it by default.
       */
      maximumScale: z.number().min(0).max(10),
      /**
       * Defines the minimum zoom level. It must be smaller or equal to the maximum-scale or the behavior is undefined.
       * Browser settings can ignore this rule and iOS10+ ignores it by default.
       */
      minimumScale: z.number().min(0).max(10),
      /**
       * If set to no, the user is unable to zoom in the webpage.
       * The default is yes. Browser settings can ignore this rule, and iOS10+ ignores it by default.
       */
      userScalable: z.union([z.literal('yes'), z.literal('no')]),
      /**
       * The auto value doesn't affect the initial layout viewport, and the whole web page is viewable.
       *
       * The contain value means that the viewport is scaled to fit the largest rectangle inscribed within the display.
       *
       * The cover value means that the viewport is scaled to fill the device display.
       * It is highly recommended to make use of the safe area inset variables to ensure that important content
       * doesn't end up outside the display.
       */
      viewportFit: z.union([z.literal('auto'), z.literal('contain'), z.literal('cover')]),
    }),
  },

  rating: {
    type: DocumentMetaData,
    property: 'rating',
    schema: z.literal('adult'),
  },

  /**
   * Control the behavior of search engine crawling and indexing.
   */
  robots: {
    type: DocumentMetaData,
    property: 'robots',
    // @todo make nicer
    schema: z.object({
      /**
       * There are no restrictions for indexing or serving.
       * This directive is the default value and has no effect if explicitly listed.
       */
      all: z.boolean(),
      /**
       * Do not show this page, media, or resource in search results.
       * If you don't specify this directive, the page, media, or resource may be indexed and shown in search results.
       */
      noindex: z.boolean(),
      /**
       * Do not follow the links on this page.
       * If you don't specify this directive, Google may use the links on the page to discover those linked pages.
       */
      nofollow: z.boolean(),
      /**
       * Equivalent to noindex, nofollow.
       */
      none: z.boolean(),
      /**
       * Do not show a cached link in search results.
       * If you don't specify this directive,
       * Google may generate a cached page and users may access it through the search results.
       */
      noarchive: z.boolean(),
      /**
       * Do not show a sitelinks search box in the search results for this page.
       * If you don't specify this directive, Google may generate a search box specific to your site in search results,
       * along with other direct links to your site.
       */
      nositelinkssearchbox: z.boolean(),
      /**
       *
       * Do not show a text snippet or video preview in the search results for this page.
       * A static image thumbnail (if available) may still be visible, when it results in a better user experience.
       */
      nosnippet: z.boolean(),
      /**
       * Google is allowed to index the content of a page if it's embedded in another
       * page through iframes or similar HTML tags, in spite of a noindex directive.
       *
       * indexifembedded only has an effect if it's accompanied by noindex.
       */
      indexifembedded: z.boolean(),
      /**
       * Use a maximum of [number] characters as a textual snippet for this search result.
       */
      maxSnippet: z.number(),
      /**
       * Set the maximum size of an image preview for this page in a search results.
       */
      maxImagePreview: z.enum(MaxImagePreview),
      /**
       * Use a maximum of [number] seconds as a video snippet for videos on this page in search results.
       */
      maxVideoPreview: z.number(),
      /**
       * Don't offer translation of this page in search results.
       */
      notranslate: z.boolean(),
      /**
       * Do not show this page in search results after the specified date/time.
       */
      unavailableAfter: z.date(),
      /**
       * Do not index images on this page.
       */
      noimageindex: z.boolean(),
    }),
  },

  google: {
    type: DocumentMetaData,
    property: 'google',
    schema: z.enum(GoogleContent),
  },

  googlebot: {
    type: DocumentMetaData,
    property: 'googlebot',
    schema: z.enum(GoogleBotContent),
  },

  /**
   * You can use this tag on the top-level page of your site to verify ownership for Search Console.
   */
  googleSiteVerification: {
    type: DocumentMetaData,
    property: 'googlebot',
    schema: z.string(),
  },

  /**
   * The canonical URL for your page.
   *
   * This should be the undecorated URL, without session variables, user identifying parameters, or counters.
   * Likes and Shares for this URL will aggregate at this URL.
   *
   * For example: mobile domain URLs should point to the desktop version of the URL as the canonical URL to aggregate
   * Likes and Shares across different versions of the page.
   */
  url: {
    property: 'url',
    schema: z.string().url(),
  },

  // Pragma directives

  refresh: {
    type: {
      key: 'http-equiv',
      value: 'content',
    },
    property: 'refresh',
    schema: z.object({
      seconds: z.number().min(0),
      url: z.string().url(),
    }),
  },

  // Open Graph

  /**
   * The title of your page without any branding such as your site name.
   */
  ogTitle: {
    type: VendorMetaData,
    property: 'og:title',
    schema: z.string(),
  },
  /**
   * A brief description of the content, usually between 2 and 4 sentences.
   */
  ogDescription: {
    property: 'og:description',
    schema: z.string(),
  },

  ogType: {
    property: 'og:type',
    schema: z.enum(OgTypes),
  },

  /**
   * The locale of the resource. Defaults to en_US.
   */
  ogLocale: {
    property: 'og:locale',
    schema: z.string(),
  },

  /**
   * An array of other locales this page is available in.
   */
  ogLocaleAlternate: {
    property: 'og:locale:alternate',
    schema: z.string(),
  },

  /**
   * The word that appears before this object's title in a sentence.
   * An enum of (a, an, the, "", auto).
   * If auto is chosen, the consumer of your data should choose between "a" or "an".
   * Default is "" (blank).
   */
  ogDeterminer: {
    property: 'og:determiner',
    schema: z.enum(OgDeterminator),
  },
  /**
   * If your object is part of a larger website, the name which should be displayed for the overall site. e.g., "IMDb".
   */
  ogSiteName: {
    property: 'og:site-name',
    schema: z.string(),
  },

  // OpenGraph Video

  /**
   * The URL for the video. If you want the video to play in-line in Feed, you should use the https:// URL if possible.
   */
  ogVideo: {
    property: 'og:video',
    schema: z.string(),
  },
  /**
   * Equivalent to og:video
   */
  ogVideoUrl: {
    property: 'og:video:url',
    schema: z.string().url(),
  },
  /**
   *
   * Secure URL for the video. Include this even if you set the secure URL in og:video.
   */
  ogVideoSecureUrl: {
    property: 'og:video:secure_url',
    schema: z.string().url(),
  },
  /**
   * MIME type of the video.
   */
  ogVideoType: {
    property: 'og:video:type',
    schema: z.enum(OgVideoType),
  },

  /**
   * Width of video in pixels. This property is required for videos.
   */
  ogVideoWidth: {
    property: 'og:video:width',
    schema: z.number(),
  },

  /**
   * Height of video in pixels. This property is required for videos.
   */
  ogVideoHeight: {
    property: 'og:video:height',
    schema: z.number(),
  },

  // OpenGraph Image

  /**
   * The URL of the image that appears when someone shares the content.
   */
  ogImage: {
    property: 'og:image',
    schema: z.string().url(),
  },

  /**
   * Equivalent to og:image
   */
  ogImageUrl: {
    property: 'og:image:url',
    schema: z.string().url(),
  },
  /**
   *
   * https:// URL for the image
   */
  ogImageSecureUrl: {
    property: 'og:image:secure_url',
    schema: z.string().url(),
  },
  /**
   * MIME type of the image.
   */
  ogImageType: {
    property: 'og:image:type',
    schema: z.enum(OgImageType),
  },

  /**
   * Width of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
   */
  ogImageWidth: {
    property: 'og:image:width',
    schema: z.number(),
  },

  /**
   * Height of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
   */
  ogImageHeight: {
    property: 'og:image:height',
    schema: z.number(),
  },

  // Twitter meta

  /**
   * Your Facebook app ID.
   *
   * In order to use Facebook Insights you must add the app ID to your page.
   * Insights lets you view analytics for traffic to your site from Facebook. Find the app ID in your App Dashboard.
   */
  fbAppId: {
    property: 'fb:app_id',
    schema: z.string(),
  },
  /**
   * The card type
   *
   * Used with all cards
   */
  twitterCard: {
    property: 'twitter:card',
    schema: z.enum(TwitterCard),
  },
  /**
   * Title of content (max 70 characters)
   *
   * Used with summary, summary_large_image, player cards
   *
   * Same as `og:title`
   */
  twitterTitle: {
    property: 'twitter:title',
    schema: z.string().max(70),
  },
  /**
   * Description of content (maximum 200 characters)
   *
   * Used with summary, summary_large_image, player cards.
   *
   * Same as `og:description`
   */
  twitterDescription: {
    property: 'twitter:description',
    schema: z.string().max(200),
  },
  /**
   * URL of image to use in the card.
   * Images must be less than 5MB in size.
   * JPG, PNG, WEBP and GIF formats are supported.
   * Only the first frame of an animated GIF will be used. SVG is not supported.
   *
   * Used with summary, summary_large_image, player cards
   *
   * Same as `og:image`.
   */
  twitterImage: {
    property: 'twitter:image',
    schema: z.string().url(),
  },
  /**
   * A text description of the image conveying the essential nature of an image to users who are visually impaired.
   * Maximum 420 characters.
   *
   * Used with summary, summary_large_image, player cards
   *
   * Same as `og:image:alt`.
   */
  twitterImageAlt: {
    property: 'twitter:image:alt',
    schema: z.string().max(420),
  },
  /**
   * The @username of website. Either twitter:site or twitter:site:id is required.
   *
   * Used with summary, summary_large_image, app, player cards
   *
   * @example @harlan_zw
   */
  twitterSite: {
    property: 'twitter:site',
    schema: z.string().startsWith('@'),
  },
  /**
   * Same as twitter:site, but the user’s Twitter ID. Either twitter:site or twitter:site:id is required.
   *
   * Used with summary, summary_large_image, player cards
   *
   * @example 1296047337022742529
   */
  twitterSiteId: {
    property: 'twitter:site:id',
    schema: z.union([z.string(), z.number()]),
  },
  /**
   * The @username who created the pages content.
   *
   * Used with summary_large_image cards
   *
   * @example harlan_zw
   */
  twitterCreator: {
    property: 'twitter:creator',
    schema: z.string().startsWith('@'),
  },
  /**
   * Twitter user ID of content creator
   *
   * Used with summary, summary_large_image cards
   */
  twitterCreatorId: {
    property: 'twitter:creator:id',
    schema: z.union([z.string(), z.number()]),
  },
  /**
   * HTTPS URL of player iframe
   *
   * Used with player card
   */
  twitterPlayer: {
    property: 'twitter:player',
    schema: z.string().url(),
  },
  /**
   *
   * Width of iframe in pixels
   *
   * Used with player card
   */
  twitterPlayerWidth: {
    property: 'twitter:player:width',
    schema: z.number(),
  },
  /**
   * Height of iframe in pixels
   *
   * Used with player card
   */
  twitterPlayerHeight: {
    property: 'twitter:player:height',
    schema: z.number(),
  },
  /**
   * URL to raw video or audio stream
   *
   * Used with player card
   */
  twitterPlayerStream: {
    property: 'twitter:player:stream',
    schema: z.string().url(),
  },
  /**
   * Name of your iPhone app
   *
   * Used with app card
   */
  twitterAppNameIphone: {
    property: 'twitter:app:name:iphone',
    schema: z.string(),
  },
  /**
   * Your app ID in the iTunes App Store
   *
   * Used with app card
   */
  twitterAppIdIphone: {
    property: 'twitter:app:id:iphone',
    schema: z.string(),
  },
  /**
   * Your app’s custom URL scheme (you must include ”://” after your scheme name)
   *
   * Used with app card
   */
  twitterAppUrlIphone: {
    property: 'twitter:app:url:iphone',
    schema: z.string().url(),
  },
  /**
   * Name of your iPad optimized app
   *
   * Used with app card
   */
  twitterAppNameIpad: {
    property: 'twitter:app:name:ipad',
    schema: z.string(),
  },
  /**
   * Your app ID in the iTunes App Store
   *
   * Used with app card
   */
  twitterAppIdIpad: {
    property: 'twitter:app:id:ipad',
    schema: z.string(),
  },
  /**
   * Your app’s custom URL scheme
   *
   * Used with app card
   */
  twitterAppUrlIpad: {
    property: 'twitter:app:url:ipad',
    schema: z.string().url(),
  },
  /**
   * Name of your Android app
   *
   * Used with app card
   */
  twitterAppNameGoogleplay: {
    property: 'twitter:app:name:googleplay',
    schema: z.string().url(),
  },
  /**
   * Your app ID in the Google Play Store
   *
   * Used with app card
   */
  twitterAppIdGooglePlay: {
    property: 'twitter:app:id:googleplay',
    schema: z.string(),
  },
  /**
   * Your app’s custom URL scheme
   */
  twitterAppUrlGooglePlay: {
    property: 'twitter:app:url:googleplay',
    schema: z.string().url(),
  },
  /**
   * Top customizable data field, can be a relatively short string (ie “$3.99”)
   */
  twitterData1: {
    property: 'twitter:data1',
    schema: z.string(),
  },
  /**
   * Customizable label or units for the information in twitter:data1 (best practice: use all caps)
   */
  twitterLabel1: {
    property: 'twitter:label1',
    schema: z.string(),
  },
  /**
   * Bottom customizable data field, can be a relatively short string (ie “Seattle, WA”)
   */
  twitterData2: {
    property: 'twitter:data2',
    schema: z.string(),
  },
  /**
   * Customizable label or units for the information in twitter:data2 (best practice: use all caps)
   */
  twitterLabel2: {
    property: 'twitter:label2',
    schema: z.string(),
  },

} as const

import { z } from 'zod'
import { maybeArray, maybeString } from './utils'
import {
  AppleMobileWebAppStatusBarStyle,
  GoogleBotContent,
  GoogleContent,
  MaxImagePreview,
  OgDeterminator,
  OgImageType,
  OgTypes,
  OgVideoType, ReferrerPolicy, TwitterCard,
} from '.'

export const MetaFlatDocumentSchema = z.object({
  /**
   * This attribute declares the document's character encoding.
   * If the attribute is present, its value must be an ASCII case-insensitive match for the string "utf-8",
   * because UTF-8 is the only valid encoding for HTML5 documents.
   * <meta> elements which declare a character encoding must be located entirely within the first 1024 bytes
   * of the document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset
   */
  charset: z.string(),
  /**
   * Use this tag to provide a short description of the page.
   * In some situations, this description is used in the snippet shown in search results.
   *
   * @see https://developers.google.com/search/docs/advanced/appearance/snippet#meta-descriptions
   */
  description: z.string(),
  /**
   * Specifies one or more color schemes with which the document is compatible.
   * The browser will use this information in tandem with the user's browser or device settings to determine what colors
   * to use for everything from background and foregrounds to form controls and scrollbars.
   * The primary use for <meta name="color-scheme"> is to indicate compatibility with—and order of preference
   * for—light and dark color modes.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
   */
  colorScheme: z.string(),
  /**
   * The name of the application running in the web page.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
   */
  applicationName: z.string(),
  /**
   * The name of the document's author.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
   */
  author: z.string(),
  /**
   * The name of the creator of the document, such as an organization or institution.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names
   */
  creator: z.string(),
  /**
   * The name of the document's publisher.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names
   */
  publisher: z.string(),
  /**
   * The identifier of the software that generated the page.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification
   */
  generator: z.string(),
  /**
   * Controls the HTTP Referer header of requests sent from the document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification
   */
  referrer: z.enum(ReferrerPolicy),
  /**
   * This tag tells the browser how to render a page on a mobile device.
   * Presence of this tag indicates to Google that the page is mobile friendly.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications
   */
  viewport: maybeString(
    z.object({
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
    }).partial(),
  ),

  /**
   * Control the behavior of search engine crawling and indexing.
   */
  robots: maybeString(
    z.object({
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
      unavailable_after: z.date(),
      /**
       * Do not index images on this page.
       */
      noimageindex: z.boolean(),
    }).partial(),
  ),
  google: z.enum(GoogleContent),
  googlebot: z.enum(GoogleBotContent),

  /**
   * You can use this tag on the top-level page of your site to verify ownership for Search Console.
   */
  googleSiteVerification: z.string(),

  /**
   * Labels a page as containing adult content, to signal that it be filtered by SafeSearch results.
   * @see https://developers.google.com/search/docs/advanced/guidelines/safesearch
   */
  rating: z.literal('adult'),
})

export const MetaFlatPragmaSchema = z.object({
  contentSecurityPolicy: z.union([
    z.string(),
    z.object({
      childSrc: z.string(),
      connectSrc: z.string(),
      defaultSrc: z.string(),
      fontSrc: z.string(),
      imgSrc: z.string(),
      manifestSrc: z.string(),
      mediaSrc: z.string(),
      objectSrc: z.string(),
      prefetchSrc: z.string(),
      scriptSrc: z.string(),
      scriptSrcElem: z.string(),
      scriptSrcAttr: z.string(),
      styleSrc: z.string(),
      styleSrcElem: z.string(),
      styleSrcAttr: z.string(),
      workerSrc: z.string(),
      baseUri: z.string(),
      sandbox: z.string(),
      formAction: z.string(),
      frameAncestors: z.string(),
      navigateTo: z.string(),
      reportUri: z.string(),
      reportTo: z.string(),
      requireSriFor: z.string(),
      requireTrustedTypesFor: z.string(),
      trustedTypes: z.string(),
      upgradeInsecureRequests: z.string(),
    }).partial(),
  ]),
  contentType: z.literal('text/html; charset=utf-8'),
  defaultStyle: z.string(),
  xUaCompatible: z.literal('IE=edge'),
  refresh: z.union([
    z.string(),
    z.object({
      seconds: z.number().min(0),
      url: z.string().url(),
    }),
  ]),
})

export const MetaFlatRFDaSchema = z.object({
  /**
   * The canonical URL for your page.
   *
   * This should be the undecorated URL, without session variables, user identifying parameters, or counters.
   * Likes and Shares for this URL will aggregate at this URL.
   *
   * For example: mobile domain URLs should point to the desktop version of the URL as the canonical URL to aggregate
   * Likes and Shares across different versions of the page.
   */
  ogUrl: z.string().url(),

  /**
   * The title of your page without any branding such as your site name.
   */
  ogTitle: z.string(),
  /**
   * A brief description of the content, usually between 2 and 4 sentences.
   */
  ogDescription: z.string(),

  /**
   * The type of media of your content. This tag impacts how your content shows up in Feed. If you don't specify a type,
   * the default is website.
   * Each URL should be a single object, so multiple og:type values are not possible.
   */
  ogType: z.enum(OgTypes),

  /**
   * The locale of the resource. Defaults to en_US.
   */
  ogLocale: z.string(),

  /**
   * An array of other locales this page is available in.
   */
  ogLocaleAlternate: maybeArray(z.string()),

  /**
   * The word that appears before this object's title in a sentence.
   * An enum of (a, an, the, "", auto).
   * If auto is chosen, the consumer of your data should choose between "a" or "an".
   * Default is "" (blank).
   */
  ogDeterminer: z.enum(OgDeterminator),
  /**
   * If your object is part of a larger website, the name which should be displayed for the overall site. e.g., "IMDb".
   */
  ogSiteName: z.string(),

  // OpenGraph Video

  /**
   * The URL for the video. If you want the video to play in-line in Feed, you should use the https:// URL if possible.
   */
  ogVideo: z.string(),
  /**
   * Equivalent to og:video
   */
  ogVideoUrl: z.string().url(),
  /**
   *
   * Secure URL for the video. Include this even if you set the secure URL in og:video.
   */
  ogVideoSecureUrl: z.string().url(),
  /**
   * MIME type of the video.
   */
  ogVideoType: z.enum(OgVideoType),

  /**
   * Width of video in pixels. This property is required for videos.
   */
  ogVideoWidth: maybeString(z.number()),

  /**
   * Height of video in pixels. This property is required for videos.
   */
  ogVideoHeight: maybeString(z.number()),

  // OpenGraph Image

  /**
   * The URL of the image that appears when someone shares the content.
   */
  ogImage: z.string().url(),

  /**
   * Equivalent to og:image
   */
  ogImageUrl: z.string().url(),
  /**
   *
   * https:// URL for the image
   */
  ogImageSecureUrl: z.string().url(),
  /**
   * MIME type of the image.
   */
  ogImageType: z.enum(OgImageType),

  /**
   * Width of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
   */
  ogImageWidth: maybeString(z.number()),

  /**
   * Height of image in pixels. Specify height and width for your image to ensure that the image loads properly the first time it's shared.
   */
  ogImageHeight: maybeString(z.number()),

  // Twitter meta

  /**
   * Your Facebook app ID.
   *
   * In order to use Facebook Insights you must add the app ID to your page.
   * Insights lets you view analytics for traffic to your site from Facebook. Find the app ID in your App Dashboard.
   */
  fbAppId: maybeString(z.number()),
  /**
   * The card type
   *
   * Used with all cards
   */
  twitterCard: z.enum(TwitterCard),
  /**
   * Title of content (max 70 characters)
   *
   * Used with summary, summary_large_image, player cards
   *
   * Same as `og:title`
   */
  twitterTitle: z.string().max(70),
  /**
   * Description of content (maximum 200 characters)
   *
   * Used with summary, summary_large_image, player cards.
   *
   * Same as `og:description`
   */
  twitterDescription: z.string().max(200),
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
  twitterImage: z.string().url(),
  /**
   * A text description of the image conveying the essential nature of an image to users who are visually impaired.
   * Maximum 420 characters.
   *
   * Used with summary, summary_large_image, player cards
   *
   * Same as `og:image:alt`.
   */
  twitterImageAlt: z.string().max(420),
  /**
   * The @username of website. Either twitter:site or twitter:site:id is required.
   *
   * Used with summary, summary_large_image, app, player cards
   *
   * @example @harlan_zw
   */
  twitterSite: z.string().startsWith('@'),
  /**
   * Same as twitter:site, but the user’s Twitter ID. Either twitter:site or twitter:site:id is required.
   *
   * Used with summary, summary_large_image, player cards
   *
   * @example 1296047337022742529
   */
  twitterSiteId: maybeString(z.number()),
  /**
   * The @username who created the pages content.
   *
   * Used with summary_large_image cards
   *
   * @example harlan_zw
   */
  twitterCreator: z.string().startsWith('@'),
  /**
   * Twitter user ID of content creator
   *
   * Used with summary, summary_large_image cards
   */
  twitterCreatorId: maybeString(z.number()),
  /**
   * HTTPS URL of player iframe
   *
   * Used with player card
   */
  twitterPlayer: z.string().url(),
  /**
   *
   * Width of iframe in pixels
   *
   * Used with player card
   */
  twitterPlayerWidth: maybeString(z.number()),
  /**
   * Height of iframe in pixels
   *
   * Used with player card
   */
  twitterPlayerHeight: maybeString(z.number()),
  /**
   * URL to raw video or audio stream
   *
   * Used with player card
   */
  twitterPlayerStream: z.string().url(),
  /**
   * Name of your iPhone app
   *
   * Used with app card
   */
  twitterAppNameIphone: z.string(),
  /**
   * Your app ID in the iTunes App Store
   *
   * Used with app card
   */
  twitterAppIdIphone: z.string(),
  /**
   * Your app’s custom URL scheme (you must include ”://” after your scheme name)
   *
   * Used with app card
   */
  twitterAppUrlIphone: z.string().url(),
  /**
   * Name of your iPad optimized app
   *
   * Used with app card
   */
  twitterAppNameIpad: z.string(),
  /**
   * Your app ID in the iTunes App Store
   *
   * Used with app card
   */
  twitterAppIdIpad: z.string(),
  /**
   * Your app’s custom URL scheme
   *
   * Used with app card
   */
  twitterAppUrlIpad: z.string().url(),
  /**
   * Name of your Android app
   *
   * Used with app card
   */
  twitterAppNameGoogleplay: z.string().url(),
  /**
   * Your app ID in the Google Play Store
   *
   * Used with app card
   */
  twitterAppIdGoogleplay: z.string(),
  /**
   * Your app’s custom URL scheme
   */
  twitterAppUrlGoogleplay: z.string().url(),
  /**
   * Top customizable data field, can be a relatively short string (ie “$3.99”)
   */
  twitterData1: z.string(),
  /**
   * Customizable label or units for the information in twitter:data1 (best practice: use all caps)
   */
  twitterLabel1: z.string(),
  /**
   * Bottom customizable data field, can be a relatively short string (ie “Seattle, WA”)
   */
  twitterData2: z.string(),
  /**
   * Customizable label or units for the information in twitter:data2 (best practice: use all caps)
   */
  twitterLabel2: z.string(),

})

export const MetaFlatDevices = z.object({
  /**
   * Indicates a suggested color that user agents should use to customize the display of the page or
   * of the surrounding user interface.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
   */
  themeColor: z.string(),
  /**
   * Sets whether a web application runs in full-screen mode.
   */
  mobileWebAppCapable: z.literal('yes'),
  /**
   * Sets whether a web application runs in full-screen mode.
   *
   * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
   */
  appleMobileWebAppCapable: z.literal('yes'),
  /**
   * Sets the style of the status bar for a web application.
   *
   * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
   */
  appleMobileWebAppStatusBarStyle: z.enum(AppleMobileWebAppStatusBarStyle),
  /**
   * Make the app title different from the page title.
   */
  appleMobileWebAppTitle: z.string(),
  /**
   * Enables or disables automatic detection of possible phone numbers in a webpage in Safari on iOS.
   *
   * @see https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html
   */
  formatDetection: z.literal('telephone=no'),
  /**
   * Tile image for windows.
   */
  msapplicationTileImage: z.string().url(),
  /**
   * Tile colour for windows
   */
  msapplicationTileColor: z.string(),
  /**
   * URL of a config for windows tile.
   */
  msapplicationConfig: z.string().url(),
})

export const MetaFlatSchema
  = z.object({})
    .merge(MetaFlatDocumentSchema)
    .merge(MetaFlatPragmaSchema)
    .merge(MetaFlatRFDaSchema)
    .merge(MetaFlatDevices)
    .partial()

export type MetaFlatInput = z.infer<typeof MetaFlatSchema>

export function defineMetaFlat<T extends MetaFlatInput>(input: T) {
  return input
}

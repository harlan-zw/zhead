import type { MetaFlat } from 'zhead'
import { appleItunesApp } from './meta/en/apple-itunes-app'
import { appleMobileWebAppCapable } from './meta/en/apple-mobile-web-app-capable'
import { appleMobileWebAppStatusBarStyle } from './meta/en/apple-mobile-web-app-status-bar-style'
import { appleMobileWebAppTitle } from './meta/en/apple-mobile-web-app-title'
import { applicationName } from './meta/en/application-name'
import { articleAuthor } from './meta/en/article:author'
import { articleExpirationTime } from './meta/en/article:expiration_time'
import { articleModifiedTime } from './meta/en/article:modified_time'
import { articlePublishedTime } from './meta/en/article:published_time'
import { articleSection } from './meta/en/article:section'
import { articleTag } from './meta/en/article:tag'
import { author } from './meta/en/author'
import { bookAuthor } from './meta/en/book:author'
import { bookIsbn } from './meta/en/book:isbn'
import { bookReleaseDate } from './meta/en/book:release_date'
import { bookTag } from './meta/en/book:tag'
import { charset } from './meta/en/charset'
import { colorScheme } from './meta/en/color-scheme'
import { contentSecurityPolicy } from './meta/en/content-security-policy'
import { contentType } from './meta/en/content-type'
import { creator } from './meta/en/creator'
import { defaultStyle } from './meta/en/default-style'
import { description } from './meta/en/description'
import { fbAppId } from './meta/en/fb:app_id'
import { formatDetection } from './meta/en/format-detection'
import { generator } from './meta/en/generator'
import { google } from './meta/en/google'
import { googleSiteVerification } from './meta/en/google-site-verification'
import { googlebot } from './meta/en/googlebot'
import { googlebotNews } from './meta/en/googlebot-news'
import { keywords } from './meta/en/keywords'
import { mobileWebAppCapable } from './meta/en/mobile-web-app-capable'
import { msapplicationConfig } from './meta/en/msapplication-config'
import { msapplicationTileColor } from './meta/en/msapplication-TileColor'
import { msapplicationTileImage } from './meta/en/msapplication-TileImage'
import { ogAudio } from './meta/en/og:audio'
import { ogAudioSecureUrl } from './meta/en/og:audio:secure_url'
import { ogAudioType } from './meta/en/og:audio:type'
import { ogAudioUrl } from './meta/en/og:audio:url'
import { ogDescription } from './meta/en/og:description'
import { ogDeterminer } from './meta/en/og:determiner'
import { ogImage } from './meta/en/og:image'
import { ogImageAlt } from './meta/en/og:image:alt'
import { ogImageHeight } from './meta/en/og:image:height'
import { ogImageSecureUrl } from './meta/en/og:image:secure_url'
import { ogImageType } from './meta/en/og:image:type'
import { ogImageUrl } from './meta/en/og:image:url'
import { ogImageWidth } from './meta/en/og:image:width'
import { ogLocale } from './meta/en/og:locale'
import { ogLocaleAlternate } from './meta/en/og:locale:alternate'
import { ogSiteName } from './meta/en/og:site_name'
import { ogTitle } from './meta/en/og:title'
import { ogType } from './meta/en/og:type'
import { ogUrl } from './meta/en/og:url'
import { ogVideo } from './meta/en/og:video'
import { ogVideoAlt } from './meta/en/og:video:alt'
import { ogVideoHeight } from './meta/en/og:video:height'
import { ogVideoSecureUrl } from './meta/en/og:video:secure_url'
import { ogVideoType } from './meta/en/og:video:type'
import { ogVideoUrl } from './meta/en/og:video:url'
import { ogVideoWidth } from './meta/en/og:video:width'
import { profileFirstName } from './meta/en/profile:first_name'
import { profileGender } from './meta/en/profile:gender'
import { profileLastName } from './meta/en/profile:last_name'
import { profileUsername } from './meta/en/profile:username'
import { publisher } from './meta/en/publisher'
import { rating } from './meta/en/rating'
import { referrer } from './meta/en/referrer'
import { refresh } from './meta/en/refresh'
import { robots } from './meta/en/robots'
import { themeColor } from './meta/en/theme-color'
import { twitterAppIdIpad } from './meta/en/twitter:app:id:ipad'
import { twitterAppIdIphone } from './meta/en/twitter:app:id:iphone'
import { twitterAppIdGoogleplay } from './meta/en/twitter:app:id:googleplay'
import { twitterAppNameGoogleplay } from './meta/en/twitter:app:name:googleplay'
import { twitterAppNameIphone } from './meta/en/twitter:app:name:iphone'
import { twitterAppNameIpad } from './meta/en/twitter:app:name:ipad'
import { twitterAppUrlGoogleplay } from './meta/en/twitter:app:url:googleplay'
import { twitterAppUrlIpad } from './meta/en/twitter:app:url:ipad'
import { twitterAppUrlIphone } from './meta/en/twitter:app:url:iphone'
import { twitterCard } from './meta/en/twitter:card'
import { twitterCreator } from './meta/en/twitter:creator'
import { twitterCreatorId } from './meta/en/twitter:creator:id'
import { twitterData1 } from './meta/en/twitter:data1'
import { twitterData2 } from './meta/en/twitter:data2'
import { twitterDescription } from './meta/en/twitter:description'
import { twitterImage } from './meta/en/twitter:image'
import { twitterImageAlt } from './meta/en/twitter:image:alt'
import { twitterImageHeight } from './meta/en/twitter:image:height'
import { twitterImageType } from './meta/en/twitter:image:type'
import { twitterImageWidth } from './meta/en/twitter:image:width'
import { twitterLabel1 } from './meta/en/twitter:label1'
import { twitterLabel2 } from './meta/en/twitter:label2'
import { twitterPlayer } from './meta/en/twitter:player'
import { twitterPlayerHeight } from './meta/en/twitter:player:height'
import { twitterPlayerStream } from './meta/en/twitter:player:stream'
import { twitterPlayerWidth } from './meta/en/twitter:player:width'
import { twitterSite } from './meta/en/twitter:site'
import { twitterSiteId } from './meta/en/twitter:site:id'
import { twitterTitle } from './meta/en/twitter:title'
import { viewport } from './meta/en/viewport'
import { xUaCompatible } from './meta/en/x-ua-compatible'

export interface MetaSchema {
  name: string
  key: 'charset' | 'name' | 'property' | 'http-equiv'
  type?: 'standard' | 'facebook' | 'twitter' | 'google' | 'robots' | 'other' | 'open-graph-protocol'
  description: string
  color?: string
  examples: { value: string, description: string }[]
  tips?: { title: string, description: string }[]
  tags?: string | string[]
  documentation?: string[]
  parameters?: { value: string, description: string }[]
}

export type { MetaFlat }

export const metaFlatSchema: Record<keyof MetaFlat, MetaSchema> = {
  appleItunesApp,
  appleMobileWebAppCapable,
  appleMobileWebAppStatusBarStyle,
  appleMobileWebAppTitle,
  applicationName,
  articleAuthor,
  articleExpirationTime,
  articleModifiedTime,
  articlePublishedTime,
  articleSection,
  articleTag,
  author,
  bookAuthor,
  bookIsbn,
  bookReleaseDate,
  bookTag,
  charset,
  colorScheme,
  contentSecurityPolicy,
  contentType,
  creator,
  defaultStyle,
  description,
  fbAppId,
  formatDetection,
  generator,
  google,
  googleSiteVerification,
  googlebot,
  googlebotNews,
  keywords,
  mobileWebAppCapable,
  msapplicationConfig,
  msapplicationTileColor,
  msapplicationTileImage,
  ogAudio,
  ogAudioSecureUrl,
  ogAudioType,
  ogAudioUrl,
  ogDescription,
  ogDeterminer,
  ogImage,
  ogImageAlt,
  ogImageHeight,
  ogImageSecureUrl,
  ogImageType,
  ogImageUrl,
  ogImageWidth,
  ogLocale,
  ogLocaleAlternate,
  ogSiteName,
  ogTitle,
  ogType,
  ogUrl,
  ogVideo,
  ogVideoAlt,
  ogVideoHeight,
  ogVideoSecureUrl,
  ogVideoType,
  ogVideoUrl,
  ogVideoWidth,
  profileFirstName,
  profileGender,
  profileLastName,
  profileUsername,
  publisher,
  rating,
  referrer,
  refresh,
  robots,
  themeColor,
  twitterAppIdIpad,
  twitterAppIdIphone,
  twitterAppIdGoogleplay,
  twitterAppNameIpad,
  twitterAppNameGoogleplay,
  twitterAppNameIphone,
  twitterAppUrlGoogleplay,
  twitterAppUrlIpad,
  twitterAppUrlIphone,
  twitterCard,
  twitterCreator,
  twitterCreatorId,
  twitterData1,
  twitterData2,
  twitterDescription,
  twitterImage,
  twitterImageAlt,
  twitterImageHeight,
  twitterImageType,
  twitterImageWidth,
  twitterLabel1,
  twitterLabel2,
  twitterPlayer,
  twitterPlayerHeight,
  twitterPlayerStream,
  twitterPlayerWidth,
  twitterSite,
  twitterSiteId,
  twitterTitle,
  viewport,
  xUaCompatible,
}

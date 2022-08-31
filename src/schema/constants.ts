export const Rel = [
  'alternate',
  'author',
  'bookmark',
  'canonical',
  'dns-prefetch',
  'external',
  'help',
  'icon',
  'license',
  'manifest',
  'me',
  'modulepreload',
  'next',
  'nofollow',
  'noopener',
  'noreferrer',
  'opener',
  'pingback',
  'preconnect',
  'prefetch',
  'preload',
  'prerender',
  'prev',
  'search',
  'shortlink',
  'stylesheet',
  'tag',
] as const

export const StandardMetaDataNames = [
  // HTML specification
  'application-name',
  'author',
  'description',
  'generator',
  'keywords',
  'referrer',
  'theme-color',
  'color-scheme',
  // CSS Device Adaptation specification
  'viewport',
  // Extensions
  'creator',
  'googlebot',
  'robots',
  'publisher',
] as const

export const HttpEquiv = [
  'content-security-policy',
  'content-type',
  'default-style',
  'x-ua-compatible',
  'refresh',
] as const

export const ScriptType = [
  '',
  'text/javascript',
  'module',
] as const

export const ReferrerPolicy = [
  '',
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
] as const

export const FetchPriority = [
  'high',
  'low',
  'auto',
] as const

export const CrossOrigin = [
  '',
  'anonymous',
  'use-credentials',
] as const

/**
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
 */
export const LinkAs = [
  'audio',
  'document',
  'embed',
  'fetch',
  'font',
  'image',
  'object',
  'script',
  'style',
  'track',
  'video',
  'worker',
] as const

export const GoogleContent = [
  /**
   * When users search for your site, Google Search results sometimes display a search box specific to your site,
   * along with other direct links to your site. This tag tells Google not to show the sitelinks search box.
   */
  'nositelinkssearchbox',
  /**
   * Prevents various Google text-to-speech services from reading aloud web pages using text-to-speech (TTS).
   */
  'nopagereadaloud',
] as const

export const GoogleBotContent = [
  /**
   * When Google recognizes that the contents of a page aren't in the language that the user likely wants to read,
   * Google may provide a translated title link and snippet in search results.
   */
  'notranslate',
  // @todo robots
] as const

export const MaxImagePreview = [
  'none', 'standard', 'large',
] as const

export const OgTypes = [
  'website', 'article', 'book', 'profile',
  // Namespace URI https://ogp.me/ns/music#
  'music.song', 'music.album', 'music.playlist', 'music.radio_status',
  // Namespace URI https://ogp.me/ns/video#
  'video.movie', 'video.episode', 'video.tv_show', 'video.other',
] as const

export const OgDeterminator = [
  'a', 'an', 'the', '', 'auto',
] as const

export const OgVideoType = [
  'application/x-shockwave-flash', 'video/mp4',
] as const

export const OgImageType = [
  'image/jpeg', 'image/gif', 'image/png',
] as const

export const TwitterCard = [
  'summary', 'summary_large_image', 'app', 'player',
] as const

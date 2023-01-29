import { describe, it } from 'vitest'
import { packMeta, unpackMeta } from 'zhead'

describe('unpackMeta', () => {
  it('null values', () => {
    const tags = unpackMeta({
      ogTitle: 'should stay',
      description: null,
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "should stay",
          "property": "og:title",
        },
      ]
    `)
  })

  it('charset', () => {
    const tags = unpackMeta({
      charset: 'utf-8',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "charset": "utf-8",
        },
      ]
    `)
  })

  // done
  it('define document', () => {
    const tags = unpackMeta({
      description: 'test',
      colorScheme: 'dark',
      applicationName: 'My website',
      author: 'Harlan Wilton',
      creator: 'Harlan Wilton',
      publisher: 'Harlan Wilton',
      generator: 'Nuxt',
      referrer: 'no-referrer',
      robots: {
        noindex: true,
        nofollow: true,
        maxSnippet: 20,
        maxImagePreview: 'large',
      },
      viewport: {
        width: 600,
        height: 600,
        userScalable: 'yes',
        maximumScale: 5,
        initialScale: 1,
        viewportFit: 'auto',
      },
      appleItunesApp: {
        appId: '123456789',
        appArgument: 'https://example.com',
      },
      google: 'nositelinkssearchbox',
      googlebot: 'notranslate',
      googleSiteVerification: '1234567890',
      rating: 'adult',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "test",
          "name": "description",
        },
        {
          "content": "dark",
          "name": "color-scheme",
        },
        {
          "content": "My website",
          "name": "application-name",
        },
        {
          "content": "Harlan Wilton",
          "name": "author",
        },
        {
          "content": "Harlan Wilton",
          "name": "creator",
        },
        {
          "content": "Harlan Wilton",
          "name": "publisher",
        },
        {
          "content": "Nuxt",
          "name": "generator",
        },
        {
          "content": "no-referrer",
          "name": "referrer",
        },
        {
          "content": "noindex, nofollow, max-snippet:20, max-image-preview:large",
          "name": "robots",
        },
        {
          "content": "width=600, height=600, user-scalable=yes, maximum-scale=5, initial-scale=1, viewport-fit=auto",
          "name": "viewport",
        },
        {
          "content": "app-id=123456789, app-argument=https://example.com",
          "name": "apple-itunes-app",
        },
        {
          "content": "nositelinkssearchbox",
          "name": "google",
        },
        {
          "content": "notranslate",
          "name": "googlebot",
        },
        {
          "content": "1234567890",
          "name": "google-site-verification",
        },
        {
          "content": "adult",
          "name": "rating",
        },
      ]
    `)
  })
  // done
  it('define document strings', () => {
    const tags = unpackMeta({
      robots: 'noindex, nofollow, max-snippet:20, max-image-preview:large',
      viewport: 'width=600, height=600, user-scalable=yes, maximum-scale=5, initial-scale=1, viewport-fit=auto',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "noindex, nofollow, max-snippet:20, max-image-preview:large",
          "name": "robots",
        },
        {
          "content": "width=600, height=600, user-scalable=yes, maximum-scale=5, initial-scale=1, viewport-fit=auto",
          "name": "viewport",
        },
      ]
    `)
  })

  // done
  it('define pragma', () => {
    const tags = unpackMeta({
      refresh: {
        seconds: 5,
        url: 'https://example.com',
      },
      contentType: 'text/html; charset=utf-8',
      contentSecurityPolicy: {
        defaultSrc: '\'self\' https://example.com',
        contentSrc: 'none',
      },
      defaultStyle: 'main',
      xUaCompatible: 'IE=edge',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "5;url=https://example.com",
          "http-equiv": "refresh",
        },
        {
          "content": "text/html; charset=utf-8",
          "http-equiv": "content-type",
        },
        {
          "content": "default-src 'self' https://example.com; content-src none",
          "http-equiv": "content-security-policy",
        },
        {
          "content": "main",
          "http-equiv": "default-style",
        },
        {
          "content": "IE=edge",
          "http-equiv": "x-ua-compatible",
        },
      ]
    `)
  })
  // done
  it('define pragma strings', () => {
    const tags = unpackMeta({
      refresh: '5;url=https://example.com',
      contentSecurityPolicy: 'default-src \'self\' https://example.com; content-src none',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "5;url=https://example.com",
          "http-equiv": "refresh",
        },
        {
          "content": "default-src 'self' https://example.com; content-src none",
          "http-equiv": "content-security-policy",
        },
      ]
    `)
  })

  it('define device', () => {
    const tags = unpackMeta({
      themeColor: 'red',
      mobileWebAppCapable: 'yes',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      appleMobileWebAppTitle: 'my app',
      formatDetection: 'telephone=no',
      msapplicationTileImage: 'https://example.com/icon.png',
      msapplicationTileColor: 'red',
      msapplicationConfig: 'config.xml',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "red",
          "name": "theme-color",
        },
        {
          "content": "yes",
          "name": "mobile-web-app-capable",
        },
        {
          "content": "yes",
          "name": "apple-mobile-web-app-capable",
        },
        {
          "content": "black",
          "name": "apple-mobile-web-app-status-bar-style",
        },
        {
          "content": "my app",
          "name": "apple-mobile-web-app-title",
        },
        {
          "content": "telephone=no",
          "name": "format-detection",
        },
        {
          "content": "https://example.com/icon.png",
          "name": "msapplication-TileImage",
        },
        {
          "content": "red",
          "name": "msapplication-TileColor",
        },
        {
          "content": "config.xml",
          "name": "msapplication-Config",
        },
      ]
    `)
  })

  it('define RFDa', () => {
    const tags = unpackMeta({
      ogUrl: 'https://example.com',
      ogTitle: 'my title',
      ogDescription: 'my description',
      ogType: 'website',
      ogLocale: 'en_US',
      ogLocaleAlternate: 'en_US',
      ogDeterminer: 'the',
      ogSiteName: 'my site',
      ogVideo: 'https://example.com/video.mp4',
      ogVideoUrl: 'https://example.com/video.mp4',
      ogVideoSecureUrl: 'https://example.com/video.mp4',
      ogVideoType: 'video/mp4',
      ogVideoWidth: '1280',
      ogVideoHeight: 720,
      ogImage: 'https://example.com/image.png',
      ogImageUrl: 'https://example.com/image.png',
      ogImageSecureUrl: 'https://example.com/image.png',
      ogImageType: 'image/png',
      ogImageWidth: '1280',
      ogImageHeight: 720,
      fbAppId: '1234567890',
      twitterCard: 'summary',
      twitterTitle: 'my title',
      twitterDescription: 'my description',
      twitterImage: 'https://example.com/image.png',
      twitterImageAlt: 'my image',
      twitterSite: '@my_site',
      twitterSiteId: '1234567890',
      twitterCreator: '@my_creator',
      twitterCreatorId: '1234567890',
      twitterPlayer: 'https://example.com/video.mp4',
      twitterPlayerWidth: '1280',
      twitterPlayerHeight: 720,
      twitterPlayerStream: 'https://example.com/video.mp4',
      twitterAppNameIphone: 'my app',
      twitterAppIdIphone: '1234567890',
      twitterAppUrlIphone: 'https://example.com',
      twitterAppNameIpad: 'my app',
      twitterAppIdIpad: '1234567890',
      twitterAppUrlIpad: 'https://example.com',
      twitterAppNameGoogleplay: 'my app',
      twitterAppIdGoogleplay: '1234567890',
      twitterAppUrlGoogleplay: 'https://example.com',
      twitterData1: 'my data',
      twitterLabel1: 'my label',
      twitterData2: 'my data',
      twitterLabel2: 'my label',
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "https://example.com",
          "property": "og:url",
        },
        {
          "content": "my title",
          "property": "og:title",
        },
        {
          "content": "my description",
          "property": "og:description",
        },
        {
          "content": "website",
          "property": "og:type",
        },
        {
          "content": "en_US",
          "property": "og:locale",
        },
        {
          "content": "en_US",
          "property": "og:locale:alternate",
        },
        {
          "content": "the",
          "property": "og:determiner",
        },
        {
          "content": "my site",
          "property": "og:site:name",
        },
        {
          "content": "https://example.com/video.mp4",
          "property": "og:video",
        },
        {
          "content": "https://example.com/video.mp4",
          "property": "og:video:url",
        },
        {
          "content": "https://example.com/video.mp4",
          "property": "og:video:secure_url",
        },
        {
          "content": "video/mp4",
          "property": "og:video:type",
        },
        {
          "content": "1280",
          "property": "og:video:width",
        },
        {
          "content": "720",
          "property": "og:video:height",
        },
        {
          "content": "https://example.com/image.png",
          "property": "og:image",
        },
        {
          "content": "https://example.com/image.png",
          "property": "og:image:url",
        },
        {
          "content": "https://example.com/image.png",
          "property": "og:image:secure_url",
        },
        {
          "content": "image/png",
          "property": "og:image:type",
        },
        {
          "content": "1280",
          "property": "og:image:width",
        },
        {
          "content": "720",
          "property": "og:image:height",
        },
        {
          "content": "1234567890",
          "property": "fb:app_id",
        },
        {
          "content": "summary",
          "name": "twitter:card",
        },
        {
          "content": "my title",
          "name": "twitter:title",
        },
        {
          "content": "my description",
          "name": "twitter:description",
        },
        {
          "content": "https://example.com/image.png",
          "name": "twitter:image",
        },
        {
          "content": "my image",
          "name": "twitter:image:alt",
        },
        {
          "content": "@my_site",
          "name": "twitter:site",
        },
        {
          "content": "1234567890",
          "name": "twitter:site:id",
        },
        {
          "content": "@my_creator",
          "name": "twitter:creator",
        },
        {
          "content": "1234567890",
          "name": "twitter:creator:id",
        },
        {
          "content": "https://example.com/video.mp4",
          "name": "twitter:player",
        },
        {
          "content": "1280",
          "name": "twitter:player:width",
        },
        {
          "content": "720",
          "name": "twitter:player:height",
        },
        {
          "content": "https://example.com/video.mp4",
          "name": "twitter:player:stream",
        },
        {
          "content": "my app",
          "name": "twitter:app:name:iphone",
        },
        {
          "content": "1234567890",
          "name": "twitter:app:id:iphone",
        },
        {
          "content": "https://example.com",
          "name": "twitter:app:url:iphone",
        },
        {
          "content": "my app",
          "name": "twitter:app:name:ipad",
        },
        {
          "content": "1234567890",
          "name": "twitter:app:id:ipad",
        },
        {
          "content": "https://example.com",
          "name": "twitter:app:url:ipad",
        },
        {
          "content": "my app",
          "name": "twitter:app:name:googleplay",
        },
        {
          "content": "1234567890",
          "name": "twitter:app:id:googleplay",
        },
        {
          "content": "https://example.com",
          "name": "twitter:app:url:googleplay",
        },
        {
          "content": "my data",
          "name": "twitter:data1",
        },
        {
          "content": "my label",
          "name": "twitter:label1",
        },
        {
          "content": "my data",
          "name": "twitter:data2",
        },
        {
          "content": "my label",
          "name": "twitter:label2",
        },
      ]
    `)
  })

  it('define multiple og:locale:alternate', () => {
    const tags = unpackMeta({
      ogLocaleAlternate: ['en_US', 'fr_FR'],
    })

    expect(tags).toMatchInlineSnapshot(`
      [
        {
          "content": "en_US",
          "property": "og:locale:alternate",
        },
        {
          "content": "fr_FR",
          "property": "og:locale:alternate",
        },
      ]
    `)
  })

  it('flatten meta', () => {
    const flattened = packMeta([
      {
        name: 'description',
        content: 'desc',
        key: 'desc',
      },
      {
        name: 'description',
        content: 'desc 2',
        key: 'desc',
      },
      {
        property: 'og:locale:alternate',
        content: 'fr',
        key: 'fr',
      },
      {
        property: 'og:locale:alternate',
        content: 'zh',
        key: 'zh',
      },

      // pragma
      {
        'content': '5;url=https://example.com',
        'http-equiv': 'refresh',
      },

      {
        'content': 'default-src \'self\' https://example.com; content-src none',
        'http-equiv': 'content-security-policy',
      },
      {
        name: 'description',
        content: 'desc',
        key: 'desc',
      },
      {
        content: '1234567890',
        property: 'fb:app_id',
      },
    ])

    expect(flattened).toMatchInlineSnapshot(`
      {
        "contentSecurityPolicy": "default-src 'self' https://example.com; content-src none",
        "description": "desc",
        "fbAppId": "1234567890",
        "ogLocaleAlternate": "zh",
        "refresh": "5;url=https://example.com",
      }
    `)
  })
})

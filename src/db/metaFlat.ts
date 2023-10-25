import type { MetaFlat } from 'zhead'

type Tag = string | 'open-graph' | 'render' | 'seo' | 'social-share' | 'unknown' | 'security' | 'privacy' | 'pwa' | 'device-and-browser'

export interface MetaFlatSchema {
  name: string
  key: 'charset' | 'name' | 'property' | 'http-equiv'
  description: string
  examples: { value: string; description: string }[]
  tips?: { title: string; description: string }[]
  importance?: 'required' | 'important' | 'recommended' | 'optional' | 'deprecated' | 'unknown' | 'not-recommended'
  tags?: Tag | Tag[]
  documentation?: string[]
}

export const metaFlatSchema: Record<keyof MetaFlat, MetaFlatSchema> = {
  charset: {
    name: 'charset',
    key: 'charset',
    tags: ['essential'],
    importance: 'required',
    description: `The "charset" meta tag is a standard HTML meta tag used to define the character encoding for a web page. Character encoding specifies how characters are represented digitally, ensuring proper display of text and content on the page.`,
    tips: [
      {
        title: 'Specify Character Encoding',
        description: 'Always include the "charset" meta tag with a character encoding declaration to prevent character display issues.',
      },
      {
        title: 'Use UTF-8',
        description: 'The most widely supported and recommended character encoding for web pages is UTF-8.',
      },
      {
        title: 'Place in the Head Section',
        description: 'Ensure that the "charset" meta tag is placed within the <head> section of your HTML document, within the first 1kb if not at the very top.',
      },
    ],
    examples: [
      {
        value: 'UTF-8',
        description: 'Specifies the "charset" meta tag with UTF-8 character encoding for a web page, ensuring compatibility with a wide range of characters.',
      },
      {
        value: 'ISO-8859-1',
        description: 'Defines the "charset" meta tag with ISO-8859-1 character encoding for a web page, which is less common but may be necessary for specific cases.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta#attr-charset',
      'https://developers.google.com/search/docs/crawling-indexing/special-tags#meta-tags',
      // Add links to other documentation sources as needed
    ],
  },
  description: {
    name: 'description',
    key: 'name',
    tags: ['seo'],
    description: `The "description" meta tag is a standard HTML meta tag used to provide a concise description of the content of a web page. This description is often displayed in search engine results and plays a crucial role in informing users and search engines about the page's content.`,
    examples: [
      {
        value: 'A comprehensive guide to HTML meta tags and their usage.',
        description: 'Provides a brief and engaging description of the page content for search engine results.',
      },
    ],
    tips: [
      {
        title: 'Concise and Descriptive',
        description: 'Craft a concise but informative description that accurately summarizes the page\'s content. Aim for 150-160 characters for optimal display in search results.',
      },
      {
        title: 'Include Keywords',
        description: 'Incorporate relevant keywords into the description to improve search engine optimization (SEO) and attract the right audience.',
      },
      {
        title: 'Unique for Each Page',
        description: 'Ensure that each page of your website has a unique description that reflects the specific content and purpose of that page.',
      },
    ],
    importance: 'important',
    documentation: [
      'https://moz.com/learn/seo/meta-description',
      'https://developers.google.com/search/docs/advanced/appearance/snippet#meta-descriptions',
    ],
  },
  colorScheme: {
    name: 'color-scheme',
    key: 'name',
    description: 'Specifies one or more color schemes with which the document is compatible.',
    examples: [
      {
        value: 'normal',
        description: 'Sets the color scheme to "normal," following the default system or user preferences.',
      },
      {
        value: 'light dark',
        description: 'Specifies a preference for a "light" color scheme but allows "dark" as an alternative, accommodating user choices.',
      },
      {
        value: 'dark light',
        description: 'Specifies a preference for a "dark" color scheme but allows "light" as an alternative, accommodating user choices.',
      },
      {
        value: 'only light',
        description: 'Mandates the use of the "light" color scheme, regardless of user or system preferences.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#normal',
    ],
    importance: 'optional',
    tags: ['accessibility', 'user-experience'],
  },
  applicationName: {
    name: 'application-name',
    key: 'name',
    description: `The application-name meta tag allows you to specify the name of your web application, which can improve user experience, SEO, and is particularly valuable for Progressive Web Apps (PWAs). Setting an appropriate application name enhances brand recognition and helps search engines understand your app's purpose. For PWAs, it's essential for a consistent user experience and when the app is added to the user's home screen.`,
    examples: [
      {
        value: 'My Web App',
        description: 'Defines the application name as "My Web App," which appears when users add the app to their home screen.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
      'https://web.dev/app-shortcut/',
    ],
    tags: ['user-experience', 'seo', 'PWA'],
  },
  author: {
    name: 'author',
    key: 'name',
    tags: ['seo'],
    importance: 'recommended',
    description: `The author meta tag allows you to specify the author or creator of a web page. Including this information is valuable for search engine optimization (SEO) and providing proper attribution to content creators. It helps search engines and users identify the authorship of the page.`,
    examples: [
      {
        value: 'John Doe',
        description: 'Specifies the author as "John Doe," providing clear authorship attribution for the web page.',
      },
      {
        value: 'Jane Smith',
        description: 'Defines the author as "Jane Smith," indicating the content creator of the page.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name',
    ],
  },
  creator: {
    name: 'creator',
    key: 'name',
    tags: ['seo'],
    description: `The creator meta tag allows you to specify the creator or author of a web page. Including this information is valuable for search engine optimization (SEO) and providing proper attribution to content creators. It helps search engines and users identify the creatorship of the page.`,
    examples: [
      {
        value: 'Alice Johnson',
        description: 'Specifies the creator as "Alice Johnson," providing clear creatorship attribution for the web page.',
      },
      {
        value: 'Bob Smith',
        description: 'Defines the creator as "Bob Smith," indicating the content creator of the page.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names',
    ],
    importance: 'optional',
  },
  publisher: {
    name: 'publisher',
    key: 'name',
    tags: ['seo'],
    importance: 'recommended',
    description: `The publisher meta tag allows you to specify the publisher of a web page. Including this information is valuable for search engine optimization (SEO) and providing proper attribution to the publisher of the content. It helps search engines and users identify the publisher of the page, particularly in the context of online publications and news articles.`,
    examples: [
      {
        value: 'XYZ Media Inc.',
        description: 'Specifies the publisher as "XYZ Media Inc.," providing clear publisher attribution for the web page.',
      },
      {
        value: 'ABC News Corporation',
        description: 'Defines the publisher as "ABC News Corporation," indicating the publisher of the news content.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#other_metadata_names',
    ],
  },
  generator: {
    name: 'generator',
    key: 'name',
    tags: ['development'],
    description: `The generator meta tag allows you to specify the software or platform used to generate the web page. Including this information is valuable for developers, SEO, and understanding the technologies behind a website. This meta tag provides insight into the tools and systems utilized to create the web page. It's a useful resource for:

    - **Developers:** Understanding the technology stack employed in web development.
    - **SEO Professionals:** Enhancing search engine optimization by revealing the underlying technologies.
    - **Users:** Gaining transparency into the platform that powers the website. It's commonly used to declare the content management system (CMS) or web development framework responsible for generating the page.`,
    examples: [
      {
        value: 'WordPress 5.5',
        description: 'Specifies the generator as "WordPress 5.5," indicating that the web page was created using WordPress version 5.5.',
      },
      {
        value: 'Joomla 4.0',
        description: 'Defines the generator as "Joomla 4.0," showing that the page was generated with Joomla version 4.0.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
    ],
    importance: 'optional',
  },
  referrer: {
    name: 'referrer',
    key: 'name',
    tags: ['security', 'privacy', 'seo'],
    description: `The referrer meta tag allows you to control the behavior of the HTTP referer header when navigating to other pages. This tag can influence security, privacy, and search engine optimization (SEO) aspects of your website.

    - **Security and Privacy:** By setting the referrer policy, you can enhance user privacy by limiting the information shared with external sites. This can mitigate cross-origin information leakage.
    
    - **SEO Benefits:** Defining the referrer policy can impact SEO by signaling to search engines how links should be treated. For example, specifying a "no-referrer" policy indicates that no referrer information should be passed, which can affect SEO rankings.`,
    examples: [
      {
        value: 'no-referrer',
        description: 'Sets the referrer policy to "no-referrer," ensuring no referrer information is shared with linked pages.',
      },
      {
        value: 'strict-origin',
        description: 'Enforces a referrer policy that only includes the origin (scheme, host, and port) when navigating to another page.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_the_html_specification',
    ],
    importance: 'optional',
  },
  viewport: {
    name: 'viewport',
    key: 'name',
    tags: ['device-and-browser', 'seo'],
    description: `The viewport meta tag is essential for controlling the layout and scaling of web pages on various devices and browsers. It's a crucial component of responsive web design, ensuring that your site looks and functions optimally on different screens and platforms.
    - **Device Adaptation:** By defining the viewport's properties, you can adapt your content to the user's device, optimizing the user experience.
    - **SEO Implications:** A well-configured viewport can positively impact SEO by making your website mobile-friendly, which is a ranking factor for search engines.`,
    examples: [
      {
        value: 'width=device-width, initial-scale=1',
        description: 'Configures the viewport to match the device\'s width and set the initial zoom level to 1, creating a responsive layout.',
      },
      {
        value: 'width=320, initial-scale=2',
        description: 'Sets a fixed viewport width of 320 pixels and an initial zoom level of 2, useful for mobile web apps with specific design requirements.',
      },
    ],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#standard_metadata_names_defined_in_other_specifications',
    ],
    importance: 'required',
  },
  robots: {
    name: 'robots',
    key: 'name',
    description: `The robots meta tag is crucial for controlling how web crawlers and search engines interact with your site's content. By defining the rules in this meta tag, you can influence SEO, indexing, and visibility on search engine results pages.

    - **SEO Optimization:** Properly configuring the robots meta tag is vital for SEO. You can instruct search engines to index or not index specific pages, follow or not follow links, and more.
    
    - **Crawler Directives:** This meta tag provides directives for web crawlers, allowing you to control how they interact with your content. You can set rules for indexing, noindexing, following links, or not following them.`,
    examples: [
      {
        value: 'index, follow',
        description: 'Allows search engines to index the page and follow links.',
      },
      {
        value: 'noindex, nofollow',
        description: 'Instructs search engines not to index the page and not to follow any links on the page.',
      },
    ],
    documentation: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'recommended',
    tags: 'seo',
  },
  google: {
    name: 'google',
    key: 'name',
    description: 'Special meta tag for controlling Google\'s indexing behavior.',
    examples: [],
    documentation: [
      'https://developers.google.com/search/docs/crawling-indexing/special-tags',
    ],
    importance: 'optional',
    tags: 'seo',
  },
  googlebot: {
    name: 'googlebot',
    key: 'name',
    description: 'Control how Google indexing works specifically for the googlebot crawler.',
    examples: [],
    documentation: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'optional',
    tags: 'seo',
  },
  googlebotNews: {
    name: 'googlebot-news',
    key: 'name',
    description: 'Control how Google indexing works specifically for the googlebot-news crawler.',
    examples: [],
    documentation: [
      'https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag',
    ],
    importance: 'optional',
    tags: 'seo',
  },
  googleSiteVerification: {
    name: 'google-site-verification',
    key: 'name',
    tags: ['third-party', 'seo'],
    description: `The "google-site-verification" meta tag is a non-standard HTML tag used for the purpose of site ownership verification on Google Search Console. It is employed to verify that you have ownership or control over a website or domain, allowing you to access and manage it within the Google Search Console platform.`,
    examples: [
      {
        value: 'your-verification-code',
        description: 'Replace "your-verification-code" with the unique code provided by Google Search Console for your website. This code is specific to your site and is used for verification.',
      },
    ],
    documentation: [
      'https://support.google.com/webmasters/answer/9008080',
      'https://developers.google.com/search/docs/advanced/crawling/google-search-console-verification',
    ],
    importance: 'optional',
  },
  rating: {
    name: 'rating',
    key: 'name',
    description: 'Labels a page as containing adult content, to signal that it be filtered by SafeSearch results.',
    examples: [
      {
        value: 'adult',
        description: 'Specifies the "adult" rating, signaling that the web page contains adult content and should be filtered accordingly by SafeSearch.',
      },
    ],
    documentation: [
      'https://developers.google.com/search/docs/advanced/guidelines/safesearch',
    ],
  },
  ogUrl: {
    name: 'og:url',
    key: 'property',
    description: `The "og:url" meta tag is part of the Open Graph protocol and is used to specify the canonical URL of the web page associated with the Open Graph object. It ensures that when the object is shared on social media platforms, the correct URL is used, helping to prevent content duplication and providing a consistent user experience.`,
    examples: [
      {
        value: 'https://www.example.com/page',
        description: 'Specifies "og:url" as "https://www.example.com/page," indicating the canonical URL of the web page associated with the Open Graph object.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: ['social-share', 'open-graph'],
  },
  ogType: {
    name: 'og:type',
    tags: ['social-share', 'open-graph'],
    key: 'property',
    description: `The "og:type" meta tag is a part of the Open Graph protocol and is used to define the type of content on a web page. It is essential for optimizing how the page appears when shared on social media platforms. By specifying the content type, it ensures that the content is presented correctly, with the appropriate metadata, in social media posts and previews.`,
    examples: [
      {
        value: 'website',
        description: 'Specifies the "og:type" as "website," indicating that the web page represents a general website or web page.',
      },
      {
        value: 'article',
        description: 'Indicates "og:type" as "article," signifying that the web page contains an article or blog post.',
      },
      {
        value: 'video.movie',
        description: 'Defines the "og:type" as "video.movie," showing that the page features a video, specifically a movie.',
      },
    ],
    documentation: [
      'https://ogp.me/#types',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogTitle: {
    name: 'og:title',
    key: 'property',
    description: `The "og:title" meta tag is part of the Open Graph protocol and is used to specify the title of the Open Graph object when shared on social media platforms. It plays a crucial role in providing a concise and engaging title that represents the content, making it more appealing to users.`,
    examples: [
      {
        value: 'Example Article Title',
        description: 'Specifies "og:title" as "Example Article Title," representing the title of an article when shared on social media.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: ['social-share', 'open-graph'],
  },
  ogDescription: {
    name: 'og:description',
    key: 'property',
    description: `The "og:description" meta tag is part of the Open Graph protocol and is used to specify a brief and engaging description of the content associated with the Open Graph object. It serves as a concise summary that provides additional context and entices users when the object is shared on social media platforms.`,
    examples: [
      {
        value: 'A thought-provoking article about technology trends.',
        description: 'Specifies "og:description" as "A thought-provoking article about technology trends," offering a concise and engaging description of the article when shared on social media.',
      },
      {
        value: 'Discover the latest product innovations in this video.',
        description: 'Defines "og:description" as "Discover the latest product innovations in this video," providing a compelling description of a video when shared on social media.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: ['social-share', 'open-graph'],
  },
  ogDeterminer: {
    name: 'og:determiner',
    key: 'property',
    tags: ['social-media', 'language'],
    description: `The "og:determiner" meta tag is part of the Open Graph protocol and is used to specify the determiner that should precede the title of an object when it is mentioned in a sentence. It is employed to control the grammatical structure of sentences when sharing Open Graph objects on social media platforms.`,
    examples: [
      {
        value: 'a',
        description: 'Specifies "og:determiner" as "a," indicating that the title of the object should be introduced with the determiner "a" in sentences.',
      },
      {
        value: 'an',
        description: 'Defines "og:determiner" as "an," suggesting that the title of the object should be introduced with the determiner "an" in sentences.',
      },
      {
        value: 'the',
        description: 'Sets "og:determiner" to "the," signifying that the title of the object should be introduced with the determiner "the" in sentences.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogLocale: {
    name: 'og:locale',
    key: 'property',
    tags: ['social-media', 'language'],
    description: `The "og:locale" meta tag is part of the Open Graph protocol and is used to specify the locale or language of the content associated with the Open Graph object. It helps ensure that the content is presented in the appropriate language or locale when shared on social media platforms.`,
    examples: [
      {
        value: 'en_US',
        description: 'Specifies "og:locale" as "en_US," indicating that the content is in English (United States).',
      },
      {
        value: 'fr_FR',
        description: 'Defines "og:locale" as "fr_FR," signifying that the content is in French (France).',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
  },
  ogLocaleAlternate: {
    name: 'og:locale:alternate',
    key: 'property',
    description: `The "og:locale:alternate" meta tag is part of the Open Graph protocol and is used to specify alternate locales or languages for the content associated with the Open Graph object. It enables the definition of multiple language options for the same content, enhancing the user experience for a global audience.`,
    examples: [
      {
        value: 'es_ES',
        description: 'Specifies "og:locale:alternate" as "es_ES," indicating an alternate locale of Spanish (Spain) for the content.',
      },
      {
        value: 'fr_CA',
        description: 'Defines "og:locale:alternate" as "fr_CA," signifying an alternate locale of French (Canada) for the content.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogSiteName: {
    name: 'og:site_name',
    key: 'property',
    description: `The "og:site_name" meta tag is part of the Open Graph protocol and is used to specify the name of the website or platform associated with the Open Graph object. It provides users with information about the source or origin of the content when it is shared on social media platforms.`,
    examples: [
      {
        value: 'Example News',
        description: 'Specifies "og:site_name" as "Example News," indicating the name of the website or platform hosting the content.',
      },
      {
        value: 'My Online Store',
        description: 'Defines "og:site_name" as "My Online Store," signifying the name of the e-commerce platform hosting the product content.',
      },
    ],
    documentation: [
      'https://ogp.me/#metadata',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: 'social-share',
  },
  ogVideo: {
    name: 'og:video',
    key: 'property',
    description: 'A video URL which should represent your object within the graph. The og:video tag has the identical tags as og:image.',
    examples: [
      {
        value: 'https://example.com/video.mp4',
        description: 'Specifies "og:video" as "https://example.com/video.mp4," indicating the URL of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoUrl: {
    name: 'og:video:url',
    key: 'property',
    description: 'A video URL which should represent your object within the graph. Same as og:video.',
    examples: [
      {
        value: 'https://example.com/video.mp4',
        description: 'Specifies "og:video:url" as "https://example.com/video.mp4," indicating the URL of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoSecureUrl: {
    name: 'og:video:secure_url',
    key: 'property',
    description: 'A https video URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/video.mp4',
        description: 'Specifies "og:video:secure_url" as "https://example.com/video.mp4," indicating the URL of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoType: {
    name: 'og:video:type',
    key: 'property',
    description: 'A MIME type for this video. of the format type/subtype. e.g. video/mp4.',
    examples: [
      {
        value: 'video/mp4',
        description: 'Specifies "og:video:type" as "video/mp4," indicating the MIME type of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoAlt: {
    name: 'og:video:alt',
    key: 'property',
    description: 'A description of what is in the video (not a caption). If the page specifies an og:image it should specify og:image:alt.',
    examples: [
      {
        value: 'A video about the latest product innovations.',
        description: 'Specifies "og:video:alt" as "A video about the latest product innovations," providing a description of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
  },
  ogVideoHeight: {
    name: 'og:video:height',
    key: 'property',
    description: 'The height of the video in pixels.',
    examples: [
      {
        value: '630',
        description: 'Specifies "og:video:height" as "630," indicating the height of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogVideoWidth: {
    name: 'og:video:width',
    key: 'property',
    description: 'The width of the video in pixels.',
    examples: [
      {
        value: '1200',
        description: 'Specifies "og:video:width" as "1200," indicating the width of the video to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_video',
    ],
    importance: 'optional',
  },
  ogImage: {
    name: 'og:image',
    key: 'property',
    description: 'An image URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/image.jpg',
        description: 'Specifies "og:image" as "https://example.com/image.jpg," indicating the URL of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: 'social-share',
  },
  ogImageAlt: {
    name: 'og:image:alt',
    key: 'property',
    description: 'A description of what is in the image (not a caption). If the page specifies an og:image it should specify og:image:alt.',
    examples: [
      {
        value: 'A delicious recipe for chocolate chip cookies.',
        description: 'Specifies "og:image:alt" as "A delicious recipe for chocolate chip cookies," providing a description of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'recommended',
    tags: 'social-share',
  },
  ogImageHeight: {
    name: 'og:image:height',
    key: 'property',
    description: 'The height of the image in pixels.',
    examples: [
      {
        value: '630',
        description: 'Specifies "og:image:height" as "630," indicating the height of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
  },
  ogImageWidth: {
    name: 'og:image:width',
    key: 'property',
    description: 'The width of the image in pixels.',
    examples: [
      {
        value: '1200',
        description: 'Specifies "og:image:width" as "1200," indicating the width of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    tags: 'social-share',
  },
  ogImageUrl: {
    name: 'og:image:url',
    key: 'property',
    description: 'An image URL which should represent your object within the graph. Same as og:image.',
    examples: [
      {
        value: 'https://example.com/image.jpg',
        description: 'Specifies "og:image:url" as "https://example.com/image.jpg," indicating the URL of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    tags: 'social-share',
  },
  ogImageType: {
    name: 'og:image:type',
    key: 'property',
    description: 'A MIME type for this image. of the format type/subtype. e.g. image/jpeg.',
    examples: [
      {
        value: 'image/jpeg',
        description: 'Specifies "og:image:type" as "image/jpeg," indicating the MIME type of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    tags: 'social-share',
  },
  ogImageSecureUrl: {
    name: 'og:image:secure_url',
    key: 'property',
    description: 'A secure image URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/image.jpg',
        description: 'Specifies "og:image:secure_url" as "https://example.com/image.jpg," indicating the URL of the image to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#structured',
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    importance: 'optional',
    tags: 'social-share',
  },
  ogAudio: {
    name: 'og:audio',
    key: 'property',
    description: 'An audio URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/audio.mp3',
        description: 'Specifies "og:audio" as "https://example.com/audio.mp3," indicating the URL of the audio to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioUrl: {
    name: 'og:audio:url',
    key: 'property',
    description: 'An audio URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/audio.mp3',
        description: 'Specifies "og:audio:url" as "https://example.com/audio.mp3," indicating the URL of the audio to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioSecureUrl: {
    name: 'og:audio:secure_url',
    key: 'property',
    description: 'A secure audio URL which should represent your object within the graph.',
    examples: [
      {
        value: 'https://example.com/audio.mp3',
        description: 'Specifies "og:audio:secure_url" as "https://example.com/audio.mp3," indicating the URL of the audio to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  ogAudioType: {
    name: 'og:audio:type',
    key: 'property',
    description: 'A MIME type for this audio. of the format type/subtype. e.g. audio/mpeg.',
    examples: [
      {
        value: 'audio/mpeg',
        description: 'Specifies "og:audio:type" as "audio/mpeg," indicating the MIME type of the audio to be shared.',
      },
    ],
    documentation: [
      'https://ogp.me/#type_audio',
    ],
    importance: 'optional',
  },
  fbAppId: {
    name: 'fb:app_id',
    key: 'property',
    description: `The "fb:app_id" meta tag is used to specify the unique Facebook App ID associated with a web page. This tag is essential for integrating Facebook-related features and functionality into a website, such as Facebook Login, sharing options, and more.`,
    examples: [
      {
        value: '123456789012345',
        description: 'Specifies "fb:app_id" with the App ID "123456789012345." This associates the web page with a specific Facebook App.',
      },
    ],
    documentation: [
      'https://developers.facebook.com/docs/sharing/webmasters#markup',
    ],
    tags: ['facebook'],
    importance: 'optional',
  },
  twitterCard: {
    name: 'twitter:card',
    key: 'name',
    description: `The "twitter:card" meta tag is used to specify the type of card that Twitter should use when a web page is shared on the platform. Twitter cards enhance the appearance of shared content by displaying rich media previews and additional information.`,
    examples: [
      {
        value: 'summary',
        description: 'Specifies "twitter:card" as "summary," indicating the use of a summary card. This card type provides a title, description, and a thumbnail image when shared.',
      },
      {
        value: 'summary_large_image',
        description: 'Defines "twitter:card" as "summary_large_image," signifying the use of a summary card with a larger featured image for enhanced visual impact.',
      },
      {
        value: 'app',
        description: 'Sets "twitter:card" to "app," indicating the use of an app card. This card type provides a preview of a mobile app when shared.',
      },
      {
        value: 'player',
        description: 'Specifies "twitter:card" as "player," indicating the use of a player card. This card type provides a preview of a video or audio player when shared.',
      },
      {
        value: 'product',
        description: 'Defines "twitter:card" as "product," signifying the use of a product card. This card type provides a preview of a product when shared.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    tags: ['twitter', 'social-share'],
    importance: 'recommended',
  },
  twitterSite: {
    name: 'twitter:site',
    key: 'name',
    description: `The "twitter:site" meta tag is used to specify the Twitter username of the website or entity associated with a web page. It allows for attribution to the Twitter account when the web page is shared on the platform.`,
    examples: [
      {
        value: '@examplewebsite',
        description: 'Specifies "twitter:site" with the Twitter username "@examplewebsite," associating the web page with the Twitter account.',
      },
      {
        value: '@anotheraccount',
        description: 'Defines "twitter:site" with the Twitter username "@anotheraccount," attributing the web page to another Twitter account.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    tags: ['twitter', 'social-share'],
    importance: 'optional',
  },
  twitterCreator: {
    name: 'twitter:creator',
    key: 'name',
    description: `The "twitter:creator" meta tag is used to specify the Twitter username of the content's creator or author. It allows for proper attribution to the creator when the web page is shared on Twitter.`,
    examples: [
      {
        value: '@author123',
        description: 'Specifies "twitter:creator" with the Twitter username "@author123," attributing the content to its creator.',
      },
      {
        value: '@anotherwriter',
        description: 'Defines "twitter:creator" with the Twitter username "@anotherwriter," crediting another author as the creator of the content.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    tags: ['twitter', 'social-share'],
    importance: 'optional',
  },
  twitterTitle: {
    name: 'twitter:title',
    key: 'name',
    description: `The "twitter:title" meta tag is used to specify the title of the web page content when shared on Twitter. It's important to keep the title concise, engaging, and within 70 characters to ensure optimal display and user engagement.`,
    examples: [
      {
        value: 'Engaging Article Title',
        description: 'Specifies "twitter:title" with the title "Engaging Article Title." A concise and engaging title that follows the 70-character tip.',
      },
      {
        value: 'This is a Very Long Title That Should Be Shortened',
        description: 'Defines "twitter:title" with a long title. It\'s important to shorten this title to adhere to the 70-character tip for optimal display on Twitter.',
      },
    ],
    tags: ['twitter', 'social-share'],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterDescription: {
    name: 'twitter:description',
    key: 'name',
    description: `The "twitter:description" meta tag is used to specify a brief description of the web page content when shared on Twitter. It's important to keep the description concise and engaging, within 200 characters, to ensure optimal display and user engagement.`,
    examples: [
      {
        value: 'A concise and engaging description of the content.',
        description: 'Specifies "twitter:description" with a concise and engaging description. It follows the 200-character tip for optimal display on Twitter.',
      },
      {
        value: 'This is a very long description that should be shortened to adhere to the 200-character tip.',
        description: 'Defines "twitter:description" with a long description. It\'s important to shorten this description to ensure it fits within the recommended character limit for Twitter sharing.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    tags: ['twitter', 'social-share'],
    importance: 'optional',
  },
  twitterImage: {
    name: 'twitter:image',
    key: 'name',
    tags: ['twitter', 'social-share'],
    description: `The "twitter:image" meta tag specifies an image representing web page content when shared on Twitter.`,
    examples: [
      {
        value: 'https://www.example.com/image.jpg',
        description: 'Specifies "twitter:image" with the URL of an image file. Ensure the image is optimized and stays within the 5MB image size limit for Twitter.',
      },
      {
        value: 'https://www.example.com/large-image.png',
        description: 'Defines "twitter:image" with the URL of a larger image. It\'s important to optimize the image to fit within the recommended 5MB image size limit for Twitter sharing.',
      },
    ],
    tips: [
      {
        title: 'Image Optimization',
        description: 'Optimize images for the web by compressing them without significant quality loss for faster loading.',
      },
      {
        title: 'File Size Limit',
        description: 'Keep the image file size below 5MB for improved loading times and user experience.',
      },
      {
        title: 'Aspect Ratio',
        description: 'Maintain a recommended aspect ratio to ensure correct image display on Twitter (e.g., 1:1, 16:9, 2:1).',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageAlt: {
    name: 'twitter:image:alt',
    key: 'name',
    tags: ['twitter', 'social-share'],
    description: `The "twitter:image:alt" meta tag is used to provide alternative text for the image specified in the "twitter:image" tag when shared on Twitter. Alternative text is essential for accessibility and ensures that users with visual impairments can understand the content of the image.`,
    examples: [
      {
        value: 'A person reading a book in a quiet library.',
        description: 'Specifies "twitter:image:alt" with a descriptive alternative text for the image, enhancing accessibility.',
      },
      {
        value: 'A beautiful sunset over the mountains.',
        description: 'Defines "twitter:image:alt" with alternative text that describes the image content for accessibility purposes.',
      },
    ],
    tips: [
      {
        title: 'Descriptive Alt Text',
        description: 'Provide alt text that accurately and concisely describes the content and context of the image for users with disabilities.',
      },
      {
        title: 'Max 420 Characters',
        description: 'Keep the alternative text within a maximum of 420 characters to ensure it\'s concise and easily understandable.',
      },
      {
        title: 'Avoid Redundancy',
        description: 'Ensure that the alternative text adds meaningful information and doesn\'t duplicate the image\'s caption or title.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayer: {
    name: 'twitter:player',
    key: 'name',
    tags: ['twitter', 'social-share'],
    description: `The "twitter:player" meta tag is used to specify a web page that contains a Twitter Player Card. This card allows you to embed video or media content directly within a tweet, providing an interactive experience for Twitter users.`,
    examples: [
      {
        value: 'https://www.example.com/player.html',
        description: 'Specifies "twitter:player" with the URL of a web page containing a Twitter Player Card for embedded media content.',
      },
      {
        value: 'https://www.example.com/video-player.html',
        description: 'Defines "twitter:player" with a different web page URL that hosts a Twitter Player Card for interactive video sharing on Twitter.',
      },
    ],
    tips: [
      {
        title: 'Twitter Player Card',
        description: 'Ensure that the specified web page contains a valid Twitter Player Card that is properly configured for video or media content.',
      },
      {
        title: 'Responsive Design',
        description: 'Design the web page with a responsive layout to ensure the embedded media content is displayed optimally on various devices.',
      },
      {
        title: 'Video Content',
        description: 'For video content, use the "twitter:player:stream" tag to specify a direct link to the video stream.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card',
    ],
    importance: 'optional',
  },
  twitterPlayerWidth: {
    name: 'twitter:player:width',
    key: 'name',
    tags: ['twitter', 'social-share'],
    tips: [
      {
        title: 'Optimal Sizing',
        description: 'Set the width to match the dimensions of your video or media player for the best presentation.',
      },
      {
        title: 'Comprehensive Player Dimensions',
        description: 'Use this tag in conjunction with "twitter:player" and "twitter:player:height" to comprehensively define the player\'s dimensions.',
      },
      {
        title: 'Adhere to Twitter Guidelines',
        description: 'Ensure the specified width aligns with Twitter\'s recommended player dimensions for an optimal user experience.',
      },
    ],
    description: `The "twitter:player:width" meta tag specifies the width of an embedded player for video or media content when sharing a web page on Twitter, ensuring proper display within the Twitter platform.`,
    examples: [
      {
        value: '640',
        description: 'Specifies "twitter:player:width" as 640 for a player with a width of 640 pixels.',
      },
      {
        value: '1280',
        description: 'Defines "twitter:player:width" as 1280 for a player with a width of 1280 pixels.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/player-card',
    ],
    importance: 'optional',
  },
  twitterPlayerHeight: {
    name: 'twitter:player:height',
    key: 'name',
    tags: ['twitter', 'social-share'],
    description: `The "twitter:player:height" meta tag is used to specify the height of an embedded player for video or media content when sharing a web page on Twitter. It ensures the player is displayed with the correct dimensions within Twitter's platform.`,
    tips: [
      {
        title: 'Matching Width and Height',
        description: 'Set the height to match the dimensions of your video or media player, ensuring proper aspect ratio and presentation.',
      },
      {
        title: 'Comprehensive Player Dimensions',
        description: 'Use this tag in conjunction with "twitter:player" and "twitter:player:width" to comprehensively define the player\'s dimensions.',
      },
      {
        title: 'Adhere to Twitter Guidelines',
        description: 'Ensure the specified height aligns with Twitter\'s recommended player dimensions for the best user experience.',
      },
    ],
    examples: [
      {
        value: '360',
        description: 'Specifies "twitter:player:height" as 360 for a player with a height of 360 pixels.',
      },
      {
        value: '720',
        description: 'Defines "twitter:player:height" as 720 for a player with a height of 720 pixels.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterPlayerStream: {
    name: 'twitter:player:stream',
    key: 'name',
    tags: ['twitter', 'social-share'],
    description: `The "twitter:player:stream" meta tag is used to specify the direct URL for streaming video content when sharing a web page on Twitter. It enables the direct playback of video streams within the Twitter platform.`,
    tips: [
      {
        title: 'Provide a Direct Video Stream URL',
        description: 'Use this tag to specify the direct URL for streaming video content. Ensure that the URL is accessible and serves the video stream.',
      },
      {
        title: 'Comprehensive Player Dimensions',
        description: 'Consider using this tag in conjunction with "twitter:player:width" and "twitter:player:height" to define the player dimensions for the best viewing experience.',
      },
      {
        title: 'Test Playback on Twitter',
        description: 'Test the video stream playback on Twitter to ensure compatibility and optimal user experience.',
      },
    ],
    examples: [
      {
        value: 'https://example.com/stream/video.mp4',
        description: 'Specifies "twitter:player:stream" with a direct video stream URL, enabling the playback of the specified video stream on Twitter.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterAppIdGoogleplay: {
    name: 'twitter:app:id:googleplay',
    key: 'name',
    description: 'Your app ID in the Google Play Store (for Android apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppIdIphone: {
    name: 'twitter:app:id:iphone',
    key: 'name',
    description: 'Your app ID in the Apple App Store (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppIdIpad: {
    name: 'twitter:app:id:ipad',
    key: 'name',
    description: 'Your app ID in the Apple App Store (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameGoogleplay: {
    name: 'twitter:app:name:googleplay',
    key: 'name',
    description: 'Your app name in the Google Play Store (for Android apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameIphone: {
    name: 'twitter:app:name:iphone',
    key: 'name',
    description: 'Your app name in the Apple App Store (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppNameIpad: {
    name: 'twitter:app:name:ipad',
    key: 'name',
    description: 'Your app name in the Apple App Store (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlIphone: {
    name: 'twitter:app:url:iphone',
    key: 'name',
    description: 'Your app’s custom URL scheme (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlIpad: {
    name: 'twitter:app:url:ipad',
    key: 'name',
    description: 'Your app’s custom URL scheme (for iOS apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterAppUrlGoogleplay: {
    name: 'twitter:app:url:googleplay',
    key: 'name',
    description: 'Your app’s custom URL scheme (for Android apps).',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/app-card',
    ],
    importance: 'optional',
  },
  twitterCreatorId: {
    name: 'twitter:creator:id',
    key: 'name',
    description: 'Your Twitter user ID.',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterSiteId: {
    name: 'twitter:site:id',
    key: 'name',
    description: 'Your Twitter user ID.',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterData1: {
    name: 'twitter:data1',
    key: 'name',
    description: 'A description of the first data element specified in twitter:label1.',
    examples: [],
    documentation: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterLabel1: {
    name: 'twitter:label1',
    key: 'name',
    description: 'The text label to display for the first data element.',
    examples: [],
    documentation: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterData2: {
    name: 'twitter:data2',
    key: 'name',
    description: 'A description of the second data element specified in twitter:label2.',
    examples: [],
    documentation: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterLabel2: {
    name: 'twitter:label2',
    key: 'name',
    description: 'The text label to display for the second data element.',
    examples: [],
    documentation: [
      'https://api.slack.com/reference/messaging/link-unfurling#classic_unfurl',
    ],
    importance: 'optional',
  },
  twitterImageHeight: {
    name: 'twitter:image:height',
    key: 'name',
    description: 'The height of the image in pixels.',
    examples: [
      {
        value: '1200',
        description: 'Specifies "twitter:image:height" as 1200, indicating the height of the image in pixels.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageType: {
    name: 'twitter:image:type',
    key: 'name',
    description: 'A MIME type for this image. of the format type/subtype. e.g. image/jpeg.',
    examples: [],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  twitterImageWidth: {
    name: 'twitter:image:width',
    key: 'name',
    description: 'The width of the image in pixels.',
    examples: [
      {
        value: '1200',
        description: 'Specifies "twitter:image:width" as 1200, indicating the width of the image in pixels.',
      },
    ],
    documentation: [
      'https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards',
    ],
    importance: 'optional',
  },
  themeColor: {
    name: 'theme-color',
    tags: ['pwa', 'device-and-browser'],
    key: 'name',
    description: 'Specifies the theme color for the browser chrome.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#theme-color',
      'https://caniuse.com/meta-theme-color',
    ],
    importance: 'optional',
  },
  msapplicationTileColor: {
    name: 'msapplication-TileColor',
    key: 'name',
    description: 'Specifies the color of the tile in the Microsoft\'s tile-based user interface.',
    examples: [],
    documentation: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
    importance: 'optional',
  },
  msapplicationConfig: {
    name: 'msapplication-config',
    key: 'name',
    description: 'Specifies the location of the browser configuration file on the server.',
    examples: [],
    documentation: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
  },
  msapplicationTileImage: {
    name: 'msapplication-TileImage',
    key: 'name',
    description: 'Specifies the location of the tile image on the server.',
    examples: [],
    documentation: [
      'https://learn.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn320426(v=vs.85)',
    ],
  },
  keywords: {
    name: 'keywords',
    key: 'name',
    description: 'A comma-separated list of keywords relevant to the page.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#keywords',
    ],
    tags: 'seo',
    importance: 'deprecated',
  },
  contentSecurityPolicy: {
    name: 'content-security-policy',
    key: 'http-equiv',
    description: 'Defines a policy for loading content from a server into a webpage.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy',
    ],
    tags: 'security',
    importance: 'optional',
  },
  defaultStyle: {
    name: 'default-style',
    key: 'http-equiv',
    description: 'Specifies the preferred stylesheet to use when presenting the document.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#default-style',
    ],
    importance: 'not-recommended',
  },
  refresh: {
    name: 'refresh',
    key: 'http-equiv',
    description: 'Specifies a time interval, in seconds, to wait before reloading the page automatically.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#refresh',
    ],
    importance: 'not-recommended',
  },
  contentType: {
    name: 'content-type',
    key: 'http-equiv',
    description: 'Specifies the character encoding for the document.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/http-equiv#content-type',
    ],
    importance: 'not-recommended',
  },
  appleMobileWebAppCapable: {
    name: 'apple-mobile-web-app-capable',
    key: 'name',
    description: 'Specifies whether or not the web application runs in full-screen mode.',
    examples: [],
    documentation: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    tags: 'pwa',
    importance: 'optional',
  },
  appleItunesApp: {
    name: 'apple-itunes-app',
    key: 'name',
    description: 'Lets you associate the app with your website.',
    examples: [],
    documentation: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    importance: 'optional',
  },
  appleMobileWebAppTitle: {
    name: 'apple-mobile-web-app-title',
    key: 'name',
    description: 'Specifies a name for the application.',
    examples: [],
    documentation: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    tags: 'pwa',
    importance: 'optional',
  },
  appleMobileWebAppStatusBarStyle: {
    name: 'apple-mobile-web-app-status-bar-style',
    key: 'name',
    description: 'Specifies the style of the status bar when the application is running in full-screen mode.',
    examples: [],
    documentation: [
      'https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html',
    ],
    tags: 'pwa',
    importance: 'optional',
  },
  xUaCompatible: {
    name: 'x-ua-compatible',
    key: 'http-equiv',
    description: 'Specifies the version of Internet Explorer.',
    examples: [],
    documentation: [
      'https://docs.microsoft.com/en-us/openspecs/ie_standards/ms-csprem/8b3c9b7a-1e3e-4e8f-9e1a-0b2e1b8f7f1a',
    ],
    importance: 'not-recommended',
  },
  mobileWebAppCapable: {
    name: 'mobile-web-app-capable',
    key: 'name',
    description: 'Specifies whether or not the web application runs in full-screen mode.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/Manifest',
    ],
    importance: 'optional',
    tags: 'pwa',
  },
  formatDetection: {
    name: 'format-detection',
    key: 'name',
    description: 'Controls whether phone numbers are automatically turned into links by the browser.',
    examples: [],
    documentation: [
      'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#format-detection',
    ],
    importance: 'optional',
  },
  articleAuthor: {
    name: 'article:author',
    key: 'property',
    description: 'The author of the article.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
    tags: 'seo',
    importance: 'optional',
  },
  articleExpirationTime: {
    name: 'article:expiration_time',
    key: 'property',
    description: 'When the article is out of date after.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
  },
  articleTag: {
    name: 'article:tag',
    key: 'property',
    description: 'Tag words associated with this article.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
  },
  articleModifiedTime: {
    name: 'article:modified_time',
    key: 'property',
    description: 'When the article was last changed.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
  },
  articlePublishedTime: {
    name: 'article:published_time',
    key: 'property',
    description: 'When the article was first published.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
  },
  articleSection: {
    name: 'article:section',
    key: 'property',
    description: 'A high-level section name. E.g. Technology',
    examples: [],
    documentation: [
      'https://ogp.me/#type_article',
    ],
  },
  bookAuthor: {
    name: 'book:author',
    key: 'property',
    description: 'The author of the book.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_book',
    ],
  },
  bookIsbn: {
    name: 'book:isbn',
    key: 'property',
    description: 'The ISBN',
    examples: [],
    documentation: [
      'https://ogp.me/#type_book',
    ],
  },
  bookTag: {
    name: 'book:tag',
    key: 'property',
    description: 'Tag words associated with this book.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_book',
    ],
  },
  bookReleaseDate: {
    name: 'book:release_date',
    key: 'property',
    description: 'The date the book was released.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_book',
    ],
  },
  profileFirstName: {
    name: 'profile:first_name',
    key: 'property',
    description: 'A name normally given to an individual by a parent or self-chosen.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileLastName: {
    name: 'profile:last_name',
    key: 'property',
    description: 'A name inherited from a family or marriage and by which the individual is commonly known.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileGender: {
    name: 'profile:gender',
    key: 'property',
    description: 'Gender of the profile subject.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_profile',
    ],
  },
  profileUsername: {
    name: 'profile:username',
    key: 'property',
    description: 'A short unique string to identify them.',
    examples: [],
    documentation: [
      'https://ogp.me/#type_profile',
    ],
  },
}

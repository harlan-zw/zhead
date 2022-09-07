<h1 align='center'>zhead</h1>

<p align="center">

<a href='https://github.com/harlan-zw/zhead/actions/workflows/test.yml'>
</a>
<a href="https://www.npmjs.com/package/zhead" target="__blank"><img src="https://img.shields.io/npm/v/zhead?style=flat&colorA=002438&colorB=28CF8D" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/zhead" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/zhead?flat&colorA=002438&colorB=28CF8D"></a>
<a href="https://github.com/harlan-zw/zhead" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/harlan-zw/zhead?flat&colorA=002438&colorB=28CF8D"></a>
</p>


<p align="center">
Typed utilities for defining, validating and building best-practice document &lt;head&gt;'s.  
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="800" height="0" /><br>
<i>Status:</i> Pre-release</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦 • Join <a href="https://discord.gg/275MBUBvgP">Discord</a> for help</sub><br>
<img width="800" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 🇹 Fully typed document &lt;head&gt; with inline doc `@zhead/schema`
- 💎 [Zod](https://zod.dev/) powered schema parsing and validation `@zhead/zod`
- 🌳 Composable, tree-shakable and tiny (< 1kb, see [export-size-report](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/export-size-report.json))

Numerous utilities `zhead`
- 🧙 Resolve flat meta tags (100+ documented definitions), e.g. ` { ogTitle: 'Test' }`
- ✨ SEO inferring to generate minimal tags with maximum SEO `buildSeoHead`
- ✍️ Output to HTML and [useHead](https://github.com/vueuse/head) compatible tags

## Installation

```bash
npm install --save-dev zhead

# Using yarn
yarn add --dev nzhead
```

## Sub Packages

For functionality outside the core utils, see the package documentation:

- [`@zhead/schema`](https://github.com/harlan-zw/zhead/tree/main/packages/schema) - Typed utilities for defining, validating and building best-practice document &lt;head&gt;'s.
- [`@zhead/zod`](https://github.com/harlan-zw/zhead/tree/main/packages/zod) - Typed utilities for defining, validating and building best-practice document &lt;head&gt;'s.

## API

### defineHead

Use this decorator for a simple fully-typed head schema.

```ts
import { defineHead } from 'zhead'

const head = defineHead({
  title: 'My Page',
})

// {
//    title: 'My Page',
// }
```

### unpackMeta

Define your meta tags in a simple object with full type-safety.

```ts
import { defineHead, resolveMetaFlat } from 'zhead'

const meta = unpackMeta({
    contentSecurityPolicy: {
      contentSrc: 'none'
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      userScalable: 'yes',
    }
})

//   [
//     { 'http-equiv': 'content-security-policy', content: 'content-src none' },
//     { 'name': 'viewport', content: 'width=device-width, user-scalable=yes, initial-scale=1' }
//   ]
```

### packMeta

Turn array meta tags into a flat packed object.

```ts
import { defineHead, resolveMetaFlat } from 'zhead'

const meta = packMeta([
  {
    'content': 'default-src \'self\' https://example.com; content-src none',
    'http-equiv': 'content-security-policy',
  },
  {
    name: 'description',
    content: 'desc',
  },
  {
    content: '1234567890',
    property: 'fb:app_id',
  },
])

// {
//   "description": "desc",
//   "fbAppId": "1234567890",
//   "contentSecurityPolicy": "default-src 'self' https://example.com; content-src none"
// }
```

### resolveSeoHead

Generate a minimal SEO head with maximum SEO.

Internally this function uses the `withDefaults` and `inferSocialShare` utilities.

- Adds utf-8 charset
- Sets default best practice viewport
- Infers social share tags from `title` and `description`
- Sets twitter card to `summary_large_image`
- Sets robots best practice

```ts
import { resolveSeoHead, resolveMetaFlat } from 'zhead'

const head = resolveSeoHead({
  title: 'Learn about zHead - zHead',
  description: 'Describing the basic usage of zHead.',
})

// {
//   "title": "My Title",
//   "meta": [
//     {
//       "content": "Some description",
//       "name": "description",
//     },
//     {
//       "charset": "utf-8",
//     },
//     {
//       "content": "initial-scale=1, width=device-width",
//       "name": "viewport",
//     },
//     {
//       "content": "My Title",
//       "property": "og:title",
//     },
//     {
//       "content": "Some description",
//       "property": "og:description",
//     },
//     {
//       "content": "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
//       "name": "robots",
//     },
//   ],
// }
```

## Validation API

```ts
import { defineHead } from 'zhead'
import { headSchema } from "@zhead/schema";

const tags = defineHead({
  meta: [
    { description: 'My Description' }
  ]
})

headSchema.safeParse(tags)

// {
//   "error": [ZodError: [
//     {
//       "code": "custom",
//       "message": "The attribute `content` must be included.",
//       "path": [
//         "meta",
//         0
//       ]
//     }
//   ]],
//   "success": false,
// }
```

## Generate API

### generateHtml

```ts
import { generateHtml } from 'zhead'

const html = generateHtml({
  title: 'test',
  script: [
    { src: 'https://example.com/script.js' },
  ],
  meta: [
    { name: 'description', content: 'test' },
  ]
})

// <title>test</title>
// <meta content="test" name="description">
// <script src="https://example.com/script.js"></script>
```

### generateTags

```ts
import { generateTags } from 'zhead'

const tags = generateTags({
  title: 'test',
  script: [
    { src: 'https://example.com/script.js' },
  ],
  meta: [
    { name: 'description', content: 'test' },
  ]
})

// [
//   {
//     "props": {
//       "children": "test",
//     },
//     "tag": "title",
//   },
//   {
//     "props": {
//       "content": "test",
//       "name": "description",
//     },
//     "tag": "meta",
//   },
//   {
//     "props": {
//       "src": "https://example.com/script.js",
//     },
//     "tag": "script",
//   },
// ]
```

## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg">
    <img src='https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2022-PRESENT [Harlan Wilton](https://github.com/harlan-zw)

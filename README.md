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

## Types

- 🇹 Fully typed &lt;head&gt; Schema
- 🇹 Integrated MDN doc
- 🇹 [100+ typed meta's](https://github.com/harlan-zw/zhead/blob/main/packages/schema/src/meta-flat.ts)
- 🇹 Vue schema for deep reactive `Ref` and `Computed` support

## Functions

- 💎 Validation and schema parsing provided by [Zod](https://zod.dev/)
- 🧙 Resolve flat meta tags and back again `unpackMeta` `packMeta`
- ✨ SEO inferring to generate minimal tags with maximum SEO `buildSeoHead`
- 📣 Title template support `renderTitle`
- ✍️ Output to HTML `generateHtml`
- 🌳 Composable, tree-shakable and tiny (< 1kb, see [export-size-report](https://github.com/harlan-zw/zhead/blob/main/packages/zhead/export-size-report.json))

## Packages

### Schema 

Typescript base schema for document &lt;head&gt;. Only ships types for easy access to type augmentation.

```ts
export interface Head<E extends MergeHead = MergeHead> {
  title?: string
  titleTemplate?: string | ((title?: string) => string)
  base?: Partial<Merge<E['base'], Base>>
  link?: (Link & UnsafeKeys & Default<E['link']>)[]
  meta?: (Meta & UnsafeKeys & Default<E['meta']>)[]
  style?: (Style & UnsafeKeys & Default<E['style']>)[]
  script?: (Script & UnsafeKeys & Default<E['script']>)[]
  noscript?: (Noscript & UnsafeKeys & Default<E['noscript']>)[]
  htmlAttrs?: (HtmlAttributes & UnsafeKeys & Default<E['htmlAttrs']>)
  bodyAttrs?: (BodyAttributes & UnsafeKeys & Default<E['bodyAttrs']>)
}
```

[`@zhead/schema`](https://github.com/harlan-zw/zhead/tree/main/packages/schema)

### Vue Schema

Typescript schema for document &lt;head&gt; with Vue reactivity.

```ts
export interface ReactiveHead<E extends MergeHead = MergeHead> {
  title?: MaybeRef<Head<E>['title']>
  titleTemplate?: Head<E>['titleTemplate'] | Ref<string>
  base?: Head<E>['base'] | MaybeRef<MaybeRefObject<Head<E>['base']>>
  link?: Head<E>['link'] | ReffableArrayEntries<Head<E>['link']>
  meta?: Head<E>['meta'] | ReffableArrayEntries<Head<E>['meta']>
  style?: Head<E>['style'] | ReffableArrayEntries<Head<E>['style']>
  script?: Head<E>['script'] | ReffableArrayEntries<Head<E>['script']>
  noscript?: Head<E>['noscript'] | ReffableArrayEntries<Head<E>['noscript']>
  htmlAttrs?: MaybeRef<MaybeRefObject<Head<E>['htmlAttrs']>>
  bodyAttrs?: MaybeRef<MaybeRefObject<Head<E>['bodyAttrs']>>
}
```

[`@zhead/schema-vue`](https://github.com/harlan-zw/zhead/tree/main/packages/schema)


### Validation and parsing

[Zod](https://zod.dev/) schema for validating and parsing head tags.

[`@zhead/zod`](./tree/main/packages/zod)

### Framework bindings 

Vue bindings for handling deep reactive `Ref` and `Computed` head tags.

[`@zhead/vue`](https://github.com/harlan-zw/zhead/tree/main/packages/vue)

### Core

See below

## Core Installation

```bash
npm install --save-dev zhead

# Using yarn
yarn add --dev zhead
```


## Core API

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

//  [
//    { 'http-equiv': 'content-security-policy', content: 'content-src none' },
//    { 'name': 'viewport', content: 'width=device-width, user-scalable=yes, initial-scale=1' }
//  ]
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

<h1 align='center'>zHead</h1>

<p align="center">
<a href='https://github.com/vueuse/schema-org/actions/workflows/test.yml'>
<img src='https://github.com/vueuse/schema-org/actions/workflows/test.yml/badge.svg' >
</a>
<a href="https://www.npmjs.com/package/@vueuse/schema-org" target="__blank"><img src="https://img.shields.io/npm/v/@vueuse/schema-org?color=2B90B6&label=" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/@vueuse/schema-org" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/@vueuse/schema-org?color=349dbe&label="></a>
<a href="https://vue-schema-org.netlify.app/" target="__blank"><img src="https://img.shields.io/static/v1?label=&message=docs%20%26%20demos&color=45b8cd" alt="Docs & Demos"></a>
<br>
<a href="https://github.com/vueuse/schema-org" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/vueuse/schema-org?style=social"></a>
</p>

<p align="center">
Fully typed utilities for defining, validating and building best-practice document &lt;head&gt;'s.  
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="800" height="0" /><br>
<i>Status:</i> In Development</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦 • Join <a href="https://discord.gg/275MBUBvgP">Discord</a> for help</sub><br>
<img width="800" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 🇹 Fully typed head Schema
- 💎 [Zod-powered](https://zod.dev/) validation
- 🧙 Resolve flat meta tags, e.g. ` { ogTitle: 'Test', robots: { maxSnippet: -1 } }`
- ✨ Generate minimal tags with maximum SEO `buildSeoHead`
- 📦 All keys allow camelCase `dataSomething` -> `data-something`
- ✍️ Render to HTML and JSON [useHead](https://github.com/vueuse/head) compatible
- 🌳 Fully composable, tree-shakable and extensible

## Table of Contents

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Primitives](#primitives)
- [Literals](#literals)
- [Strings](#strings)
- [Numbers](#numbers)
- [NaNs](#nans)
- [Booleans](#booleans)
- [Dates](#dates)
- [Zod enums](#zod-enums)
- [Native enums](#native-enums)
- [Optionals](#optionals)
- [Nullables](#nullables)
- [Objects](#objects)

## Installation

```bash
npm add zhead
```

## Basic Usage

Use the `defineHead` decorator for a simple fully-typed head schema.

```ts
import { defineHead } from 'zhead'

const head = defineHead({
  title: 'My Page',
  base: {
    href: 'https://example.com',
    target: '_blank',
  },
  meta: [
    { charset: 'utf-8' }
  ]
})

/* output */

// {
//   title: 'My Page',
//     base: {
//     href: 'https://example.com',
//       target: '_blank',
//   },
//   meta: [
//     { charset: 'utf-8' }
//   ]
// }
```

Use the `resolveHead` function to resolve the head schema into a format ready for the browser.

```ts
import { resolveHead } from 'zhead'

const head = resolveHead({
  title: 'My Page',
  base: {
    href: 'https://example.com',
    target: '_blank',
  },
  meta: [
    { charset: 'utf-8' }
  ]
})

/* output */

// {
//   title: 'My Page',
//     base: {
//     href: 'https://example.com',
//       target: '_blank',
//   },
//   meta: [
//     { charset: 'utf-8' }
//   ]
// }
```

Building a head with SEO inferences, using flat meta.

```ts
import { buildSeoHead, resolveMetaFlat } from 'zhead'

const head = buildSeoHead({
  title: 'Learn about zHead - zHead',
  description: 'Describing the basic usage of zHead.',
  meta: resolveMetaFlat({
    ogTitle: 'Learn about zHead',
    ogSiteName: 'zHead',
    twitter: '@harlan_zw',
  })
})
```

### Defines

Decorator functions for using the zHead's type system.

#### defineHead

```ts
import { defineHead } from 'zhead'

defineHead({
  // ...
})
```

```ts
interface Head {
  title?: MaybeRef<string>
  titleTemplate?: MaybeRef<string> | ((title?: string) => string)
  meta?: MaybeRef<HeadAttrs[]>
  link?: MaybeRef<HeadAttrs[]>
  base?: MaybeRef<HeadAttrs>
  style?: MaybeRef<HeadAttrs[]>
  script?: MaybeRef<HeadAttrs[]>
  noscript?: MaybeRef<HeadAttrs[]>
  htmlAttrs?: MaybeRef<HeadAttrs>
  bodyAttrs?: MaybeRef<HeadAttrs>
}
```

### Resolves



## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg">
    <img src='https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2022-PRESENT [Harlan Wilton](https://github.com/harlan-zw)

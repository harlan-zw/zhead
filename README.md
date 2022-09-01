__<h1 align='center'>zHead</h1>

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

- 💎 Fully typed, [Zod-powered](https://zod.dev/) Schema with optional validation
- 🧙 Resolve typed, flat meta tags, e.g. ` { ogTitle: 'Test', robots: { maxSnippet: -1 } }`
- ✨ Generate minimal tags with maximum SEO `buildSeoHead`
- 📦 All keys allow camelCase `dataSomething` -> `data-something`
- ✍️ Render to HTML and JSON [useHead](https://github.com/vueuse/head) compatible
- 🌳 Fully composable, tree-shakable and extensible

## Installation

```bash
npm add zhead
```

## API

### defineHead

Use this decorator for a simple fully-typed head schema. 

By default, it will only allow camelCase keys, you can convert them at runtime using `resolveHead.`

```ts
import { defineHead } from 'zhead'

const head = defineHead({
  title: 'My Page',
})

/*{
   title: 'My Page',
}*/
```

### resolveHead

Use the `resolveHead` function to convert any camel-cased keys to a casing that browsers will understand..

```ts
import { resolveHead } from 'zhead'

const head = resolveHead({
  meta: [
    { httpEquiv: 'content-security-policy', content: 'content-src none' }
  ]
})
  /*{
    meta: [
      { 'http-equiv': 'content-security-policy', content: 'content-src none' }
    ]
  }*/
```

### resolveMetaFlat

Use this function to describe your meta tags with a flat fully-typed, object.

```ts
import { defineHead, resolveMetaFlat } from 'zhead'

const head = defineHead({
  meta: resolveMetaFlat({
    httpEquiv: 'content-src none',
  })
})
/*{
  meta: [
    { 'http-equiv': 'content-security-policy', content: 'content-src none' }
  ]
}*/
```

### buildSeoHead

Use this function to generate a minimal SEO head with maximum SEO.

Internally this function uses the `withDefaults` and `inferSocialShare` utilities.

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

## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg">
    <img src='https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2022-PRESENT [Harlan Wilton](https://github.com/harlan-zw)__

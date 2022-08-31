<h1 align='center'>zhead</h1>

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
Typed utilities for defining, validating and building your document &lt;head&gt;.  
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="830" height="0" /><br>
<i>Status:</i> In Development</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦 • Join <a href="https://discord.gg/275MBUBvgP">Discord</a> for help</sub><br>
<img width="830" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 💎 [Zod-powered](https://zod.dev/) types and validation
- 👮 SEO critical data with `withDefaults`
- ✨ Resolves Social Share tags `resolveHead`
- 🌳 Resolve flat meta tags `resolveMetaTags`
- ✍️ Render to HTML and JSON [useHead](https://github.com/vueuse/head) compatible

## Install

```bash
npm add zhead
```

## Usage

### Defines

Decorator functions for using the zhead's type system.

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

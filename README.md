<h1 align='center'>zhead</h1>

<p align="center">
<a href='https://github.com/harlan-zw/zhead/actions/workflows/test.yml'>
</a>
<a href="https://www.npmjs.com/package/zhead" target="__blank"><img src="https://img.shields.io/npm/v/zhead?style=flat&colorA=002438&colorB=28CF8D" alt="NPM version"></a>
<a href="https://www.npmjs.com/package/zhead" target="__blank"><img alt="NPM Downloads" src="https://img.shields.io/npm/dm/zhead?flat&colorA=002438&colorB=28CF8D"></a>
<a href="https://github.com/harlan-zw/zhead" target="__blank"><img alt="GitHub stars" src="https://img.shields.io/github/stars/harlan-zw/zhead?flat&colorA=002438&colorB=28CF8D"></a>
</p>


<p align="center">
All the types you need for your &lt;head&gt;.<br><br>Powering <a href="https://github.com/harlan-zw/unhead">Unhead</a>.
</p>

<p align="center">
<table>
<tbody>
<td align="center">
<img width="800" height="0" /><br>
<i>Status:</i> Stable</b> <br>
<sup> Please report any issues 🐛</sup><br>
<sub>Made possible by my <a href="https://github.com/sponsors/harlan-zw">Sponsor Program 💖</a><br> Follow me <a href="https://twitter.com/harlan_zw">@harlan_zw</a> 🐦 • Join <a href="https://discord.gg/275MBUBvgP">Discord</a> for help</sub><br>
<img width="800" height="0" />
</td>
</tbody>
</table>
</p>

## Features

- 💎 Fully typed Head schema
- 💎 Commented with MDN docs
- 💎 Fully Augmentable
- 💎 [100+ typed meta's](https://github.com/harlan-zw/zhead/blob/main/packages/schema/src/metaFlat.ts)

## Installation

```bash
npm install --save-dev zhead

# Using yarn
yarn add --dev zhead
```

## Types

### Head

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

## Sponsors

<p align="center">
  <a href="https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg">
    <img src='https://raw.githubusercontent.com/harlan-zw/static/main/sponsors.svg'/>
  </a>
</p>


## License

MIT License © 2022-PRESENT [Harlan Wilton](https://github.com/harlan-zw)

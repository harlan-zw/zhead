# `@zhead/head`

A wrapper around zhead for Vue, providing deep reactivity with types for head schema and meta tags packing.

## Installation

```bash
npm install --save-dev @zhead/vue

# Using yarn
yarn add --dev @zhead/vue
```

## API

### defineHead

```ts
import { defineHead } from '@zhead/vue'

const title = ref('My Awesome Title')

const head = defineHead({
  title,
  meta: computed(() => {
      return [
        { name: 'description', content: 'My awesome description' },
        { name: 'keywords', content: 'awesome, vue, zhead' },
      ]
  })
})

// {
//   title: 'My Awesome Title',
//   meta: [
//     { name: 'description', content: 'My awesome description' },
//     { name: 'keywords', content: 'awesome, vue, zhead' },
//   ]
// }
```

### packMeta

```ts
import { packMeta } from '@zhead/vue'

const description = ref('My Awesome Title')

packMeta([
  { name: 'description', content: description },
])


// Ref<{
//   name: 'description',
//   content: ref('My Awesome Title')
// }>
```

### unpackMeta

```ts
import { packMeta } from '@zhead/vue'

const description = ref('My Awesome Title')

unpackmeta({
  description,
})

// Ref<[
//    { name: 'description', content: ref('My Awesome Title') },
// ]>
```

## Types

```ts
export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

type MaybeRefObject<T> = MaybeRef<T> | {
  [key in keyof T]?: MaybeRef<T[key]>
}

type HeadEntry<T> = MaybeRefObject<Partial<T &
// pass through for untyped attributes (data-*)
  {
    [key: string]: string | boolean | number
  }>>

export type ScriptRef = HeadEntry<Script>
export type MetaRef = HeadEntry<Meta>
export type StyleRef = HeadEntry<Style>
export type LinkRef = HeadEntry<Link>
export type NoscriptRef = HeadEntry<Noscript>
export type BaseRef = MaybeRefObject<Partial<Base>>
export type HtmlAttributesRef = HeadEntry<HtmlAttributes>
export type BodyAttributesRef = HeadEntry<BodyAttributes>
export type MetaFlatRef = MaybeRefObject<Partial<MetaFlat>>

export interface Head {
  /**
   * The <title> HTML element defines the document's title that is shown in a browser's title bar or a page's tab.
   * It only contains text; tags within the element are ignored.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/title
   */
  title?: MaybeRef<string>
  /**
   * The <base> HTML element specifies the base URL to use for all relative URLs in a document.
   * There can be only one <base> element in a document.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
   */
  base?: MaybeRef<BaseRef>
  /**
   * The <link> HTML element specifies relationships between the current document and an external resource.
   * This element is most commonly used to link to stylesheets, but is also used to establish site icons
   * (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link#attr-as
   */
  link?: MaybeRef<MaybeRef<LinkRef>[]>
  /**
   * The <meta> element represents metadata that cannot be expressed in other HTML elements, like <link> or <script>.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
   */
  meta?: MaybeRef<MaybeRef<MetaRef>[]>
  /**
   * The <style> HTML element contains style information for a document, or part of a document.
   * It contains CSS, which is applied to the contents of the document containing the <style> element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
   */
  style?: MaybeRef<MaybeRef<StyleRef>[]>
  /**
   * The <script> HTML element is used to embed executable code or data; this is typically used to embed or refer to JavaScript code.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
   */
  script?: MaybeRef<MaybeRef<ScriptRef>[]>
  /**
   * The <noscript> HTML element defines a section of HTML to be inserted if a script type on the page is unsupported
   * or if scripting is currently turned off in the browser.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
   */
  noscript?: MaybeRef<MaybeRef<NoscriptRef>[]>
  /**
   * Attributes for the <html> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
   */
  htmlAttrs?: MaybeRef<HtmlAttributesRef>
  /**
   * Attributes for the <body> HTML element.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
   */
  bodyAttrs?: MaybeRef<BodyAttributesRef>
}

```

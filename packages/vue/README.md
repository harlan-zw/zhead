# `@zhead/head`

A wrapper around zhead for Vue.js.

Provides refable and computed types for head schema and flat meta tags.

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

defineHead({
  title,
  meta: computed(() => {
      return [
        { name: 'description', content: 'My awesome description' },
        { name: 'keywords', content: 'awesome, vue, zhead' },
      ]
  })
})
```

### packMeta

```ts
import { packMeta } from '@zhead/vue'

const description = ref('My Awesome Title')

packMeta([
  { name: 'description', content: description },
])

// {
//   name: 'description',
//   content: ref('My Awesome Title')
// }
```

### unpackMeta

```ts
import { packMeta } from '@zhead/vue'

const description = ref('My Awesome Title')

unpackmeta({
  description,
})

// [
//    { name: 'description', content: ref('My Awesome Title') },
// ]
```

## Types

```ts
export type Head = MaybeRefDeep<HeadPlain>
export type Link = MaybeRefDeep<LinkPlain>
export type LinkEntries = MaybeRefDeep<LinkEntriesPlain>
export type Script = MaybeRefDeep<ScriptPlain>
export type ScriptEntries = MaybeRefDeep<ScriptEntriesPlain>
export type Style = MaybeRefDeep<StylePlain>
export type StyleEntries = MaybeRefDeep<StyleEntriesPlain>
export type Meta = MaybeRefDeep<MetaPlain>
export type MetaEntries = MaybeRefDeep<MetaEntriesPlain>
export type Base = MaybeRefDeep<BasePlain>
export type MetaFlat = MaybeRefDeep<Partial<MetaFlatPlain>>
```

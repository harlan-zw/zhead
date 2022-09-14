# `@zhead/vue`

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

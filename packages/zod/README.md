# `@zhead/zod`

The `@zhead/schema` transformed to [Zod](https://github.com/colinhacks/zod].

Provides safe parsing and validation of head schema.

## Installation

```bash
npm install --save-dev @zhead/zod

# Using yarn
yarn add --dev @zhead/zod
```

## API

All exports are Zod based schemas and can be individually used to validate any part of the head schema.

- `headSchema` - `<head>` schema. [head.ts](./src/head.ts)
- `metaSchema` - `<meta>` schema. [meta.ts](./src/meta.ts)
- `metaFlatSchema` - `flat <meta>` schema. [meta-flat.ts](./src/meta-flat.ts)
- `linkSchema` - `<link>` schema. [link.ts](./src/link.ts)
- `scriptSchema` - `<script>` schema. [script.ts](./src/script.ts)
- `styleSchema` - `<style>` schema. [style.ts](./src/style.ts)

## Example

If you'd like to parse or validate the full head schema you can do the following

```ts
import { headSchema } from "@zhead/zod"

headSchema.safeParse({
  title: 'Test title',
  meta: [
    { description: 'My Description' }
  ]
})

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

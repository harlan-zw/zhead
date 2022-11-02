/* eslint-disable spaced-comment */
/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      "zhead": resolve(__dirname, "packages/zhead/src/index.ts"),
      "@zhead/schema": resolve(__dirname, "packages/schema/src/index.ts"),
      "@zhead/validation": resolve(__dirname, "packages/zod/src/index.ts"),
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'dot',
    isolate: true,
  },
})

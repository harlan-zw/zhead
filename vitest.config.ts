/* eslint-disable spaced-comment */
/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporters: 'dot',
    isolate: true,
  },
})

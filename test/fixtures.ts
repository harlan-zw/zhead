import type { Head } from '../src'

export const basicSchema: Head = {
  htmlAttrs: {
    lang: 'en',
    dir: 'ltr',
  },
  title: 'hello world',
  base: {
    href: '/',
  },
  bodyAttrs: {
    class: 'dark',
  },
  script: [
    {
      src: 'https://cdn.example.com/script.js',
    },
  ],
  meta: [
    {
      charset: 'utf-8',
    },
    {
      'http-equiv': 'content-security-policy',
      'content': 'default-src \'self\'',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: 'https://cdn.example.com/favicon.ico',
    },
  ],
}

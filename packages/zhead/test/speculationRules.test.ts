import type { SpeculationRules } from '../src'
import { describe, it } from 'vitest'

describe('speculationRules', () => {
  it('types', () => {
    const a: SpeculationRules = {
      prefetch: [
        {
          source: 'list',
          urls: ['/my-url'],
          requires: ['anonymous-client-ip-when-cross-origin'],
        },
      ],
    }
    expect(a).toMatchInlineSnapshot(`
      {
        "prefetch": [
          {
            "requires": [
              "anonymous-client-ip-when-cross-origin",
            ],
            "source": "list",
            "urls": [
              "/my-url",
            ],
          },
        ],
      }
    `)

    const b: SpeculationRules = {
      prerender: [
        {
          source: 'list',
          target_hint: '_self',
          urls: ['page.html'],
        },
        {
          source: 'list',
          target_hint: '_blank',
          urls: ['page.html'],
        },
      ],
    }
    expect(b).toMatchInlineSnapshot(`
      {
        "prerender": [
          {
            "source": "list",
            "target_hint": "_self",
            "urls": [
              "page.html",
            ],
          },
          {
            "source": "list",
            "target_hint": "_blank",
            "urls": [
              "page.html",
            ],
          },
        ],
      }
    `)

    const c: SpeculationRules = {
      prefetch: [
        {
          source: 'list',
          urls: ['https://en.wikipedia.org/wiki/Lethe'],
          referrer_policy: 'no-referrer',
        },
      ],
    }
    expect(c).toMatchInlineSnapshot(`
      {
        "prefetch": [
          {
            "referrer_policy": "no-referrer",
            "source": "list",
            "urls": [
              "https://en.wikipedia.org/wiki/Lethe",
            ],
          },
        ],
      }
    `)

    const d: SpeculationRules = {
      prefetch: [
        {
          source: 'list',
          urls: ['/item?id=32480009'],
          score: 0.8,
        },
        {
          source: 'list',
          urls: [
            'https://support.signal.org/hc/en-us/articles/4850133017242',
            'https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency',
            'https://github.com/containers/krunvm',
          ],
          score: 0.5,
        },
      ],
    }
    expect(d).toMatchInlineSnapshot(`
      {
        "prefetch": [
          {
            "score": 0.8,
            "source": "list",
            "urls": [
              "/item?id=32480009",
            ],
          },
          {
            "score": 0.5,
            "source": "list",
            "urls": [
              "https://support.signal.org/hc/en-us/articles/4850133017242",
              "https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency",
              "https://github.com/containers/krunvm",
            ],
          },
        ],
      }
    `)

    const e: SpeculationRules = {
      prerender: [
        {
          source: 'document',
          where: {
            and: [
              { href_matches: '/*\\?*' },
              { not: { href_matches: '/logout\\?*' } },
              { not: { selector_matches: '.no-prerender' } },
            ],
          },
          score: 0.1,
        },
      ],
    }
    expect(e).toMatchInlineSnapshot(`
      {
        "prerender": [
          {
            "score": 0.1,
            "source": "document",
            "where": {
              "and": [
                {
                  "href_matches": "/*\\?*",
                },
                {
                  "not": {
                    "href_matches": "/logout\\?*",
                  },
                },
                {
                  "not": {
                    "selector_matches": ".no-prerender",
                  },
                },
              ],
            },
          },
        ],
      }
    `)

    const f: SpeculationRules = {
      prerender: [
        {
          source: 'list',
          urls: ['/home', '/about'],
        },
      ],
      prefetch: [
        {
          source: 'list',
          urls: ['https://en.wikipedia.org/wiki/Hamster_racing'],
          requires: ['anonymous-client-ip-when-cross-origin'],
        },
      ],
    }
    expect(f).toMatchInlineSnapshot(`
      {
        "prefetch": [
          {
            "requires": [
              "anonymous-client-ip-when-cross-origin",
            ],
            "source": "list",
            "urls": [
              "https://en.wikipedia.org/wiki/Hamster_racing",
            ],
          },
        ],
        "prerender": [
          {
            "source": "list",
            "urls": [
              "/home",
              "/about",
            ],
          },
        ],
      }
    `)

    const g: SpeculationRules = {
      prefetch: [
        {
          source: 'list',
          urls: [
            '/item?id=32480009',
            'https://support.signal.org/hc/en-us/articles/4850133017242',
            'https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency',
            'https://github.com/containers/krunvm',
          ],
          requires: ['anonymous-client-ip-when-cross-origin'],
        },
      ],
    }
    expect(g).toMatchInlineSnapshot(`
      {
        "prefetch": [
          {
            "requires": [
              "anonymous-client-ip-when-cross-origin",
            ],
            "source": "list",
            "urls": [
              "/item?id=32480009",
              "https://support.signal.org/hc/en-us/articles/4850133017242",
              "https://discord.com/blog/how-discord-supercharges-network-disks-for-extreme-low-latency",
              "https://github.com/containers/krunvm",
            ],
          },
        ],
      }
    `)
  })
})

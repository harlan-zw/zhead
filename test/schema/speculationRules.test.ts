import { describe, it } from 'vitest'
import type { SpeculationRules } from '@zhead/schema/src/struct/speculationRules'

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
    expect(a).toMatchInlineSnapshot()

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
        }],
    }
    expect(b).toMatchInlineSnapshot()

    const c: SpeculationRules = {
      prefetch: [
        {
          source: 'list',
          urls: ['https://en.wikipedia.org/wiki/Lethe'],
          referrer_policy: 'no-referrer',
        },
      ],
    }
    expect(c).toMatchInlineSnapshot()

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
    expect(d).toMatchInlineSnapshot()

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
    expect(e).toMatchInlineSnapshot()

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
    expect(f).toMatchInlineSnapshot()

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
    expect(g).toMatchInlineSnapshot()
  })
})

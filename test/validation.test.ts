import { describe, it } from 'vitest'
import { defineHead } from 'zhead'
import { headSchema } from '@zhead/zod'

describe('validation', () => {
  it('can validate', () => {
    const tags = defineHead({
      meta: [
        // @ts-expect-error throwing type
        { description: 'My Description' },
      ],
    })

    expect(headSchema.safeParse(tags)).toMatchInlineSnapshot(`
      {
        "error": [ZodError: [
        {
          "code": "custom",
          "message": "The attribute \`content\` must be included.",
          "path": [
            "meta",
            0
          ]
        }
      ]],
        "success": false,
      }
    `)
  })
})

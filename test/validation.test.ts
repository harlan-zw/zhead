import { describe, it } from 'vitest'
import { resolveHead } from 'zhead'
import { HeadSchema } from "@zhead/schema";

describe('validation', () => {
  it('can validate', () => {
    const tags = resolveHead({
      meta: [
        { description: 'My Description' }
      ]
    })


    expect(HeadSchema.safeParse(tags)).toMatchInlineSnapshot(`
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

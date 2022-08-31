import { HeadSchema } from './schema'
import type { HeadInput } from './schema'

export function validateMetaTags(input: HeadInput) {
  return HeadSchema.safeParse(input)
}

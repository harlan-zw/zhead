import { HeadSchema } from '../schema'
import type { HeadInput } from '../schema'

export function validateHead(input: HeadInput) {
  return HeadSchema.safeParse(input)
}

// Generated by ts-to-zod
import { z } from 'zod'

export const metaSchema = z.object({
  charset: z.string(),
  content: z.string(),
  httpEquiv: z.union([z.literal('content-security-policy'), z.literal('content-type'), z.literal('default-style'), z.literal('x-ua-compatible'), z.literal('refresh')]),
  name: z.union([z.any(), z.string()]),
  key: z.string(),
})

export const metaEntriesSchema = z.array(metaSchema.partial())
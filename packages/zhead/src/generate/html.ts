import type { HeadInput } from '@zhead/schema'
import { generateTags, generateTagsStrict } from './tags'
import { tagToString } from './utils'

export function generateHtml<T extends HeadInput>(input: T): string {
  return generateTags(input).map(t => tagToString(t)).join('\n')
}

export function generateHtmlStrict<T extends HeadInput>(input: T): string {
  return generateTagsStrict(input).map(t => tagToString(t)).join('\n')
}

import type { Head } from './head'

export type TagKey = keyof Head

export interface HeadTag {
  tag: TagKey
  props: Record<string, any>
  children?: string
  tagPosition?: 'head' | 'bodyOpen' | 'bodyClose'
}

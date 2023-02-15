import type { Head } from './head'

export type TagKey = keyof Head

export interface HeadTag {
  tag: TagKey
  props: Record<string, any>
  innerHTML?: string
  children?: string
  textContent?: string
  tagPriority?: number | 'critical' | 'high' | 'low' | `before:${string}` | `after:${string}`
  tagPosition?: 'head' | 'bodyClose' | 'bodyOpen'
  key?: string
  tagDuplicateStrategy?: 'replace' | 'merge'
}

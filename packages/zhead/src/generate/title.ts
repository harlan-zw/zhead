import type { Head } from '@zhead/schema'

// copied from @vueuse/head
export const renderTemplate = (
  template: Head['titleTemplate'],
  title?: string,
): string => {
  if (template == null)
    return ''
  return template.replace('%s', title ?? '')
}

import type { Head } from '@zhead/schema'

// copied from @vueuse/head
export const renderTemplate = (
  template: Head['titleTemplate'],
  title?: string,
): string => {
  if (template == null)
    return ''
  if (typeof template === 'string')
    return template.replace('%s', title ?? '')

  return template(title)
}

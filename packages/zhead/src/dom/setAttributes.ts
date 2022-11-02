export const setAttributes = ($el: Element, attrs: Record<string, any> = {}) => {
  const sideEffects = {}

  // add new attributes
  for (const k in attrs) {
    // try and keep existing class and style props by appending data
    if (k === 'class') {
      for (const c of attrs[k].split(' ')) {
        if (!$el.classList.contains(c)) {
          $el.classList.add(c)
          sideEffects[''] = () => {
            $el.classList.remove(c)
          }
        }
      }
      continue
    }
    $el.setAttribute(k, String(attrs[k]))
    if (!k.startsWith('data-h-'))
      sideEffects.push(() => {
        $el.removeAttribute(k)
      })
  }
  return sideEffects
}

import type { MetaSchema } from '../../metaFlat'

export const appleMobileWebAppStatusBarStyle: MetaSchema = {
  name: 'apple-mobile-web-app-status-bar-style',
  key: 'name',
  color: '#FF9100',
  tags: 'pwa',
  description: 'Specifies the style of the status bar for a progressive web app (PWA) displayed on iOS devices.',
  tips: [
    {
      title: 'Choose a Suitable Style',
      description: 'Consider the appearance and branding of your PWA when selecting the status bar style. Make sure it complements the overall design and enhances the user experience.',
    },
    {
      title: 'Test Across Devices',
      description: 'Test your PWA on different iOS devices to ensure the status bar style looks consistent and visually appealing.',
    },
  ],
  examples: [
    {
      value: 'default',
      description: 'Specifies the default status bar style, which displays a black bar with a white foreground color.',
    },
    {
      value: 'black',
      description: 'Sets the status bar style to black, displaying a black bar with a white foreground color.',
    },
    {
      value: 'black-translucent',
      description: 'Sets the status bar style to black-translucent, making the status bar transparent with white foreground content overlaying it.',
    },
  ],
  documentation: [
    'https://developer.apple.com/documentation/webkit/dark_mode_support_in_web_content',
    'https://developer.apple.com/documentation/webkit/supporting_associated_domains',
  ],
}

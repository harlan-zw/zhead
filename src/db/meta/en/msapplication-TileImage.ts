import type { MetaSchema } from '../../metaFlat'

export const msapplicationTileImage: MetaSchema = {
  name: 'msapplication-TileImage',
  key: 'name',
  color: '#FFB80C',
  tags: 'browser',
  description: 'Specifies the URL of an image to be used as the tile image for a web application in the Microsoft Windows Start menu or on the taskbar.',
  tips: [
    {
      title: 'Choose an Iconic Image',
      description: 'Select an image that is easily recognizable and represents your web application well to attract users on the Windows platform.',
    },
    {
      title: 'Use PNG Format',
      description: 'Prefer using PNG format for the tile image as it supports transparency and ensures optimal visual quality.',
    },
  ],
  examples: [
    {
      value: 'images/start-tile.png',
      description: 'Specifies the "msapplication-TileImage" meta tag with the URL of an image "images/start-tile.png" to be used as the tile image for the web application in Windows Start menu or taskbar.',
    },
  ],
  documentation: [
    'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/dn455106(v=vs.85)',
  ],
}

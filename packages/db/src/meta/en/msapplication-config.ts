import type { MetaSchema } from '../../metaFlat'

export const msapplicationConfig: MetaSchema = {
  name: 'msapplication-config',
  key: 'name',
  color: '#2D89EF',
  tags: 'browser',
  description: 'Specifies the URL of an XML file that contains tile and icon definitions for Microsoft applications. This meta tag is specific to Internet Explorer and Microsoft Edge browsers.',
  tips: [
    {
      title: 'Create an XML file',
      description: 'To use the "msapplication-config" meta tag, you need to create an XML file that defines the tiles and icons for Microsoft applications. Refer to the documentation for the XML schema and required elements.',
    },
    {
      title: 'Provide multiple tile sizes',
      description: 'To ensure compatibility across different devices and resolutions, provide multiple tile sizes in the XML file. This allows Microsoft applications to choose the most appropriate tile for the user\'s device.',
    },
  ],
  examples: [
    {
      value: '/path/to/tile.xml',
      description: 'Specifies the "msapplication-config" meta tag with the URL "/path/to/tile.xml", which contains the tile and icon definitions for Microsoft applications.',
    },
  ],
  documentation: [
    'https://docs.microsoft.com/en-us/previous-versions//bb250496(v=vs.85)',
  ],
}

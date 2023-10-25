import type { MetaSchema } from '../../metaFlat'

export const msapplicationTileColor: MetaSchema = {
  name: 'msapplication-TileColor',
  key: 'name',
  color: '#476AFF',
  tags: 'browser',
  description: 'Specifies the background color of the tile on the Windows Start Menu or the Microsoft Edge pinned sites',
  tips: [
    {
      title: 'Choose the right color',
      description: 'Select a color that represents your website or brand identity to make your tile stand out on the Windows Start Menu or Microsoft Edge pinned sites.',
    },
    {
      title: 'Consider accessibility',
      description: 'Ensure that the color you choose for "msapplication-TileColor" meets accessibility guidelines, making it easily distinguishable for users who may have visual impairments.',
    },
  ],
  examples: [
    {
      value: '#FF0000',
      description: 'Sets the "msapplication-TileColor" meta tag to a red color for the tile on the Windows Start Menu or Microsoft Edge pinned sites.',
    },
    {
      value: '#00FF00',
      description: 'Defines the "msapplication-TileColor" meta tag to a green color for the tile on the Windows Start Menu or Microsoft Edge pinned sites.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name#attr-msapplication-tilecolor',
    'https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn455106(v=vs.85)',
  ],
}

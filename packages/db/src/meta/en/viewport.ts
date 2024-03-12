import type { MetaSchema } from '../../metaFlat'

export const viewport: MetaSchema = {
  name: 'viewport',
  key: 'name',
  color: '#FFB369',
  tags: 'browser',
  description: 'Specifies the viewport characteristics for a web page, including dimensions, scaling, and zooming options.',
  tips: [
    {
      title: 'Set the initial-scale',
      description: 'Use the "initial-scale" property to control the initial zoom level when the page is loaded. A value of 1.0 indicates no zoom.',
    },
    {
      title: 'Specify width and height',
      description: 'Include the "width" and "height" properties to define the dimensions of the viewport. This helps ensure proper rendering on different devices.',
    },
    {
      title: 'Use "user-scalable" carefully',
      description: 'Be cautious when setting the "user-scalable" property. Disabling user scalability can lead to accessibility issues and a poor user experience. Consider allowing users to zoom in or out if necessary.',
    },
  ],
  examples: [
    {
      value: 'width=device-width, initial-scale=1.0',
      description: 'Defines the "viewport" meta tag with the width and initial-scale properties set to the device width and 1.0, respectively. This ensures that the page is displayed at 100% zoom initially.',
    },
    {
      value: 'width=800, height=600',
      description: 'Specifies the "viewport" meta tag with the width and height properties set to fixed values of 800 and 600 pixels, respectively. This is useful for non-responsive pages where a specific viewport size is required.',
    },
    {
      value: 'width=device-width, initial-scale=1.0, user-scalable=no',
      description: 'Sets the "viewport" meta tag with the width, initial-scale, and user-scalable properties defined. Disabling user scalability can be beneficial for certain scenarios where maintaining a consistent zoom level is critical.',
    },
  ],
  documentation: [
    'https://developer.mozilla.org/en-US/docs/Meta/Viewport_tag',
    'https://developers.google.com/web/fundamentals/design-and-ux/responsive',
  ],
}

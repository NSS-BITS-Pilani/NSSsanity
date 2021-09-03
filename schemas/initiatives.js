export default {
  name: 'initiative',
  title: 'Initiative',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'eventType',
      title: 'Department',
      type: 'string'
    },
    {
      name: 'information',
      title: 'Initiative Info',
      type: 'string',
    },
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}

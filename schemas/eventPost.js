export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'eventCount',
      title: 'Ongoing Event Count',
      description: 'Mention the ongoing event count in this field, for e.g., blood donor count in case of BDC Event.',
      type: 'number'
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}

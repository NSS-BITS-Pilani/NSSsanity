export default {
  name: 'leader',
  title: 'Leaderships',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'imgurl',
      title: 'Image URL',
        type: 'string',
      description: '288*288 px'
    },
    {
      name: 'linkedin',
      title: 'Linkedin profile link',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'name'
    },
  },
}

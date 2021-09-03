export default {
  name: 'department',
  title: 'Department',
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
      name: 'shortbody',
      title: 'Short body',
      type: 'string',
      description: 'For the department info on homepage. Keep it short.'
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}

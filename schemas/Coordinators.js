export default {
  name: 'coordinator',
  title: 'Core Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'srno',
      title: 'Sr No.',
      type: 'number',
      description: 'Enter serially starting from 1.'
    },
    {
      name: 'profilepic',
      title: 'Profile Picture',
      type: 'image',
      description: 'Has to be SQUARE',
    },
    {
      name: 'linkedin',
      title: 'Linkedin profile link',
        type: 'string',
      description: 'Including https:// is a must'
    },
    {
          name: 'designation',
          title: 'Designation',
          type: 'string',
          description: 'The gray text on cards'
    
    }
  ],

  preview: {
    select: {
      title: 'name'
    },
  },
}

export default {
  name: 'coordinator',
  title: 'Co-ordinator',
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
      description: 'Square',
      options: {
        hotspot: true,
      },
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

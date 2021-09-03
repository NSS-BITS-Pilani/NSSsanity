export default {
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'infoText',
      title: 'Text',
      type: 'string',
      description:'Few sentences highlighting the resources.'
    },
    {
      name: 'linksString',
      title: 'Links',
      type: 'blockContent',
      description: 'eg- "WHO=>https://www.who.int/" . Follow this exact format (http or https is a must). New link on a new line.'
    }
  ],

  preview: {
    select: {
      title: 'title'
    },
  },
}

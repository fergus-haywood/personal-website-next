export default {
  name: 'clients',
  type: 'document',
  title: 'Clients',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Client',
    },
    {
      name: 'origin',
      type: 'string',
      title: 'Origin',
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'disciplines',
      type: 'string',
      title: 'Disciplines',
    },
    {
      name: 'backgroundColor',
      type: 'string',
      title: 'Background Color',
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id',
    },
  ],
}

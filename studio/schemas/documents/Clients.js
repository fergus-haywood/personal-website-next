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
      name: 'id',
      type: 'string',
      title: 'Id',
    },
  ],
}

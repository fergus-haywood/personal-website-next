export default {
  name: 'projects',
  type: 'document',
  title: 'Projects',
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
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'link',
      type: 'link',
      title: 'Link',
    },
    {
      name: 'projectImages',
      type: 'array',
      title: 'Project Images',
      of: [{ type: 'projectImages' }],
    },
    {
      name: 'projectDisciplines',
      type: 'array',
      title: 'Project Disciplines',
      of: [{ type: 'projectDisciplines' }],
    },
    {
      name: 'id',
      type: 'string',
      title: 'Id',
    },
  ],
}

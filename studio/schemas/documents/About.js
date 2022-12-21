export default {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'image',
      title: 'Homepage Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default {
  name: 'siteConfig',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Site title',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
      description: 'The main site url. Used to create canonical url',
    },
    {
      title: 'Main navigation',
      name: 'mainNav',
      description: 'Select menu for main navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
    {
      title: 'Social navigation',
      name: 'socialNav',
      description: 'Select menu for social navigation',
      type: 'reference',
      to: { type: 'navigation' },
    },
  ],
}

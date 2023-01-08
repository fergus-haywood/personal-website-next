// Single workspace configuration

import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '/studio/schemas'

export default defineConfig({
  projectId: '36om7i3d',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})

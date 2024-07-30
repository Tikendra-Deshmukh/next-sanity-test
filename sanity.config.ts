import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from "./sanity/schemas"

const config = defineConfig({
  projectId: "v1lg7flx",
  
 

  dataset: "production",
  title: "My Personal Website",
  apiVersion: "2024-07-29",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: schemas }
})

export default config
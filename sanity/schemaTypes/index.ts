import { type SchemaTypeDefinition } from 'sanity'
import { restaurant } from './restaurant'
import article from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [restaurant, article],
}

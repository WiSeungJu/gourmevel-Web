import { type SchemaTypeDefinition } from 'sanity'
import { restaurant } from './restaurant'
import { photo } from './photo'
import { instagramPost } from './instagramPost'
import article from './article'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [restaurant, article, photo, instagramPost],
}

import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = projectId 
  ? createImageUrlBuilder({ projectId, dataset: dataset || 'production' })
  : null

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const urlFor = (source: any) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!builder || !source) return { width: () => ({ url: () => '' }) } as any
  return builder.image(source)
}

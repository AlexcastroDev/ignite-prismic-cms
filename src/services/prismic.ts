import * as prismic from '@prismicio/client'
import sm from '../../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// Update the Link Resolver to match your project's route structure
export function linkResolver(doc) {
  switch (doc.type) {
    case 'homepage':
      return '/'
    case 'page':
      return `/${doc.uid}`
    default:
      return null
  }
}

export const getPrismicClient = (config = {}) => {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  return client
}

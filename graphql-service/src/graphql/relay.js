import { nodeDefinitions, fromGlobalId } from 'graphql-relay'

export {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  mutationWithClientMutationId
} from 'graphql-relay'

const registeredTypes = {}

export function registerType (type, loader) {
  registeredTypes[type.name] = { type, loader }
}

export const { nodeField, nodeInterface } = nodeDefinitions(
  (globalId) => {
    const { type, id } = fromGlobalId(globalId)
    if (type in registeredTypes) {
      return registeredTypes[type].loader(id)
    } else {
      return null
    }
  },
  (object) => {
    const type = object.__type || null
    if (type in registeredTypes) {
      return registeredTypes[type].type
    } else {
      return type
    }
  }
)

import { GraphQLString } from 'graphql'
import { mutationWithClientMutationId } from '../relay'

// TODO: import me in src/mutations/index.js
export default mutationWithClientMutationId({
  name: '{{0}}', // TODO: capitalize me

  inputFields: {
    value: {
      type: GraphQLString
    }
  },

  outputFields: {
    value: {
      type: GraphQLString
    }
  },

  async mutateAndGetPayload (args) {
    return args
  }
})

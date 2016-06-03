import { GraphQLString } from 'graphql'

// TODO: import me in src/mutations/index.js
export default {
  type: GraphQLString,

  args: {
    value: {
      type: GraphQLString
    }
  },

  async resolve (rootValue, { value }) {
    return value
  }
}

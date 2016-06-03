import Mutation from './Mutation'
import Query from './Query'
import { GraphQLSchema } from 'graphql'

export default new GraphQLSchema({
  query: Query,
  mutation: Mutation
})

import _ from 'lodash'
import queries from './queries'
import { GraphQLObjectType } from 'graphql'

export default new GraphQLObjectType({
  name: 'Query',
  fields: () => _.omit(queries, 'default')
})

import _ from 'lodash'
import mutations from './mutations'
import { GraphQLObjectType } from 'graphql'

export default new GraphQLObjectType({
  name: 'Mutation',
  fields: () => _.omit(mutations, 'default')
})

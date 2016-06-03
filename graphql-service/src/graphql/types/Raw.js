import _ from 'lodash'
import { GraphQLScalarType } from 'graphql'
import { visit } from 'graphql/language'

const RawASTReducer = {
  Name: ({ value }) => value,
  IntValue: ({ value }) => parseInt(value, 10),
  FloatValue: ({ value }) => parseFloat(value),
  StringValue: ({ value }) => value,
  BooleanValue: ({ value }) => value,
  EnumValue: ({ value }) => value,
  ListValue: ({ values }) => values,
  ObjectValue: ({ fields }) => _.fromPairs(fields),
  ObjectField: ({ name, value }) => [name, value]
}

export default new GraphQLScalarType({
  name: 'Raw',

  serialize (value) {
    return value
  },

  parseValue (value) {
    return value
  },

  parseLiteral (ast) {
    return visit(ast, { leave: RawASTReducer })
  }
})

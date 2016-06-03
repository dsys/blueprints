import { Raw } from '../types'
import { mutationWithClientMutationId } from '../relay'

export default mutationWithClientMutationId({
  name: 'Echo',

  inputFields: {
    value: {
      type: Raw
    }
  },

  outputFields: {
    value: {
      type: Raw
    }
  },

  async mutateAndGetPayload (args) {
    return args
  }
})

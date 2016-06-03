import expressGraphQL from 'express-graphql'
import multer from 'multer'
import { DEBUG } from '../config'
import { Router } from 'express'
import { Schema } from '../graphql'

function formatError (err) {
  const result = {
    message: err.message,
    locations: err.locations
  }

  if (DEBUG) {
    result.stack = err.stack.split('\n')
  }

  return result
}

const router = new Router()
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 15 * 1024 * 1024 // 15 MB
  }
})

router.use(upload.any(), expressGraphQL(() => ({
  schema: Schema,
  graphiql: true,
  formatError
})))

export default router

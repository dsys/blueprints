import { Router } from 'express'
import { urlFor } from '../utils'

const router = new Router()

router.get('/', (req, res) => {
  res.send({
    href: urlFor(req),
    graphql: { href: urlFor(req, 'graphql') }
  })
})

export default router

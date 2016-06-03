import middleware from './middleware'
import express from 'express'

const app = express()
app.use(middleware.logging)
app.use(middleware.favicon)
app.use(middleware.discovery)
app.use('/graphql', middleware.graphql)
app.use(middleware.error)
export default app

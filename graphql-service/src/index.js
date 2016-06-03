import 'babel-polyfill'
import app from './router'
import log from './log'
import { PORT } from './config'

// attach process hooks
process.on('unhandledRejection', (reason, p) => {
  p.catch((err) => {
    log.error('Exiting due to unhandled rejection!')
    log.error(err)
    process.exit(1)
  })
})

process.on('uncaughtException', (err) => {
  log.error('Exiting due to uncaught exception!')
  log.error(err)
  process.exit(1)
})

process.on('SIGINT', () => process.exit(0))
process.on('exit', () => log('Exiting...'))

// start the server
const server = app.listen(PORT)
log(`Listening on port ${PORT}`)
process.on('exit', () => server.close())

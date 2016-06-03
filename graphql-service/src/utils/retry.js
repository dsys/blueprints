import wait from './wait'

export default async function retry ({
  fn = async () => {},
  beforeRetry = async () => {},
  maxTries = 5,
  delay = 0
} = {}) {
  let i = 0
  while (true) {
    try {
      return await fn()
    } catch (err) {
      await beforeRetry(err)

      if (++i === maxTries) {
        throw err
      }

      if (delay) {
        await wait(delay)
      }
    }
  }
}

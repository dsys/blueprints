/**
 * Returns a promise that waits for a delay before resolving.
 * @param {number} ms The delay in milliseconds
 */
export default async function wait (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

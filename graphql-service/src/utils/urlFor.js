import path from 'path'
import url from 'url'

export default function urlFor (req, ...parts) {
  const pathname = parts.length === 0
    ? req.baseUrl
    : path.join(req.baseUrl, ...parts)

  return url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname
  })
}

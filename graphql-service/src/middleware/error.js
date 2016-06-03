export default function (err, req, res, next) {
  res.status(err.status || 500)
  res.send({
    errors: [{
      message: err.message,
      stack: (err.stack || '').split('\n')
    }]
  })
}

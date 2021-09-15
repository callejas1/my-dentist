const redirectToHTTPS = (req, res, next) => {
  if (
    'https' !== req.headers['x-forwarded-proto'] &&
    'production' === process.env.NODE_ENV
  ) {
    res.redirect('https://' + req.hostname + req.url)
  } else {
    // Continue to other routes if we're not redirecting
    next()
  }
}

export { redirectToHTTPS }
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const config = process.env

// this middleware checks that the token corresponds to an existing user
exports.verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers['x-access-token']

  if (!token) {
    return res
      .status(403)
      .json({ message: 'A token is required for authentication' })
  }
  try {
    const decoded = jwt.verify(token, config.JWT_SECRET_KEY)
    const jwtUserId = decoded
    req.jwtUser = await User.findById(jwtUserId)
  } catch (err) {
    // eslint-disable-next-line prettier/prettier, no-console
    console.log(token);
    return res.status(401).json({ message: 'Invalid Token' })
  }
  if (!req.jwtUser) {
    return res.status(401).json({
      message:
        'This token is linked to a user that no longer exists, it is no longer valid',
    })
  }
  return next()
}

// this middleware checks that the token corresponds to a user with admin access rights
exports.admin = (req, res, next) => {
  if (req.jwtUser.accessLevel < 1) {
    return res.status(401).json({ message: "You don't have the rights" })
  }
  return next()
}

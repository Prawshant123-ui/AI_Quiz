
const jwt = require('jsonwebtoken');
const env = require('../config/env');

const signAccessToken = (payload) => {
  return jwt.sign(payload, env.jwtAccessSecret, { expiresIn: env.jwtAccessExpiry });
};

const signRefreshToken = (payload) => {
  return jwt.sign(payload, env.jwtRefreshSecret, { expiresIn: env.jwtRefreshExpiry });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, env.jwtAccessSecret);
};

const verifyRefreshToken = (token) => {
  return jwt.verify(token, env.jwtRefreshSecret);
};

module.exports = { signAccessToken, signRefreshToken, verifyAccessToken, verifyRefreshToken };
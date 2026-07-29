// src/middlewares/auth.middleware.js
const { verifyAccessToken } = require('../utils/jwt.util');
const AppError = require('../errors/AppError');

const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return next(new AppError('No token provided', 401));
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyAccessToken(token);
    req.user = { id: decoded.userId };
    next();
  } catch (error) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

module.exports = { protect };
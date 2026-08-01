
const AppError = require('../errors/AppError');

const validateUploadInput = (req, res, next) => {
  if (!req.file) {
    return next(new AppError('A PDF file is required', 400));
  }

  const { title } = req.body;
  if (!title || title.trim().length < 2) {
    return next(new AppError('A document title is required', 400));
  }

  next();
};

module.exports = { validateUploadInput };
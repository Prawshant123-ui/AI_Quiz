
const cloudinary = require('../config/cloudinary');
const { Readable } = require('stream');

const uploadBufferToCloudinary = (buffer, filename) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'raw',
        folder: 'quiz-generator/documents',
        public_id: filename.replace(/\.pdf$/i, ''),
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    Readable.from(buffer).pipe(uploadStream);
  });
};

module.exports = { uploadBufferToCloudinary };
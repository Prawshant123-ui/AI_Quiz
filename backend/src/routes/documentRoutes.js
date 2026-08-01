const express = require('express');

const {
  uploadDocument,
  listDocuments,
  getDocument,
} = require('../controllers/documentController');

const upload = require('../middlewares/uploadMiddleware');
const { validateUploadInput } = require('../validators/documentValidator');
const { protect } = require('../middlewares/authMiddleware');
const validate = require('../validators/validate');

const router = express.Router();

router.use(protect);

router.post(
  '/upload',
  upload.single('file'),
  validate(validateUploadInput),
  uploadDocument
);

router.get('/', listDocuments);
router.get('/:id', getDocument);

module.exports = router;
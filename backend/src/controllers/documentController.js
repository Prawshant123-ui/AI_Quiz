
const documentService = require('../services/documentService');

const uploadDocument = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { title } = req.body;

    const { document } = await documentService.uploadDocument({
      userId,
      title,
      file: req.file,
    });

    res.status(201).json({ success: true, data: { document } });
  } catch (error) {
    next(error);
  }
};

const listDocuments = async (req, res, next) => {
  try {
    const documents = await documentService.getUserDocuments(req.user.id);
    res.status(200).json({ success: true, data: { documents } });
  } catch (error) {
    next(error);
  }
};

const getDocument = async (req, res, next) => {
  try {
    const document = await documentService.getDocumentById(req.user.id, req.params.id);
    res.status(200).json({ success: true, data: { document } });
  } catch (error) {
    next(error);
  }
};

module.exports = { uploadDocument, listDocuments, getDocument };
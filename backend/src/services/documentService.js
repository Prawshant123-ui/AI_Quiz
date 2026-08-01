// src/services/document.service.js
const documentRepository = require('../repositories/documentRepository');
const { uploadBufferToCloudinary } = require('../utils/cloudinaryUtils');
const { extractTextFromPdf } = require('../utils/pdfUtils');
const AppError = require('../errors/AppError');

const uploadDocument = async ({ userId, title, file }) => {
  
  const { text, pageCount } = await extractTextFromPdf(file.buffer);

  if (!text || text.trim().length < 50) {
    throw new AppError(
      'Could not extract readable text from this PDF (it may be a scanned image)',
      422
    );
  }


  const cloudinaryResult = await uploadBufferToCloudinary(file.buffer, file.originalname);

 
  const document = await documentRepository.createDocument({
    userId,
    title,
    originalName: file.originalname,
    filePath: cloudinaryResult.secure_url,
    pageCount,
    status: 'PENDING',
  });

  return { document, extractedText: text };
};

const getUserDocuments = async (userId) => {
  return documentRepository.findDocumentsByUser(userId);
};

const getDocumentById = async (userId, documentId) => {
  const document = await documentRepository.findDocumentById(documentId, userId);
  if (!document) {
    throw new AppError('Document not found', 404);
  }
  return document;
};

module.exports = { uploadDocument, getUserDocuments, getDocumentById };


const prisma =require('../config/prisma')

const createDocument = async ({ userId, title, originalName, filePath, pageCount, status }) => {
  return prisma.document.create({
    data: { userId, title, originalName, filePath, pageCount, status },
  });
};

const updateDocumentStatus = async (id, status, errorMessage = null) => {
  return prisma.document.update({
    where: { id },
    data: { status, errorMessage },
  });
};

const findDocumentsByUser = async (userId) => {
  return prisma.document.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
};

const findDocumentById = async (id, userId) => {
  return prisma.document.findFirst({
    where: { id, userId }, 
  });
};

module.exports = { createDocument, updateDocumentStatus, findDocumentsByUser, findDocumentById };
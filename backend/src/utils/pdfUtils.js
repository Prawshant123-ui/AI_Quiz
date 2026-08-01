
const pdfParse = require('pdf-parse');

const extractTextFromPdf = async (buffer) => {
  const data = await pdfParse(buffer);
  return {
    text: data.text,
    pageCount: data.numpages,
  };
};

module.exports = { extractTextFromPdf };
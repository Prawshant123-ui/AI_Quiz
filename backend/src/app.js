// src/app.js
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');
const documentRoutes = require('./routes/documentRoutes');


  const app = express();

  app.use(helmet());
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
  app.use(express.json());
  app.use(cookieParser());

  
  app.get("/api/health", (req, res) => {
  res.status(200).json({ success: true, message: "Server is running" });
});

  app.use('/api/auth', authRoutes);
  app.use('/api/documents', documentRoutes);

  app.use(errorHandler); 



module.exports = app;
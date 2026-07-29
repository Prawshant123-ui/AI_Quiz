
const express = require('express');
const {register,login,logout} = require('../controllers/authController');
const { registerSchema,loginSchema } = require('../validators/authValidator');

const router = express.Router();

router.post('/register', registerSchema, register);
router.post('/login', loginSchema,login);
router.post('/logout', logout);

module.exports = router;
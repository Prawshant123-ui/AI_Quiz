
const express = require('express');
const {register,login,logout} = require('../controllers/authController');
const { registerSchema,loginSchema } = require('../validators/authValidator');
const validate=require('../validators/validate')

const router = express.Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema),login);
router.post('/logout', logout);

module.exports = router;
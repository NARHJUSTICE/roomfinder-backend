const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Signup route
router.post('/signup', authController.signup);

// ✅ Test route
router.get('/test', (req, res) => {
  res.status(200).json({ message: '✅ Route is working' });
});

module.exports = router;

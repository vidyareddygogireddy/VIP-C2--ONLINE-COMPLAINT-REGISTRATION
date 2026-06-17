const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getAgents } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/agents', protect, getAgents);

module.exports = router;

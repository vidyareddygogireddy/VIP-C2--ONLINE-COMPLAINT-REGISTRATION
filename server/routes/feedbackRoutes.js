const express = require('express');
const router = express.Router();
const { submitFeedback } = require('../controllers/feedbackController');
router.post('/:id', submitFeedback);
module.exports = router;

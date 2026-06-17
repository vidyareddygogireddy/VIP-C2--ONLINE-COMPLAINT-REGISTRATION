const express = require('express');
const router = express.Router();
const { getAgentComplaints } = require('../controllers/agentController');
router.get('/complaints', getAgentComplaints);
module.exports = router;

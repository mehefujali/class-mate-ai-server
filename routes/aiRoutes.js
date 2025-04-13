const express = require('express');
const { getAIAnswer } = require('../controllers/aiController');
const router = express.Router();

router.post('/ask-ai', getAIAnswer);

module.exports = router;

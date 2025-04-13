const { askDeepSeek } = require('../services/deepseekService');

async function getAIAnswer(req, res) {
  const { question } = req.body;
  try {
    const reply = await askDeepSeek(question);
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getAIAnswer };

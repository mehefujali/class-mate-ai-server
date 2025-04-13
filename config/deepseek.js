require('dotenv').config();

module.exports = {
  DEEPSEEK_API_URL: 'https://openrouter.ai/api/v1/chat/completions',
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
};

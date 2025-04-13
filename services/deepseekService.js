const axios = require('axios');
const { DEEPSEEK_API_KEY, DEEPSEEK_API_URL } = require('../config/deepseek');

async function askDeepSeek(prompt) {
  try {
    const response = await axios.post(DEEPSEEK_API_URL, {
      model: "deepseek/deepseek-chat", // or "deepseek/deepseek-r1:free"
      messages: [{ role: "user", content: prompt }],
    }, {
      headers: {
        Authorization: `Bearer ${DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("DeepSeek error:", error.response?.data || error.message);
    throw new Error("AI response failed.");
  }
}

module.exports = { askDeepSeek };

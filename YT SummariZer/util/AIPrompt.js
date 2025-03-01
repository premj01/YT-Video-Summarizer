require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");



const AIPrompt = async (prompt = "") => {


  try {
    const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = await response.text();
    return text;
  } catch (error) {
    return false;
  }
}

module.exports = AIPrompt


require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const summarizer = async (transcriptData) => {

    if (transcriptData) {

        try {
            const genAI = new GoogleGenerativeAI(process.env.AI_API_KEY);

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const prompt = transcriptData;
            const result = await model.generateContent(prompt);
            const response = result.response;
            const text = await response.text();
            // console.log(text);
            return (text);
        } catch (err) {
            console.log("Summarizer ERR :" + err);
        }
    }
    else {
        return false;
    }
}
module.exports = { summarizer }


// {
//   "uid": 8,
//   "prevQuestion": "urohit also promotes his other YouTube channel focused ?"
//   "question": "urohit also promotes his other YouTube channel focused ?"
// }
const db = require('../models/db.model')
const AIPrompt = require('../util/AIPrompt')




const askQuestion = async (req, res) => {

  if (req.body.uid !== undefined && req.body.question !== undefined && req.body.prevQuestion !== undefined) {


    const { uid, question, prevQuestion } = req.body;


    db.query('SELECT video_summary FROM summary_records where entry_no = ?', [uid], async (err, results) => {

      if (err) {
        return res.status(500).json({
          QuestionReply: "<h2>Server facing Some Technical Issues... <b>if possible please report to us</b></h2>",
          StatusCar: false,
        })
      }
      if (results.length === 0) {
        return res.status(404).json({ QuestionReply: "<h2>No summary found for the given UID</h2>", StatusCar: false, });
      }
      else {


        const prompt = `${results[0].video_summary} for this summary \n i want to ask question for that my previous questions are ${prevQuestion.join("\n ")} and you have to answer only main question in short and use above paragraph as a content and questions list as past reference and the main question is ${question} . and only answer main question dont answer other past questions its only for context and also dont forgot to wrap answer in HTML code and try to add some emoji for making it interactive.if you dont know answer then give some funny answer. give some human touch and also react on general questions that dont have to take care of video . only like chatting with you also add <br><br> for gap in line and to highlight use <b></b> and make answer precise and short`;
        //       const prompt = `
        //   ${results[0].video_summary}
        //   Based on the above summary, I have a main question to ask, along with previous questions for context:
        //   ${prevQuestion.join("\n")}
        //   Please answer only the main question using the summary as context. Ignore the previous questions, they are provided just for reference.
        //   Main question: ${question}
        //   Provide the answer in HTML format and include some emojis to make it interactive.
        //   if you dont know answer then give some funny answer
        // `;



        let answer = await AIPrompt(prompt);
        answer = answer.replace(/\n/g, '').replace(/```html|```/g, '');
        // console.log(answer);


        if (answer) {
          return res.status(200).json({ question: question, answer: answer, });
        } else {
          return res.status(500).json({ QuestionReply: "<h2>Error In Processing Question</h2>", StatusCar: false, });
        }



      }
    })

  } else {
    res.status(400).json({
      data: "1000111 1101111 100000 1100111 1100101 1110100 100000 1100110 1110101 1100011 1101011 100000 1101111 1100110 100000 1111001 1101111 1110101 1110010 1110011 1100101 1101100 1100110"
    })
  }

}

module.exports = askQuestion;
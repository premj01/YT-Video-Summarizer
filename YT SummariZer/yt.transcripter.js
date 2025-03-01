require('dotenv').config();
const { YoutubeTranscript } = require('youtube-transcript');
const { summarizer } = require('./yt.summarizer')

const transcripter = async (VideoURL, videoDetails = "") => {

  try {
    const res = await YoutubeTranscript.fetchTranscript(VideoURL)

    let data = "language english .summarize a given youtube video content with emoji in it and with title and topic wrap it in HTML H1 tag and P tag you can use <b> to highlight and <br> tags also and <br> twice to make empty line \n " + videoDetails + "\n";
    res.forEach((ele) => {
      data += ele.text + " "
    })


    // await refMSG.reply(text + "\n\t\tAssistant...")

    return (await summarizer(data))

  } catch (error) {
    console.log("Transcriter ERR :" + error);
    return false;
  }
}
module.exports = { transcripter }
const { transcripter } = require('../yt.transcripter')
const db = require('../models/db.model')

const mainHandler = async (req, res) => {
  console.log("hi");

  if (req.body.URLString !== undefined && req.body.videoDetails !== undefined) {
    if (req.body.URLString.includes('youtu')) {
      try {
        let dataflag = false;
        let HTML;
        const URL = req.body.URLString;
        const videoDetails = req.body.videoDetails ?? "";
        // console.log(videoDetails);

        db.query('SELECT video_summary, entry_no FROM summary_records where video_url = ? && more_details = ?', [URL, videoDetails], async (err, results) => {
          if (err) {
            console.error('Error executing query:', err);
          } else {
            if (Array.isArray(results) && results.length === 0) {
              //create new transcript
              HTML = await transcripter(URL, videoDetails);
              if (HTML) {

                HTML = HTML.replace(/```html|```/g, '')
                //mysql insert 
                // Construct the query 
                const queryString = `INSERT INTO summary_records (video_url, video_summary , more_details)
    VALUES (?, ? , ?)`;

                // Execute the query
                db.query(queryString, [URL, HTML, videoDetails], (err, result) => {
                  if (err) {
                    console.error('Error inserting data:', err);
                  } else {
                    console.log('Data inserted successfully!');
                    //after inserting record

                    //again fetch id of uploaded summary
                    db.query('SELECT entry_no FROM summary_records where video_url = ? && more_details = ?', [URL, videoDetails], async (err, results) => {
                      if (err) {
                        res.status(500).json({
                          SummaryHTML: "<h2>Server facing Some Technical Issues... <b>if possible please report us</b></h2>",
                          StatusCar: false,
                        })
                      } else {
                        res.status(200).json({
                          SummaryHTML: HTML.replace(/\n/g, ''),
                          uid: results[0].entry_no,
                          StatusCar: true,
                        })
                      }
                    })

                  }
                });

              } else {
                res.status(404).json({
                  SummaryHTML: "<h2>URL is not valid</h2>",
                  StatusCar: false,
                })
              }

            } else {

              // console.log('Summary data:', results[0]);
              res.status(200).json({
                SummaryHTML: results[0].video_summary.replace(/\?\?/g, '').replace(/\n/g, ''),
                uid: results[0].entry_no,
                StatusCar: true,
              })
            }
          }
        });
        console.log("Summary responce send");


      } catch (err) {
        console.log("Main Handler ERR : " + err);
        res.status(404).json({
          SummaryHTML: "<h2>Server Facing Little Issue</h2>",
          StatusCar: false,
        })
      }
    } else {

      res.status(404).json({
        SummaryHTML: "<h2>URL is not valid</h2>",
        StatusCar: false,
      })
    }
  } else {
    res.status(400).json({
      data: "1000111 1101111 100000 1100111 1100101 1110100 100000 1100110 1110101 1100011 1101011 100000 1101111 1100110 100000 1111001 1101111 1110101 1110010 1110011 1100101 1101100 1100110"
    })
  }

}

module.exports = mainHandler
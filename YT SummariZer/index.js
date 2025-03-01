const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
app.use(cors());


app.use(express.json());
app.use('/api', require('./router/route'));

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Youtube Transcripter<h1>');
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(process.env.PORT, () => {
  console.log("Server Listening on port 8000");
})
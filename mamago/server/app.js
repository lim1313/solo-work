const express = require('express');
const request = require('request');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json({ strict: false }));
app.use(cors());

app.post('/translate', (req, res, next) => {
  console.log('');
});

app.get('/translate', function (req, res) {
  let api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  let options = {
    url: api_url,
    form: {
      source: req.query.source,
      target: req.query.target,
      text: req.query.text,
    },
    headers: {
      'X-Naver-Client-Id': process.env.NODE_ENV_NAVER_CLIENT,
      'X-Naver-Client-Secret': process.env.NODE_ENV_NAVER_CLIENT_KEY,
    },
  };
  request.post(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { 'Content-Type': 'text/json;charset=utf-8' });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log('error = ' + response.statusCode);
    }
  });
});

app.use((error, req, res, next) => {
  if (error) {
    res.status(400).send('error');
  } else {
    res.status(500).send('sorry try later');
  }
});

app.listen(5000, function () {
  console.log('http://localhost:5000/translate app listening on port 5000!');
});

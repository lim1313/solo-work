const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//* jwt accessToken을 cookie로 전송해주기 때문에 cookie-parser필요
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

// 어떤 미들웨어도 처리하지 못한 경로일 경우
app.use((req, res, next) => {
  console.log('end');
  res.status(404).send('Not Found, Not available');
});

// 위에서 에러처리를 하지 못한 경우 (안전망)
app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send('sorry, try later!');
});

app.listen(4000, () => {
  console.log('4000 port connected');
});

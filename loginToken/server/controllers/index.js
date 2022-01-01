const user = require('../models').user;
const jwt = require('jsonwebtoken');

const secretKey = 'secretKey';

module.exports = {
  post: async (req, res, next) => {
    //TODO 회원가입
    const { userId, password, email } = req.body;
    // const newUser = await user.create({ userId, password, email });
    const [newUser, created] = await user.findOrCreate({
      where: { userId },
      defaults: {
        password,
        email,
      },
    });
    console.log('-------------');
    console.log(newUser, created);
    // created => false // 이미 존재
    if (!created) {
      res.status(400).send('already exist');
    } else {
      // res.redirect('http://localhost:3000/login', 302); //! 왜 안도ㅑ??
      res.status(201).send('success');
    }
  },

  postId: async (req, res, next) => {
    //TODO 아이디 중복 확인
    const { userId } = req.body;
    const isExist = await user.findOne({ where: { userId } });
    if (isExist === null) {
      res.status(204).json('you can use this ID');
    } else {
      res.status(409).json({ message: 'already exist' });
    }
  },

  login: async (req, res, next) => {
    //TODO 로그인 처리, accessToken cookie로 전송(csrf token 공부하기)
    const { userId, password } = req.body;

    function accessNewToken(userId, password) {
      return jwt.sign({ userId, password }, secretKey, { expiresIn: 5 });
    }

    function refreshNewToken(userId, password) {
      return jwt.sign({ userId, password }, secretKey, { expiresIn: 60 });
    }

    const isExist = await user.findOne({ where: { userId, password } });
    if (isExist) {
      const accessToken = accessNewToken(userId, password);
      const refreshToken = refreshNewToken(userId, password);

      //* cookie에 accessToken 전송 => credentials : true
      //* httpOnly : true 설정을 통해 XSS 공격 방지
      res
        .status(201)
        .cookie('refreshToken', refreshToken, { httpOnly: true })
        .json({ data: { accessToken, userId } });
    } else {
      res.status(401).send('you are not a user on this app, please signup');
    }
  },

  myinfo: async (req, res, next) => {
    const auth = req.headers.authorization;
    let token = auth && auth.split(' ')[1];

    if (!auth) {
      res.status(400).send('no auth');
    } else {
      jwt.verify(token, secretKey, (err, decode) => {
        if (err) {
          res.status(400).send('not valid');
        } else {
          res.status(200).send({ data: decode });
        }
      });
    }
  },

  refresh: async (req, res, next) => {
    const cookie = req.cookies;

    function accessNewToken(userId, password) {
      return jwt.sign({ userId, password }, secretKey, { expiresIn: 5 });
    }

    if (cookie) {
      jwt.verify(cookie.refreshToken, secretKey, (err, decode) => {
        if (err) {
          res.status(400).send('not valid');
        } else {
          let { userId, password } = decode;
          let accessToken = accessNewToken(userId, password);
          res.status(200).send({ data: { accessToken, userId } });
        }
      });
    }
  },
};

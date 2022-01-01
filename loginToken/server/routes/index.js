const express = require('express');
const controller = require('../controllers');
const router = express.Router();

router.post('/login', controller.login);
router.post('/signup', controller.post);
router.post('/checkId', controller.postId);
router.post('/refresh', controller.refresh);

router.post('/logout', (req, res, next) => {});

// userid에 연결된 영화 가져오기(associate 필요)
router.get('/myinfo', controller.myinfo);

module.exports = router;

/* eslint-disable */
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const articleCtrl = require('../controllers/article');

router.get('/', articleCtrl.getAllArticles);
router.post('/', auth, articleCtrl.createArticle);
router.get('/:id', articleCtrl.getArticleById);

module.exports = router;
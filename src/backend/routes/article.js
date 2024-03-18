/* eslint-disable */
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer');
const articleCtrl = require('../controllers/article');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    }
  });

const upload = multer({ storage: storage });

router.get('/', articleCtrl.getAllArticles);
router.post('/', auth, upload.single('image'), articleCtrl.createArticle);

module.exports = router;
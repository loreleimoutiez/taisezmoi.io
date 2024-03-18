/* eslint-disable */
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cardCtrl = require('../controllers/card');
const multer = require('../middlewares/multer');

router.get("/", auth, cardCtrl.getAllCards);
router.get("/:id", auth, cardCtrl.getOneCard);
router.post('/', auth, upload.single('image'), cardCtrl.createCard);
router.put("/:id", auth, multer, cardCtrl.modifyCard);
router.delete("/:id", auth, cardCtrl.deleteCard);

module.exports = router;

/* eslint-disable */
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const cardCtrl = require('../controllers/card');

router.get("/", auth, cardCtrl.getAllCards);
router.get("/:id", auth, cardCtrl.getOneCard);
router.post("/", auth, multer, cardCtrl.createCard);
router.put("/:id", auth, multer, cardCtrl.modifyCard);
router.delete("/:id", auth, cardCtrl.deleteCard);

module.exports = router;

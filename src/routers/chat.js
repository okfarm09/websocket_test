const express = require("express");
const router = express.Router();

const controller = require("../controllers/chat");

router.get("/", controller.index);

module.exports = router;
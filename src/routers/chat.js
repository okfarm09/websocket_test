const express = require("express");
const router = express.Router();

const controller = require("../controllers/chat");

router.get("/:chatName/join", controller.index);
router.get("/:chatName/check", controller.checkName);
router.get("/:chatName/out", controller.removeName);

module.exports = router;
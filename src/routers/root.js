const express = require("express");
const router = express.Router();

const mainC = require("../controllers/main");
router.get("/", mainC.index);
router.get("/index", mainC.index);

// Routers
const chat = require("./chat");
router.use("/chat", chat);

module.exports = router;
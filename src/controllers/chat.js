// Logger
const logger = require("../utils/logger");

exports.index = (req, res) => {
    logger.info(`${req.originalUrl} chat.index`);
    res.render("chat", {key: "index"});
}
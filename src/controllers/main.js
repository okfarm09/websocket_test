// Logger
const logger = require("../utils/logger");

exports.index = (req, res) => {
    logger.info(`${req.originalUrl} main.index`);
    res.render("index", {key: "main"});
}
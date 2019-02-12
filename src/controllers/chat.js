// Logger
const logger = require("../utils/logger");
const chatNames = require("../utils/chatnames").chatNames;

exports.index = (req, res) => {
    const chatName = req.params.chatName;
    logger.info(`${req.originalUrl} chat.index`);
    res.render("chat", {key: "index", chatName: chatName});
}

exports.checkName = (req, res) => {
    const chatName = req.params.chatName;
    const resObj = {};
    if(chatNames.length > 0 && chatNames.filter((obj) => {return obj.name === chatName}).length > 0) resObj.status = "bad";
    else {
        resObj.status = "good";
        chatNames.push({name: chatName});
    }
    res.send(resObj);
}

exports.removeName = (req, res) => {
    const chatName = req.params.chatName;
    chatNames.pop(chatNames.filter((obj) => {return obj.name === chatName}));
    res.send({status: "good"});
}
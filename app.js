const express = require("express");
const app = express();
const WebSocket = require("ws");
const { SHA3 } = require("sha3");

// Port
const port = process.env.PORT || 5000;

// Body Parser
app.use(express.json());

// Static Dirs
app.use("/js", express.static("./src/js"));
app.use("/style", express.static("./src/style"));
app.use("/files", express.static("./src/files"));

// View Enging
app.set("view engine", "ejs");

// Router
const router = require("./src/routers/root");
app.use("/", router);

const server = new WebSocket.Server({ server: app.listen(port, () => console.log(`Server ready on ${port}`)) });

const hash = new SHA3(512);

const mDate = new Date();
const today = `${mDate.getFullYear()}-${mDate.getMonth() + 1}-${mDate.getDate()}`;

// const chatNames = require("./src/utils/chatnames").chatNames;

server.on("connection", socket => {
    socket.on("message", message => {
        const msgObj = JSON.parse(message);
        const sender = msgObj.sender;
        hash.update(today+sender);
        const myHash = String(hash.digest("hex")).substring(0, 6).toUpperCase();
        hash.reset();
        const returnMsg = (msgObj.msg === "'s commin")? `${myHash}${msgObj.msg}` : `<span class="nameSpan" style="color:#${myHash}">[${myHash}] :</span>${msgObj.msg}`;
        server.clients.forEach(client => {
            client.send(returnMsg);
        });
    });
    socket.send("Hello Client!");
});
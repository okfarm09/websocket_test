const express = require("express");
const app = express();
const WebSocket = require("ws");

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

server.on("connection", socket => {
    socket.on("message", message => {
        console.log(message);
        server.clients.forEach(client => {
            client.send(message);
        });
    });
    socket.send("Hello Client!");
});
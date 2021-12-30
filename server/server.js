const express = require("express");
const path = require("path");
const http = require("http");
const socketIO = require("socket.io");

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(path.join(__dirname, "/../public")));

io.on("connection", (socket) => {
  console.log("A new user just connected");

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

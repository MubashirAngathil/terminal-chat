const http = require("http").createServer();
const io = require("socket.io")(http);
const port = 3000;
http.listen(port, () => console.log(`server listening on port: ${port}`));

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (event) => {
    console.log('Event',event);
    socket.broadcast.emit("message", event);
  });
});
io.on("disconnect", (evt) => {
  console.log("disconnected");
});

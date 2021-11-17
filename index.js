const express = require("express");
const app = express();
const server = require("http").Server(app);
var toastr = require("express-toastr");

app.use(express.static("public"));
app.use(toastr());

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/views/index.html");
});

//start the server
server.listen(4040);

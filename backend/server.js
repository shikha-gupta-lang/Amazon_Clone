const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running successfully!");
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running successfully!");
});

server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
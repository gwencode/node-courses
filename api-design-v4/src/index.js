import http from "http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Hello World yah");
  }
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

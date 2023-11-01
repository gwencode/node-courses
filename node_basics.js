// console.log('Hello World!')

// // alert('Hello World!')
// // => error because alert is not defined in node,
// // terminal environment different from the browser environment

// // Browser vs node.js
// console.log(global);

// Server vs Website
const http = require('http');
const server = http.createServer((req, res) => {
  res.write('Hello World!');
  res.end();
});

server.listen(3000);

// Node REPL (Read-Eval-Print-Loop)

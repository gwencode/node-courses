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

// Process & Environment
// console.log(process.argv)
// => [
//   '/home/gwencode/.nvm/versions/node/v16.15.1/bin/node',
//   '/home/gwencode/code/gwencode/node-courses/index.js'
// ]

// process.env
// => an object containing the user environment variable name and value pairs

// process.env.NODE_ENV = 'development'; // 'production', 'staging', 'test'
// console.log(process.env.NODE_ENV);

const http = require('http');
const fs = require('fs');

function doOnRequest(request, response){
  // Send back a message saying "Welcome to Twitter"
  // code here...
  // response.end("Welcome to Twitter")
  if (request.method === 'GET' && request.url === '/') {
    // read the index.html file and send it back to the client
    // code here...
    // fs.createReadStream()
    const page = fs.readFileSync("./index.html", "utf8");
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(page);
  }
  else if (request.method === 'POST' && request.url === '/sayHi') {
    // code here...
    fs.appendFileSync("hi_log.txt", "Somebody said hi.\n");
    response.end("hi back to you!");
  }
  else if (request.method === 'POST' && request.url === '/greeting') {
    // accumulate the request body in a series of chunks
    // code here...
  }
  else {
    // Handle 404 error: page not found
    // code here...
    response.statusCode = 404;
    response.statusMessage = "Error: Not Found.";
    response.end("Error 404");
  }
}

function doOnError(infoOnError) {
  console.error(infoOnError);
}

const server = http.createServer()

server.listen(3000);

server.on('request', doOnRequest)
server.on('clientError', doOnError )

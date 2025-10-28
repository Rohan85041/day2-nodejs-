const http = require('http'); // Import the http module
const port = 3000; // Port to listen on

// Create the HTTP server
const server = http.createServer(function(req, res){
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});
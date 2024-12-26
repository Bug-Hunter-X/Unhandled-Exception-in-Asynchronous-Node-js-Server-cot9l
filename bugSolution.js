const http = require('http');

const server = http.createServer((req, res) => {
  // Handle the request asynchronously with proper error handling
  setTimeout(() => {
    try {
      // Simulate an operation that might throw an error
      // Example: Accessing a non-existent file
      // const data = fs.readFileSync('nonexistent.txt');

      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    } catch (error) {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }, 5000); 
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
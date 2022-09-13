const url = require('url');
const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    let addr = request.url;
    let q = url.parse(addr, true);
   let filePath = '';

      fs.appendFile('log.txt', 'URL: ' + addr + '\nTimestamp: ' + new Date() + '\n\n', (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Added to log.');
        }
      });

      if (q.pathname.includes('documentation')) {
        filePath = (__dirname + '/documentation.html');
      } else {
        filePath = 'index.html';
      };

      fs.readFile(filePath, (err, data) => {
        if (err) {
          throw err;
        }

    console.log("Url: ", request.url); 
    console.log("Pathname: ", q.pathname); 
    console.log("Q: ", q); 

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write(data);
  response.end('Literally anything else\n');
      });
}).listen(8080);

console.log('My first Node test server is running on Port 8080.');


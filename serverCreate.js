const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<html><body><p>Hello World</p></body></html>");
  res.end();
});

server.listen(5000);
console.log("Running Server");

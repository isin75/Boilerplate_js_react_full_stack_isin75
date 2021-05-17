let http = require("http");

const port = 8080;

http
  .createServer((req, res) => {
    if (req.url === "/start") {
      res.write("Starter\n");
    }
    res.write("Hello world");
    res.end();
  })
  .listen(port);

console.log(`Server at http://localhost:${port}`);

const http = require("http");
const fs = require("fs");
const PORT = 8000;

const jsonData = require("./data/users.json");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    //*no nos preocupemos demasiado por pipe, pero básicamente, es una forma de no sobrecargar la lectura
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/json-info") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(jsonData));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end();
  }
});

server.listen(PORT, () => console.log("anda"));

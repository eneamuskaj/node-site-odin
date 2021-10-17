var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    switch (filename) {
      case "./":
        fs.readFile("./index.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("404");
            return res.end();
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      case "./about.html":
        fs.readFile("./about.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("404");
            return res.end();
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      case "./contact-me.html":
        fs.readFile("contact-me.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("404");
            return res.end();
          }
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
        break;
      default:
        fs.readFile("404.html", function (err, data) {
          if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            res.write("404");
            return res.end();
          }
          res.writeHead(404, { "Content-Type": "text/html" });
          res.write(data);
          return res.end();
        });
    }
  })
  .listen("8080");

var http = require("http"); // 노드모듈을 요청해서 변수 http에 저장

var hostname = "127.0.0.1"; //내컴퓨터 내부주소
var port = "8080"; // 사용할 서버 포트

//서버생성 (request:요청,responsive:응답)
const server = http.createServer(function (req, res) {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      const products = JSON.stringify([{ name: "배변패드", price: 50000 }]);
      res.end(products);
    } else if (method === "POST") {
      res.end("To be complete");
    }
  }
  res.end("Good Bye");
});
// 서버를 요청 대기 상태로 만든다(port,hostname)
server.listen(port, hostname);
console.log("mango-shop server on");

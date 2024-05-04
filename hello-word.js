console.log("HELLO WORLD")


const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello Node!!!!</h1>\n');
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
server.on('error', (err) => {
  console.error(`Error starting server: ${err}`);
});


fs.writeFileSync("welcome.txt" ,"Hello Node");
fs.readFile("welcome.txt", (err, data) =>{
    console.log(data.toString())
});

const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer(async (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
    "Access-Control-Allow-Max-Age": 259200,
    "Content-Type": "application/json",
  };

  //access request data
  let bufferData = [];

  for await (const chunk of req) {
    bufferData.push(chunk);
  }
  let searchQuery = bufferData.toString();

  let apiRequestQuery =
    `http://www.omdbapi.com/?apikey=5945647d&` + searchQuery;
  console.log(searchQuery);

  http.get(apiRequestQuery, (resp) => {
    if (resp.statusCode === 200) {
      res.writeHead(200, headers);
      resp
        .on("data", (data) => {
          res.write(data.toString());
        })
        .on("error", (err) => {
          console.log("err:", err, message);
          res.write(JSON.stringify(err));
        })
        .on("end", () => {
          console.log(apiRequestQuery);
          console.log("response ended");
          res.end();
        });
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

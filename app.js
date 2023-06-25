let express = require("express");
let app = express();
const requestIp = require('request-ip');

app.get("/one", (req, res) => {
  let address = req.socket.address();
  let remoteAddress = req.socket.remoteAddress;
  let remoteAddress1 = req.info?.remoteAddress;
  let connection = req.connection.remoteAddress;
  let connection1 = req.connection.socket?.remoteAddress;
  let client = req.headers["x-client-ip"];
  let forwarded = req.headers["x-forwarded-for"];
  let forwarded1 = req.headers["x-forwarded"];
  let forwarded2 = req.headers["forwarded-for"];
  let forwarded3 = req.headers["forwarded"];
  let cloudflair = req.headers["cf-connecting-ip"];
  let fastly = req.headers["fastly-client-ip"];
  let trueClient = req.headers["true-client-ip"];
  let real = req.headers["x-real-ip"];
  let cluster = req.headers["x-cluster-client-ip"];
  let userAgent = req.headers['user-agent']


  let ip = requestIp.getClientIp(req)

  res.status(200).json({
    address,
    remoteAddress,
    remoteAddress1,
    connection,
    connection1,
    client,
    forwarded,
    forwarded1,
    forwarded2,
    forwarded3,
    cloudflair,
    fastly,
    trueClient,
    real,
    cluster,
    ip,
    userAgent
  });
});

// app.get("/two", (req, res) => {
//   res.status(200).json({ device });
// });

app.listen(8080);

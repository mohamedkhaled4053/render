let express = require("express");
let app = express();

app.get("/one", (req, res) => {
  let address = req.socket.address();
  let remoteAddress = req.socket.remoteAddress;
  let forwarded = req.headers["x-forwarded-for"];
  let real = req.headers["x-real-ip"];
  res.status(200).json({
    address,
    remoteAddress,
    header: forwarded,
    real
  });
});

// app.get("/two", (req, res) => {
//   res.status(200).json({ device });
// });

app.listen(8080);

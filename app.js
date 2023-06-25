let express = require("express");
let app = express();
const requestIp = require("request-ip");
const DeviceDetector = require("node-device-detector");
const Detector = require("device-detector-js");

app.get("/one", (req, res) => {
  let userAgent = req.headers["user-agent"];

  const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: false,
  });
  const result = detector.detect(userAgent);

  const deviceDetector = new Detector();
  const device = deviceDetector.parse(userAgent);

  let ip = requestIp.getClientIp(req);

  res.status(200).json({
    ip,
    userAgent,
    nodeDeviceDetector: result,
    DeviceDetector:device
  });
});

// app.get("/two", (req, res) => {
//   res.status(200).json({ device });
// });

app.listen(8080);

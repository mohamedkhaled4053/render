let express = require("express");
const DeviceDetector = require("node-device-detector");
const ClientHints = require("node-device-detector/client-hints");

const Detector = require("device-detector-js");

let app = express();

app.get("/one", (req, res) => {
  const detector = new DeviceDetector({
    clientIndexes: true,
    deviceIndexes: true,
    deviceAliasCode: true,
  });
  const clientHints = new ClientHints();
  const userAgent = req.headers["user-agent"];
  //@ts-ignore
  const clientHintData = clientHints.parse(req.headers);
  const result = detector.detect(userAgent, clientHintData);
  res.status(200).json({ result });
});

app.listen(8080);

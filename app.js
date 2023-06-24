let express = require("express");
const os = require("os");
const device = require("device");
let app = express();

function getMacAddress() {
  const networkInterfaces = os.networkInterfaces();
  const interfaceNames = Object.keys(networkInterfaces);

  for (const name of interfaceNames) {
    const networkInterface = networkInterfaces[name];
    const interfaceWithMac = networkInterface.find(
      (interfaceData) =>
        !interfaceData.internal && interfaceData.mac !== "00:00:00:00:00:00"
    );

    if (interfaceWithMac) {
      return interfaceWithMac.mac;
    }
  }

  return null;
}

app.get("/one", (req, res) => {
  let ip = req.ip;
  let ips = req.ips;
  let userAgent = req.headers["user-agent"];
  const userDevice = device(req.headers["user-agent"]);
  res.status(200).json({
    ip,
    ips,
    userAgent,
    mac: getMacAddress(),
    networkInterfaces: os.networkInterfaces(),
    userDevice,
  });
});

// app.get("/two", (req, res) => {
//   res.status(200).json({ device });
// });

app.listen(8080);

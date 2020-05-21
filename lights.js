const maxApi = require("max-api");
const lifx = require("lifx");
const lx = lifx.init();

var oldHue = 0;
var bulbs = {};

maxApi.addHandler("randomHue", (bulbName) => {
  var bulb = bulbs[bulbName];
  maxApi.post(bulb);
  var hue = ((Math.random() * 0.6) + 0.2 + oldHue) % 1;
  lx.lightsColour(0xffff * hue, 0xffff * 1, 0xffff * 0.9, 0xffff * 1, 0, bulb);
  oldHue = hue;
  maxApi.outlet("lastHue", hue);
});
	
	
lx.on('bulb', function(b) {
  bulbs[b.name] = b.addr.toString("hex");
  maxApi.outlet("bulb", b.name);
});
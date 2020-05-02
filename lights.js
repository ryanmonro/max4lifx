const maxApi = require("max-api");
const lifx = require("lifx");
const lx = lifx.init();

maxApi.outlet("Max4LIFX");

maxApi.addHandler("randomHue", (lastHue=0.0) => {
  var hue = ((Math.random() * 0.6) + 0.2 + lastHue) % 1;
  lx.lightsColour(0xffff * hue, 0xffff * 1, 0xffff * 0.9, 0xffff * 1, 0)
	maxApi.outlet("lastHue", hue);
});
	
const breakpoints = require("./breakpoints");
const colors = require("./colors");
const typography = require("./typography");

const globalVars = {
  ...breakpoints,
  ...colors,
  ...typography
};

module.exports = globalVars;

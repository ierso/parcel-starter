const breakpoints = require("./breakpoints");
const colors = require("./colors");
const headings = require("./headings");
const typography = require("./typography");

const globalVars = {
  ...breakpoints,
  ...colors,
  ...headings,
  ...typography
};

module.exports = globalVars;

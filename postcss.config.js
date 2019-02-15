module.exports = {
  plugins: [
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    require("postcss-nested"),
    require("autoprefixer")({
      browsers: ["> 1%", "last 2 versions", "ie >= 11"]
    })
  ]
};

const proxy = require("http-proxy-middleware");
// See https://facebook.github.io/create-react-app/docs/proxying-api-requests-in-development

module.exports = function(app) {
  app.use(
    proxy("/api", {
      pathRewrite: { "^/api": "/" },
      changeOrigin: true,
      target: "http://localhost:4000"
    })
  );
};

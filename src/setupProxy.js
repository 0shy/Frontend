const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/SignUp',{
      target: 'https://b026-116-47-108-171.ngrok-free.app/',
      changeOrigin: true,
    }),
  );
};
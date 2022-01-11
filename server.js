function ServerFactory(
  config,
  http,
  app,
) {
  return {
    start,
    port: config.port,
  };
  function start() {
    return new Promise((resolve, reject) => {
      const { port } = config;
      http.createServer(app.getAppInstance()).listen(port, (err) => {
        if (err) reject(err);
        resolve();
      });
    });
  }
}

module.exports = ServerFactory;

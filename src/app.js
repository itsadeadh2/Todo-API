// const express = require('express');
function App(
  HealthRoutes,
  TodoRoutes,
  bodyParser,
  express,
) {
  return {
    getAppInstance,
  };

  function getAppInstance() {
    const app = express();
    app.use(bodyParser.json());
    HealthRoutes.register(app);
    TodoRoutes.register(app);
    return app;
  }
}

module.exports = App;

const container = require('./container');

container.startModule('server', { async: true }).then((server) => {
  console.log('Server started on port ', server.port);
});

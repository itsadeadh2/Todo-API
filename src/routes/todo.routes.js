function TodoRoutes(
  TodoController,
) {
  return {
    register,
  };

  function register(app) {
    app.get('/todo/:id', TodoController.getById);
    app.get('/todo', TodoController.getAll);
    app.post('/todo', TodoController.create);
    app.put('/todo/:id', TodoController.update);
    app.delete('/todo/:id', TodoController.deleteById);
  }
}

module.exports = TodoRoutes;

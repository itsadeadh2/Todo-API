function TodoController(
  TodoService,
) {
  return {
    getAll,
    getById,
    create,
    update,
    deleteById,
  };

  function verySimpleErrorHandler(res, error) {
    console.log(error);
    return res.status(400).send({ message: error.message });
  }

  function ensureIdIsGiven(req) {
    const { id = null } = req.params;
    if (id === null) throw new Error('No id given!');
  }

  function getAll(req, res) {
    try {
      const data = TodoService.getAll();
      return res.send(data);
    } catch (error) {
      return verySimpleErrorHandler(res, error);
    }
  }

  async function getById(req, res) {
    try {
      ensureIdIsGiven(req);
      const data = TodoService.getById(req.params.id);
      return res.send(data);
    } catch (error) {
      return verySimpleErrorHandler(res, error);
    }
  }

  function create(req, res) {
    try {
      TodoService.create(req.body);
      return res.status(201).send();
    } catch (error) {
      return verySimpleErrorHandler(res, error);
    }
  }

  function update(req, res) {
    try {
      ensureIdIsGiven(req);
      TodoService.update(req.body, req.params.id);
      return res.status(204).send();
    } catch (error) {
      return verySimpleErrorHandler(res, error);
    }
  }

  function deleteById(req, res) {
    try {
      ensureIdIsGiven(req);
      TodoService.deleteById(req.params.id);
      return res.status(204).send();
    } catch (error) {
      return verySimpleErrorHandler(res, error);
    }
  }
}

module.exports = TodoController;

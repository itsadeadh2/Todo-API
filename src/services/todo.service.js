function TodoService(
  database,
  lodash,
  uuid,
) {
  return {
    getAll,
    getById,
    create,
    update,
    deleteById,
  };

  function getAll() {
    return lodash.cloneDeep(database);
  }

  function getById(id) {
    return database.find((_todo) => _todo.id === id);
  }

  function create(body) {
    const todo = {
      done: body.done,
      description: body.description,
      id: uuid.v4(),
    };
    database.push(todo);
  }

  function update(body, id) {
    const todo = database.find((_todo) => _todo.id === id);
    if (!todo) throw new Error('No todo found for the given id!');
    if (body.description) todo.description = body.description;
    if (body.done) todo.done = body.done;
  }

  function deleteById(id) {
    const index = database.findIndex((_todo) => _todo.id === id);
    if (index === -1) return;
    database.splice(index, 1);
  }
}

module.exports = TodoService;

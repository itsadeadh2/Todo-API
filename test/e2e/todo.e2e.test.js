const request = require('supertest');
const container = require('../../container');

describe('/todo', () => {
  let server;
  let database = [];

  beforeAll(async () => {
    server = await container.startModule('App');
    database = container.getModule('database');
  });

  describe('GET /todo:id', () => {
    test('should return a specific todo', async () => {
      const sampleTodo = database[0];
      const { body } = await request(server.getAppInstance()).get(`/todo/${sampleTodo.id}`);
      expect(body).toEqual(sampleTodo);
    });
  });
  describe('GET /todo', () => {
    test('should return all the todos', async () => {
      const { body } = await request(server.getAppInstance()).get('/todo');
      expect(body.length).toEqual(database.length);
    });
  });
  describe('POST /todo', () => {
    test('should create a todo', async () => {
      const dummyTodo = {
        description: 'dummy',
        done: false,
      };
      await request(server.getAppInstance())
        .post('/todo')
        .send(dummyTodo);
      const indexOfDummyTodo = database.findIndex((todo) => todo.description === 'dummy');
      expect(indexOfDummyTodo).not.toBe(-1);
    });
  });
  describe('PUT /todo/:id', () => {
    test('should update a given todo', async () => {
      const sampleTodo = database[0];
      const updatedBody = { description: 'updated description', done: true };
      await request(server.getAppInstance())
        .put(`/todo/${sampleTodo.id}`)
        .send(updatedBody);
      expect(database[0].description).toEqual(updatedBody.description);
      expect(database[0].done).toEqual(updatedBody.done);
    });
  });
  describe('DELETE /todo/:id', () => {
    test('should delete a specific todo', async () => {
      const sampleTodo = database[0];
      await request(server.getAppInstance())
        .delete(`/todo/${sampleTodo.id}`)
        .send();
      const sampleTodoIndex = database.findIndex((todo) => todo.id === sampleTodo.id);
      expect(sampleTodoIndex).toEqual(-1);
    });
  });
});

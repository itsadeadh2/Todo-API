// Libraries
const container = require('kontainer-di');

const lodash = require('lodash');
container.register('lodash', [], () => lodash);

const http = require('http');
container.register('http', [], http);

const bodyParser = require('body-parser');
container.register('bodyParser', [], () => bodyParser);

const uuid = require('uuid');
container.register('uuid', [], () => uuid);

const express = require('express');
container.register('express', [], () => express);

const config = require('./config');
container.register('config', [], config);

// Controllers
const HealthController = require('./src/controllers/health.controller');
container.register('HealthController', [], HealthController);

const TodoController = require('./src/controllers/todo.controller');
container.register('TodoController', [
  'TodoService',
], TodoController);

// Routes
const HealthRoutes = require('./src/routes/health.routes');
container.register('HealthRoutes', [
  'HealthController',
], HealthRoutes);

const TodoRoutes = require('./src/routes/todo.routes');
container.register('TodoRoutes', [
  'TodoController',
], TodoRoutes);

// Services
const TodoService = require('./src/services/todo.service');
container.register('TodoService', [
  'database',
  'lodash',
  'uuid',
], TodoService);

// Database
const database = require('./src/database/memory.db');
container.register('database', [], database);

// Server
const App = require('./src/app');
container.register('App', [
  'HealthRoutes',
  'TodoRoutes',
  'bodyParser',
  'express',
], App);

const ServerFactory = require('./server');
container.register('server', [
  'config',
  'http',
  'App',
], ServerFactory);

module.exports = container;

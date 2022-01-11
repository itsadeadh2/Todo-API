
# TODO API
## Disclaimer
> This is only a resemblance of what an usual project that I make look like. In a real-life cenario I'd focus on having more tests (unit tests in this case), add a repository, put middlewares, add authentication etc. The key points I wanted to show in this project is the way I usually structure the code and the readability of it, all the rest was simplified to keep it short.
## Requirements
- NodeJs v12+
- NPM v8+

## Setup
1 - `npm install`
2 - `npm run start`

## Endpoints
### Health
|Path|Method|Expected Status Code|Descricao|
|:---|:----:|:---------:|:----------|
|`/`|`GET`|200|Returns a dummy message.|

### Todo
|Path|Method|Expected Status Code|Descricao|
|:---|:----:|:---------:|:----------|
|`/todo/:id`|`GET`|200|Get a specific todo by id.|
|`/todo`|`GET`|200|Get an array of all the todos.|
|`/todo`|`POST`|201|Create a todo.|
|`/todo/:id`|`PUT`|204|Update a specific todo by id.|
|`/todo/:id`|`DELETE`|204|Update a specific todo by id.|

## Available commands
|Command|Description|
|:---|:----:|
|`npm run watch`|Starts the server in watch-mode using nodemon.|
|`npm run test`|Runs jest test suite.|
|`npm run lint:fix`|Attempts to fix all autofixable problems.|
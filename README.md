# @cloud-cli/http

Wrapper for Node.js HTTP server

## Install

```sh
npm i @cloud-cli/http
```

## Usage

```ts
import createServer from '@cloud-cli/http';

// same API as Node.JS http module. Listens to `process.env.PORT` automatically
const server = createServer(function (request, response) {
  // ...
});
```

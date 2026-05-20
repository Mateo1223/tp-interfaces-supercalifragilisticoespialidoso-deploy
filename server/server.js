const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const users = JSON.parse(
  fs.readFileSync(path.join(dirname, 'users.json'))
);

const products = JSON.parse(
  fs.readFileSync(path.join(dirname, 'products.json'))
);

const router = jsonServer.router({
  users,
  products
});

server.use(middlewares);

server.get('/health', (_, res) => {
  res.json({ ok: true });
});

server.use(router);

server.listen(3008, () => {
  console.log('Mock server running on http://localhost:3008');
});

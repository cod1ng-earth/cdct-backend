
const jsonServer = require('json-server')
// const URL = require('url');
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const PORT = process.env.PORT;

server.use(middlewares)

const router = jsonServer.router('/data/db.json')

server.use(jsonServer.bodyParser)

server.use(router)

server.listen(PORT, () => {
    console.log('JSON Server is running')
})

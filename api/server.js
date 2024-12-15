const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

// Middleware para persistir dados no localStorage
server.use((req, res, next) => {
    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
        const data = JSON.parse(req.body)
        localStorage.setItem('db', JSON.stringify(data)) // Persistindo no localStorage
    }
    next()
})

server.use(router)
server.listen(3000, () => {
    console.log('JSON Server is running')
})
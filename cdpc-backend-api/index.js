const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const usuario = require('./src/routes/usuario')

// não sei pra que serve por enquanto
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/users', usuario.getUsuarios)
app.get('/users/:id', usuario.getUsuarioPorId)
app.post('/users', usuario.createUsuario)
app.put('/users/:id', usuario.updateUsuario)
app.delete('/users/:id', usuario.deleteUsuario)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
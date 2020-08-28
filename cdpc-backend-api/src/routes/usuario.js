const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'cdpc_db',
    user: 'postgres',
    password: 'root'
})

client.connect()

const getUsuarios = (request, response) => {
    client.query ('SELECT * FROM usuarios ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
    })
}

const getUsuarioPorId = (request, response) => {
    const id = parseInt(request.params.id)

    client.query ('SELECT * FROM usuarios WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
    })
}

const createUsuario = (request, response) => {
    const { nome, cpf, email, senha, telefone, idInstituicao } = request.body

    client.query ('INSERT INTO usuarios (nome, cpf, email, senha, telefone, instituicao_id) VALUES ($1, $2, $3, $4, $5, $6)', [nome, cpf, email, senha, telefone, idInstituicao], (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
    })
}

const updateUsuario = (request, response) => {
    const id = parseInt(request.params.id)
    const { nome, cpf, email, senha, telefone, idInstituicao } = request.body

    client.query ('UPDATE usuarios SET nome=$1, cpf=$2, email=$3, senha=$4, telefone=$5, instituicao_id=$6 WHERE id=$7', [nome, cpf, email, senha, telefone, idInstituicao, id], (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
    })
}

const deleteUsuario = (request, response) => {
    const id = parseInt(request.params.id)

    client.query ('DELETE FROM usuarios WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
          }
          response.status(200).json(results.rows)
    })
}

module.exports = {
    getUsuarios,
    getUsuarioPorId,
    createUsuario,
    updateUsuario,
    deleteUsuario
}
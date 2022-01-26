require('dotenv').config()

const express = require('express')

const app = express()

const server = require('http').createServer(app)

const models = require('../models/models');

const routes = require('../routes/routes')

const cors = require('cors')

app.use(cors());

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.end('Geolocation Rest API, Version 1.0')
})

app.use('/', routes)

app.set('address', `${process.env.ADDRESS}`)
app.set('port', `${process.env.PORT}`)


//Iniciando o Servidor
server.listen(app.get("port"), app.get("address"), () => {
    console.log("Servidor rodando em " + app.get("address") + " na porta " + app.get("port"));
});
const express = require('express')
const app = express()
const port = 3030
const path = require('path')


app.listen(port, () =>{
    console.log('La pagina esta funcionando en http://localhost:' + port)
})
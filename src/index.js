import express from 'express'
//const express = require('express')

const app = express()

app.set('port', 3000)

app.listen(app.get('port'),()=>{
    console.log('Servidor en puerto', app.get('port'))
})

app.get('/', (req, res)=>{
    res.json({message: 'Bienvenido a mi aplicacion'})
})
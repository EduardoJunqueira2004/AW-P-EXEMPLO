const express = require('express');
const carrosRouter= require('express').Router();
//Import controlador
const controler = require('../controllers/carros');

//CRUD para o Carro
carrosRouter.get('/', controllers.getAll);//lê todos
carrosRouter.get('/:id', controllers.getById);//lê um id
carrosRouter.post('/create', controllers.create);//cria um novo carro
carrosRouter.put('/update', controllers.update); //atualiza um carro
carrosRouter.delete('/delete/:id', controllers.delete);//delete de um carro pelo id

module.exports = carrosRouter;



const express = require('express').Router;
//Import controlador
const controller = require('../controllers/carros');

//CRUD para o Carro
carrosRouter.get('/', controller.getAll);//lê todos
carrosRouter.get('/:id', controller.getById);//lê um id
carrosRouter.post('/create', controller.create);//cria um novo carro
carrosRouter.put('/update', controller.update); //atualiza um carro
carrosRouter.delete('/delete/:id', controller.delete);//delete de um carro pelo id

module.exports = carrosRouter;



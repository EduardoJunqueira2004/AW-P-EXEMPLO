const fs = require('fs');

//devolve todos os carros --> controller.getAll
exports.getAll = async (req, res) => {
    return res.send("Todos os carros");
}

//devolve o carro com o id --> controller.getById
exports.getById = async (req, res) => {
    // obter o id do carro
    const id = req.params.id;
    //just return same id
    return res.send(id);
}

//cria um carro --> controller.create
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhes, Foto}=req.body;
    //envia o carro criado
    return res.status(201).send(req.body);
}

//atualizar o carro --> controller.update
exports.update = async (req, res) => {
    //obter o carro pelas características enviadas
    const {number, name, city, birthday}=req.body;
    //envia o carro atualizado
    return res.status(200).send(req.body);
}

//apagar o carro --> controller.delete
exports.delete = async (req, res) =>{
    //obter o id do carro
    const id = req.params.id;
    //devolve ok
    return res.send("Apaquei o carro com id =");
}

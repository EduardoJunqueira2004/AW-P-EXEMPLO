const fs = require('fs');

//devolve todos os carros --> controller.getAll
exports.getAll = async (req, res) => {
    //Devolve todos os carros
    //export.getAll = async (req,res) => 
    //return res.send("Devolve todos os carros");
    
    //ler o ficheiro local
    const datajson =
        fs.readFileSync("data/local/data.json", "utf-8");
        //parse do json
        const data = JSON.parse(datajson);
        //devolver os carros
        return res.send(data.carros);
}

//devolve o carro com o id --> controller.getById
exports.getById = async (req, res) => {
    // obter o id do carro
   // const id = req.params.id;
    //just return same id
    //return res.send(id);
    //obter o id do carro
    const id = req.params.id;
    //ler o ficheiro local
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse do json
    const data = JSON.parse(datajson);
    //procurar um carro com o id
    const carros = data.carros.filter(carros => carros.id == id);
    //devolve o carro
    res.send(carros);
}

//cria um carro --> controller.create
exports.create = async (req, res) => {
    //obter o carro pelas características enviadas
    //const {id, Marca, Detalhes, Foto}=req.body;
    //envia o carro criado
    //return res.status(201).send(req.body);
     //obter o carro pelas características enviadas
     const {id, Marca, Detalhe, Foto} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //adicionar carro à lista
    data.carros.push(req.body);
    //Criar o novo ficheiro com o carro adicionado
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolve o novo carro
    return res.status(201).send(req.body);

}

//atualizar o carro --> controller.update
exports.update = async (req, res) => {
    //obter o carro pelas características enviadas
    //const number, name, city, birthday=req.body;
    //envia o carro atualizado
    //return res.status(200).send(req.body);
    //obter o carro pelas características enviadas
    const {id, Marca, Detalhes, Foto} = req.body;
     //ler o ficheiro local
     const datajson = fs.readFileSync("data/local/data.json", "utf-8");
     //parse do json
     const data = JSON.parse(datajson);
     //procurar o carro para actualizar
    const carros = data.carros.find(carro => carro.id == id);
    //atualizar as caraterísticas
    carros.Marca = Marca;
    carros.Detalhes = Detalhes;
    carros.Foto = Foto;
    //actualizar no ficheiro json
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //devolver o carro alterado
    return res.send({id, Marca, Detalhes, Foto});
}

//apagar o carro --> controller.delete
exports.delete = async (req, res) => {
    try {
        // Obter o id do carro
        const id = parseInt(req.params.id);

        // Verificar se o carro existe
        const carro = await prisma.carro.findUnique({
            where: { id: id },
        });

        if (!carro) {
            return res.status(404).send(`Carro com id ${id} não encontrado.`);
        }

        // Apagar o carro do banco de dados
        await prisma.carro.delete({
            where: { id: id },
        });

        // Devolve uma mensagem de confirmação
        return res.send(`Apaguei o carro com id ${id}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao tentar apagar o carro.');
    }
};

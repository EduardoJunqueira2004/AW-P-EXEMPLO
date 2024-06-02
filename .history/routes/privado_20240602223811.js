const publicoRouter = require('express').Router();

//Define uma rota para a página HTML
publicoRouter.get('/gerirCarros', (req, res) => {
   // Envie o arquivo HTML como resposta para a solicitação HTTP

   res.sendFile('/templates/backOffice/tabelaCarros.html');
});
module.exports = privadoRouter;
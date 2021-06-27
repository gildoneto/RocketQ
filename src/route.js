/* ARQUIVO PARA CONFIGURACAO DAS ROTAS DA APLICACAO */

//IMPORTA O EXPRESS - REQUISITO BASICO PARA O PROJETO
const express = require('express')

const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

// ATRIBUI A CONSTANTE route AS FUNCIONALIDADES
//DE ROUTER() QUE O EXPRESS JA POSSUI
const route = express.Router()

/* AS FUNCOES GET E POST DO express.Router() RECEBEM DOIS PARAMETROS:
1 - A ROTA PARA UMA PAGINA ESPECIFICA E OPCIONALMENTE PARAMETROS QUE SERAO ADICIONADOS A ROTA
2 - UMA FUNCAO QUE RECEBE OS PARAMETROS req E res (request e response)*/

/*
A ROTA '/' APONTA PARA A PAGINA INICIAL DO PROJETO, NESTE CASO ABAIXO,
AO NAVEGAR PARA A PAGINA INICIAL, O ROUTE IRA DEVOLVER A RENDERIZACAO
DA PAGINA index.ejs TRAZENDO UM PARAMETRO page COM O VALOR enter-room.
O VALOR DO page SERA USADO NA TAG <main> DO index.ejs QUE MOSTRARA A index.ejs
ACRESCIDA DO COMPONENTE enter-room.ejs, CRIADO NA PASTA /src/views/parts 
*/
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))

/*
AO NAVEGAR PARA A ROTA '/create-pass', O ROUTE IRA DEVOLVER A RENDERIZACAO
DA PAGINA index.ejs TRAZENDO UM PARAMETRO page COM O VALOR create-pass.
O VALOR DO page SERA USADO NA TAG <main> DO index.ejs QUE MOSTRARA A index.ejs
ACRESCIDA DO COMPONENTE create-pass.ejs, CRIADO NA PASTA /src/views/parts 
*/
route.get('/create-pass', (req, res) => res.render('index', {page: 'create-pass'}))

/*
AO NAVEGAR PARA A ROTA '/create-room', O ROUTE IRA DEVOLVER
A FUNCAO create DO RoomController: src/controllers/RoomController.js
*/
route.post('/create-room', RoomController.create)

/*
AO NAVEGAR PARA A ROTA '/room/:room' O ROUTE IRA DEVOLVER
A FUNCAO open DO RoomController: src/controllers/RoomController.js
(:room = numero da sala gerado previamente pelo RoomController.create
e persistido no banco.)
*/
route.get('/room/:room', RoomController.open)

/*
AO NAVEGAR PARA A ROTA '/enterroom', O ROUTE IRA DEVOLVER
A FUNCAO enter DO RoomController: src/controllers/RoomController.js
*/
route.post('/enterroom', RoomController.enter)

/*
AO NAVEGAR PARA A ROTA '/question/create/:room', O ROUTE IRA DEVOLVER
A FUNCAO create DO QuestionController: src/controllers/QuestionController.js
*/
route.post('/question/create/:room', QuestionController.create)

/*
AO NAVEGAR PARA A ROTA '/question/:room/:question/:action', O ROUTE IRA DEVOLVER
A FUNCAO index DO QuestionController: src/controllers/QuestionController.js
(:question = numero da questao da sala gerado previamente pelo QuestionController.create)
(:action = parametro que retorna do click de excluir ou marcar a pergunta como lida,
    armazenando o valor ['delete'] ou ['check'])
*/
route.post('/question/:room/:question/:action', QuestionController.index)

// EXPORTA O MODULO route PARA QUE ELE POSSA SER IMPORTADO EM OUTROS ARQUIVOS
module.exports = route
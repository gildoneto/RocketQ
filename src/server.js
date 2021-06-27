
//IMPORTA O EXPRESS - REQUISITO BASICO PARA O PROJETO
const express = require('express')

// IMPORTA O NOSSO ARQUIVO DE ROTAS
const route = require('./route')

// IMPORTA O PATH DO PROPRIO EXPRESS PARA SETAR A PASTA VIEWS MAIS ABAIXO
const path = require('path')

// ATRIBUI O EXPRESS A CONSTANTE server
const server = express()

/* CONFIGURA QUAL SERA A VIEW ENGINE DO PROJETO, QUE NESTE CASO SERA O EJS
[O EJS é uma engine de visualização, com ele conseguimos de uma maneira fácil e 
simples transportar dados do back-end para o front-end, basicamente conseguimos 
utilizar códigos em javascript no html de nossas páginas.]*/
server.set('view engine', 'ejs')


/* INFORMA AO EXPRESS QUE A PASTA 'public' FAZ PARTE DO PROJETO
E QUE GUARDA ARQUIVOS ESTATICOS */
server.use(express.static('public'))

/* POR DEFAULT, O EJS PROCURA A PASTA '/views' NA RAIZ DO PROJETO.
COMO A PASTA '/views' ESTA DENTRO DA '/src' NESTE CASO, DEVEREMOS
SETAR O ENDERECO DA PAGINA CONFORME CODIGO ABAIXO, QUE USA O MODULO ('path') IMPORTADO ACIMA
O path.join CONCATENA DIVERSOS PARAMETROS PARA GERAR UM CAMINHO, EXEMPLO
('C:/', 'windows', '/users') => 'C:/windows/users'
O __dirname GUARDA O CAMINHO DA PASTA DO ARQUIVO DE ONDE ELE FOI CHAMADO
NO EXEMPLO ABAIXO, O __dirname E IGUAL A '.../pastaDoProjeto/src' POIS O ARQUIVO 'server.js' ESTA NESTA PASTA.
LOGO, O path.join(__dirname, 'views') SERA IGUAL A '.../pastaDoProjeto/src/views'
*/
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({extended: true}))

/* APOS IMPORTACAO DO route, E NECESSARIO O use PARA QUE O EXPRESS ENTENDA
 QUE E NESTE ARQUIVOS QUE AS ROTAS ESTAO DEFINIDAS NO PROJETO*/
server.use(route)

// CONFIGURA EM QUAL PORTA O SERVIDOR IRA RODAR,
// E QUAL FUNCAO SERA EXECUTADA ASSIM QUE SUBIR
// npm start
server.listen(3000, () => console.log('SERVIDOR RODANDO!!!'))
# RocketQ
Projeto com front em HTML, CSS e Vanilla JS e back em SQLite proposto pela #NLWTogether da RocketSeat na trilha *Discover* lecionada pela @jakeliny.

O que voce precisa instalar antes:

1 - Um editor de sua preferencia. Recomendo o VSCode.
2 - Instalar o Node LTS (Long Term Support)

Para rodar este projeto na sua maquina:

1 - clonar o repositorio na sua maquina
> git clone https://github.com/gildoneto/rocketq

2 - 

----------
Neste projeto usamos NodeJs, EJS, express e SQLite.
Para criar seu proprio projeto do zero baseado neste padrao do RocketQ, siga as recomendacoes abaixo: , voce precisa rodar os seguintes comandos no terminal:

1 - a partir da pasta raiz do seu projeto rode este comando no terminal para iniciar o projeto node
> *npm init -y*

*  o arquivo *package.json* gerado tera todas as informacoes do projeto, como descricao, scripts, dependencias, dependecias de desenvolvimento, etc...

2 - para permitir modelagem e marcacao HTML com Javascript simples, instale a engine EJS
> *npm install ejs*

3 - para instalar o framework Express possibilitando usar metodos utilitarios HTTP rode este comando
> *npm install express*

4 - A estrutura de pastas e arquivos deste projeto segue o seguinte padrao:

**/node_modules** -> pasta criada automaticamente pelo npm, e onde ficam todas as dependencias do projeto.
*Se estiver trabalhando com GIT Coloque sempre essa pasta no .gitignore*

**/public** -> contem subpastas relacionadas ao front. **/images** para as imagens, **/scripts** para scrips javascript, e **/styles** para os arquivos de estilo CSS.

**/src** -> pasta onde ficara todo o codigo do projeto com as seguintes subpastas e arquivos:

- **/controllers**: 

- **/db**: 

- **/views**: pasta com as paginas html, porem com a extensao .ejs

- **route.js**: arquivo com as configuracoes de rotas de toda a aplicacao
    - precisa importar o express para funcionar
        > const express = require('express')

- **server.js**: arquivo com as configuracoes necessarias para iniciar o servidor. Nele devemos
    - importar o **express** para usa-lo no projeto e atribuir a uma constante *server*
        > const express = require('express')<br>
        cons server = express()
    - adicionar o *listen* a constante *server* passando a porta onde o servidor sera rodado. Neste exemplo tambem passamos uma arrow function com um console.log para exibir uma mensagem no terminal assim que o servidor for iniciado.
        > server.listen(3000, () => console.log('SERVIDOR RODANDO!!!'))
    - asd


- **package.json**: arquivo com as configuracoes e scripts do projeto.
    - **scripts**: crie um script para iniciar o projeto e outro para iniciar o banco de dados, caso ele ainda nao tenha sido iniciado.
    > "scripts": {<br>
    "start": "nodemon .",<br>
    "init-db": "node src/db/init.js"<br>
  }

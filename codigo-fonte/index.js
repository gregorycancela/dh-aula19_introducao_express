// Implementando o Express para o projeto.

const Express = require('express');

// Inicializando o Express no projeto NodeJs.

const Aplicativo = new Express();

// Disponibilizando o meu Recurso(Endpoint) via Http.

Aplicativo.get('/', (requisicaoCliente, respostaServidor) => respostaServidor.send("Hello World"));

// Configurei a porta de acesso aos recursos do Express via Http.
Aplicativo.listen(1234, () => console.log("Servidor Okay"))
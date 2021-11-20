### Apresentação
Vamos construir nossa própria API de microserviço, sera um **Microserviço de Timestamp.**

Sua aplicação deve ser funcionalmente semelhante a essa [exemplo](https://timestamp-microservice.freecodecamp.rocks/).

### Descrição do Projeto
Trata-se de um **Microserviço de Timestamp** de apenas uma rota, ao acessar essa rotar passando uma data como parametro sua rota deve retornar um JSON no seguinte formato.

Exemplo de saida:
```JSON
{
    unix: 1451001600000
    utc: "Fri, 25 Dec 2015 00:00:00 GMT"
}
```
### Onde a lógica sera aplicada?
As validações podem se tornar complexas, você deverá utilizar raciocinio lógico e organização para que as validações funcionem da forma correta e façam sentido.

---
### Requisitos Obrigatórios
- Uma solicitação a /api/:date? com uma data válida deve retornar um objeto JSON com uma chave unix, que é um timestamp do Unix da data de entrada em milissegundos.

- Uma solicitação a /api/:date? com uma data válida deve retornar um objeto JSON com uma chave utc que é uma string da data de entrada no formato: Thu, 01 Jan 1970 00:00:00 GMT

- Uma solicitação a /api/1451001600000 deve retornar { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }

- Se a string de data de entrada for inválida, a api retorna um objeto que tem a estrutura { error : "Invalid Date" }

- Um parâmetro de data vazia deve retornar o tempo atual em um objeto JSON com a chave unix

- Um parâmetro de data vazia deve retornar o tempo atual em um objeto JSON com a chave utc
---
### Bônus
- Faça testes.
- Aplique Arquitetura de Software.
- Documente a API.

### Materiais Extras
[Swagger - Design e documentação de API.](https://swagger.io/)
<br>
[Aplicando Middlewares.](https://www.freecodecamp.org/portuguese/learn/back-end-development-and-apis/basic-node-and-express/chain-middleware-to-create-a-time-server)

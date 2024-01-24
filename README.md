# Aplicação de Gerenciamento de Clientes 

Este aplicativo foi desenvolvido por desafio da Facilita Jurídica, teste de conhecimentos. O objetivo do app é gerenciar calcular rotas otimizadas para serviço de limpeza, programando assim as rotas mais próximas e mais acessível à empresa, retornando lista dos locais.

<div align="center">
    <img src="https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes/assets/109186074/ba4bb1c6-f3e6-4ce3-a835-4455b675009f" width="400px"/>
    <img src="https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes/assets/109186074/4d53cbdf-db8e-453e-a420-5cc88455dc54" width="380px"/>
</div>






## Usando a aplicação

### Requisitos para o funcionamento local
- Ter o NodeJS instalado com a versão 18 ou superior




1. Clone o repositório: https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes.

- Para o backend:
3. No terminal abra a pasta api-backend digitando o comando
   ``` cd api-backend ``` ou    ``` cd frontend ``` para o frontend

4. Com a pasta aberta no terminal do vscode digite o comando:
   ``` npm install ```
   Esse comando instalará todas as dependencias do projeto

5. Após realizado a instalação digite o comando ``` npm run dev  ``` esse comando execultara o servidor

   Não será necessário a instalação de um banco de dados ou imagem do PostgrSQL, pois no projeto já está vinculado um banco pela plataforma Railway

   Caso queira utilizar localmente crie uma imagem do PostgreSQL usando o docker
   1. Dê esse comando para criar uma imagem
``` docker run --name postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres ```
Certifique-se de tenha o docker instalado.

  2. Crie um arquivo `.env` na raiz do projeto para adicionar as variáveis de ambiente
     ```
     PORT=3001
     DB_USER=postgres
     DB_PASSWORD=f66egC2-sua-senha
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=clientes
 
     ``` 

     

   

   

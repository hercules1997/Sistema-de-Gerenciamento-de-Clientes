## Aplicação de Gerenciamento de Clientes 



<div align="center">
    <img src="https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes/assets/109186074/367091b6-7421-4512-92b3-0feccbe83981" width="350px"/>
    <img src="https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes/assets/109186074/e2fdbba7-870a-476b-adda-c07ec79112d6" width="400px"/>
</div>

  




# Usando a aplicação

1. Clone o repositório: https://github.com/hercules1997/Sistema-de-Gerenciamento-de-Clientes.git

2. No terminal abra a pasta api-backend digitando o comando
   ``` cd api-backend ```

3. Com a pasta aberta no terminal do vscode digite o comando:
   ``` npm install ```
   Esse comando instalará todas as dependencias do projeto

4. Após realizado a instalação digite o comando ``` npm run dev  ``` esse comando execultara o servidor

   Não será necessário a instalação de um banco de dados ou imagem do PostgrSQL, pois no projeto já está vinculado um banco pela plataforma Railway

   Caso queira utilizar localmente crie uma imagem do PostgreSQL usando o docker
   1. Dê esse comando para criar uma imagem
``` docker run --name postgres -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres ```
Certifique-se de tenha o docker instalado.

  2. Crie um arquivo .env na raiz do projeto para adicionar as variáveis de ambiente
     ```
     PORT=3001
     DB_USER=postgres
     DB_PASSWORD=f66egC2-sua-senha
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=clientes
 
     ``` 

     

   

   

# Gerenciador de Transações

## Descrição do Projeto

O **Gerenciador de Transações** é uma aplicação que permite o registro, edição, exclusão e listagem de transações financeiras. O projeto utiliza o framework **Laravel** no backend para gerenciar as operações de banco de dados e o **Angular** no frontend para a interface do usuário.

## Funcionalidades da Aplicação

### 1. Cadastro de Transações
- Um único formulário deve ser utilizado para registrar tanto receitas quanto despesas.
- O usuário pode indicar se a transação é uma despesa ou receita através de um campo apropriado.
- Se a transação for uma despesa, o valor deve ser salvo como negativo no banco de dados.
- É possível categorizar a transação com tipos como **Aluguel**, **Pagamento**, **Prolabore**, entre outros.

### 2. Listagem de Transações
- A aplicação lista todas as transações registradas.
- O usuário pode filtrar as transações por tipo (receita ou despesa).

### 3. Edição de Transações
- O usuário pode editar transações já cadastradas.

### 4. Exclusão de Transações
- O usuário pode excluir transações cadastradas.

## Tecnologias Utilizadas

- **Backend**: Laravel Framework 11.30.0
- **Frontend**: Angular CLI: 18.2.11 
- **Banco de Dados**: MySQL 


## Pré-requisitos

ESTOU USANDO 

- PHP PHP 8.3.13
- Composer
- Node.js 18.20.4
- Angular CLI: 18.2.11
- MySQL 

## Configuração do Backend

1. Navegue até o diretório `backend/`:

    ```bash
    cd backend/
    ```

2. Instale as dependências do Laravel:

    ```bash
    composer install
    ```

3. Copie o arquivo `.env.example` para `.env`:

    ```bash
    cp .env.example .env
    ```

4. Configure suas credenciais de banco de dados no arquivo `.env`.

5. Gere a chave da aplicação:

    ```bash
    php artisan key:generate
    ```

6. Execute as migrações para criar as tabelas no banco de dados:

    ```bash
    php artisan migrate
    ```

7. Inicie o servidor local:

    ```bash
    php artisan serve
    ```

O backend estará acessível em `(http://127.0.0.1:8000)`.

## Configuração do Frontend

1. Navegue até o diretório `frontend/`:

    ```bash
    cd frontend/
    ```

2. Instale as dependências do Angular:

    ```bash
    npm install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    ng serve
    ```

O frontend estará acessível em `(http://localhost:4200)`.

## Uso

- Acesse o frontend no navegador e interaja com a aplicação para cadastrar, editar, excluir e listar suas transações financeiras.

## Contribuição

Se você deseja contribuir para este projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch (`git checkout -b feature/nome-da-sua-feature`).
3. Faça suas alterações e faça o commit (`git commit -m 'Adicionando uma nova feature'`).
4. Envie suas alterações (`git push origin feature/nome-da-sua-feature`).
5. Abra um pull request.

## DESENVOLVIDO POR 

Matheus Santos Souza e Silva
matheuss.devv@gmail.com

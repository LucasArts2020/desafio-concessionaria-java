#  Sistema de Gerenciamento de Concessionária

> Desafio Técnico - Processo Seletivo (Backend Java)

Este projeto consiste em uma aplicação Fullstack para gerenciamento de venda de veículos. A solução abrange uma API RESTful  desenvolvida com **Spring Boot** e uma interface frontend responsiva integrada.

---

##  Tecnologias Utilizadas

O projeto foi desenvolvido seguindo as melhores práticas de mercado e arquitetura em camadas (MVC).

### Backend
- **Java 24**
- **Spring Boot 3.x**
- **Spring Data JPA** (Persistência de dados)
- **Spring Security** (Autenticação e Proteção de Rotas)
- **MySQL** (Banco de Dados Relacional)
- **Gradle** (Gerenciador de Dependências)

### Frontend
- **HTML5 & CSS3**
- **JavaScript (ES6+)** (Consumo de API via Fetch)
- **Bootstrap 5** (Estilização e Responsividade)

---

##  Funcionalidades (O CRUD)

O sistema cumpre todos os requisitos do desafio implementando as quatro operações fundamentais:

  C - Create (Criação):
  - Permite o cadastro de novos veículos no banco de dados via formulário no frontend.
  - Persistência segura de dados como Marca, Modelo, Ano, Preço e Descrição.

  R - Read (Leitura):
  - Exibição do estoque completo em tempo real na tela inicial.
  - O Backend consulta o banco de dados e retorna a lista atualizada para o usuário visualizar.

  U - Update (Atualização):
  - **Edição Completa:** Permite alterar qualquer dado do veículo (ex: corrigir o preço ou ano) carregando os dados atuais no formulário.
  - **Atualização Parcial (Patch):** Funcionalidade exclusiva para alterar o status entre "Disponível" e "Vendido" com apenas um clique, sem precisar editar todo o formulário.

  D - Delete (Exclusão):
  - Permite remover veículos do sistema de forma definitiva através do botão de excluir na tabela.

###  Diferenciais Implementados
- **Segurança (Spring Security):** Proteção das rotas e operações do CRUD exigindo autenticação (Login/Senha).
- **Interface Responsiva:** O Frontend consome a API Java de forma assíncrona (Fetch API), proporcionando uma experiência fluida sem recarregamentos desnecessários.
---

# PlanningPoker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


Challenge:
Você é o responsável por criar uma App de Planning Poker Angular.
Requisitos:
 - Uma página inicial com um formulário para registro do nome do usuário;
    - Na página de registro de usuário, o usuário deverá informar se é o owner da sala de Planning Poker criada;

 - Ao registrar o usuário a página deve redirecionar para o dashboard;
 - Um dashboard com um container para exibição das cartas e um painel com os usuários registrados;
 - Ao clicar na carta ela deverá permanecer destacada e o voto deverá ser computado;
 - Quando todos os votos forem computados, exibir na lista de usuários qual usuário votou e o valor do voto;
 - Deverá existir um botão para zerar os votos;
 - Deverá existir um botão para sair da sala.


Os requisitos não funcionais são:
 -  Utilizar a versão 9 ou superior do Angular e o Sass como pré-processador;
 -  O campo de nome de usuário não deverá permitir valor em branco utilizando ReactiveForms;
 -  Os itens da página: formulário, cartas, painel; deverão ser criados como componentes
Angular;
 -  Aplique “Lazy Load” nas rotas de navegação;
 -  Usuários e votos devem ser mocks;

Observações importantes:
 -  Todo o código deverá ser publicado em um repositório público do GitHub;
 -  Fique atento a ter um código que utilize padrões de desenvolvimento e boas práticas;
 -  Extra Challenge (não obrigatório): utilizar um servidor back-end para computar os votos.
# Animale Store

Este projeto é uma aplicação web desenvolvida para exibir produtos de uma loja online. Ele inclui funcionalidades como listagem de produtos, paginação, exibição de detalhes do produto e seleção de tamanhos.

## Estrutura de Pastas

```
C:\Users\laris\OneDrive\Área de Trabalho\dev-challenge\animale-site\src
├── components
│   ├── Carousel
│   │   ├── Carousel.js
│   │   └── Carousel.scss
│   ├── DetailsProduct
│   │   ├── DetailsProduct.js
│   │   └── DetailsProduct.scss
│   ├── Footer
│   │   ├── Footer.js
│   │   └── Footer.scss
│   ├── Home
│   │   ├── Home.js
│   │   └── Home.scss
│   ├── Navbar
│   │   ├── Navbar.js
│   │   └── Navbar.scss
│   ├── ProductList
│   │   ├── Product.js
|   |   ├── ProductList.js  
│   │   └── ProductList.scss
│   └── Sidebar
│       ├── Sidebar.js
│       └── Sidebar.scss
├── App.js
└── index.js
```

## Funcionalidades
- **Listagem de Produtos**: Exibe uma lista de produtos com paginação. Para acessar, clique em **Coleções** no menu de navegação (Navbar).
- **Detalhes do Produto**: Permite visualizar informações detalhadas de um produto, incluindo preço, descrição e imagens.
- **Avaliações**: Exibe a quantidade de avaliações como estrelas.
- **Seleção de Tamanho**: Possibilita a escolha de tamanhos do produto.
- **Layout Responsivo**: Design adaptável para diferentes dispositivos.
- **Integração com API**: Consome dados de uma API para exibir os produtos dinamicamente.

## Tecnologias Utilizadas e Motivos
- **React**: Escolhi utilizar React porque ele facilita a criação de interfaces dinâmicas e reutilizáveis, tornando o código mais organizado e fácil de manter.
- **Axios**: Utilizei o Axios para fazer chamadas à API, pois ele é simples de usar e lida bem com requisições HTTP.
- **Sass**: Optei por usar Sass para organizar melhor os estilos, permitindo um código CSS mais limpo e modular, com recursos como variáveis e aninhamento.
- **React Router**: Utilizei o React Router para gerenciar as rotas da aplicação, permitindo navegar entre páginas sem recarregar a tela.
- **JavaScript**: Escolhi JavaScript por ser uma linguagem amplamente usada e flexível, ideal para desenvolvimento web.

## Como Executar o Projeto
Siga os passos abaixo para rodar o projeto localmente.

### **Pré-requisitos**
- Node.js (versão 16 ou superior)
- npm ou yarn

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/animale-site.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd animale-site
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   # ou
   yarn start
   ```
5. Acesse a aplicação no navegador:
   ```
   http://localhost:3000
   ```


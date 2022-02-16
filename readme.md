# Gerando PDF com Nodejs

<img src="./banner.jpg" alt="Imagem de apresentação">

> Este projeto tem como finalizade mostar uma forma simples e prática de gerar PDF a partir de templates HTML.

Estrutura do projeto:

```shell
.
├── app.js
├── banner.jpg
├── package.json
├── public
│   ├── base.html
│   ├── css
│   │   ├── base.css
│   │   ├── post.css
│   │   └── user.css
│   ├── images
│   │   └── photo.jpg
│   └── index.html
└── readme.md
```

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Ambiente configurado com o [Nodejs](https://nodejs.org/en/) e o [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm);

**Como saber se está tudo certo ?**

Ao executar os comandos abaixo você deve receber um resultado similar.

```shell
$ node -v
v17.4.0

$ npm -v
8.3.1
```

## 🚀 Instalando

```shell
$ git clone <url_prjeto> gerando-pdf
$ cd projeto
$ npm install
```

OU Adicione as seguintes dependências ao seu projeto:

```shell
npm i nunjucks html-pdf --save
```

## 🎬 Testando nosso exemplo

Utilize o comando abaixo para executar a versão de desenvolvimento.

```
$ npm run watch
```

Pronto, se tudo deu certo até aqui nosso projeto deve estar rodando no endereço [http://localhost:3000/](http://localhost:3000/).

Para testar utilize o `Postman` ou ferramenta similiar para acessar o endpoint `http://localhost:3000/generate-pdf` no verbo **POST**.

## 📖 Materias de referência

* [Medium: Gerando PDF a partir de um HTML com Node.js em menos de 5 minutos](https://medium.com/@hectorgrecco/gerando-pdf-a-partir-de-um-html-com-node-js-em-menos-de-5-minutos-b0a3c4b4a271);
* [Nunjucks](https://mozilla.github.io/nunjucks/);
* [html-pdf](https://github.com/marcbachmann/node-html-pdf);

## ⚠️ Problemas enfrentandos durante o desenvolvimento

* Problemas na utilização de flex layout: [Issue #419](https://github.com/marcbachmann/node-html-pdf/issues/419);
* Problemas na utilização de arquivos externos: [Issue #13](https://github.com/marcbachmann/node-html-pdf/issues/13) e [Issue #641](https://github.com/marcbachmann/node-html-pdf/issues/641);
* Erro durante a geração do pdf no ambiente de produção (container docker com a imagem alpine node): [Issue #35](https://github.com/marcbachmann/node-html-pdf/issues/35);
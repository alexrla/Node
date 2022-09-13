# Node.js



### Introdução

- **Runtime JavaScript (uma biblioteca utilizada por um compilador, durante a execução do programa);**
- **Construída na V8 engine (escrita em C++) da Google (interpretador JavaScript/Máquina virtual JavaScript, utilizada no Google Chrome);**
- **Escrevemos nossos programas em JavaScript que serão: compilados, otimizados e interpretados, pela máquina virtual V8;**
- **Possibilita a criação de softwares em JavaScript, no lado do servidor (back-end);**
- **OBS.: temos um código JavaScript, rodando em C++, para garantir alta performance;**



### NPM

- **Gerenciador de pacotes do Node;**
- **Utilizado para baixar (desinstalar ou atualizar) bibliotecas de terceiros (dependências) e executar scripts no nosso programa;**
- **Os módulos (resultado dos pacotes instalados em um projeto Node) são armazenados na pasta node_modules (ela deve ser descartável - a cada instalação do projeto, baixamos todos os pacores novamente);**



###  Executando o Node

- **Podemos executar o Node via arquivos do nosso projeto (criamos o projeto, executamos o Node que vai rodar esse projeto, que vamos acessar pelo navegador), ou através do terminal ("um novo terminal é criado", para que possamos executar comandos JavaScript - traduzidos em Node);**
- **Executar um programa JavaScript, a partir do Node: `node nome_do_programa.js`;**
- **Abrir o terminal REPL (Read Eval Print Loop): `node`;**
  - **O REPL é o interpretador interativo de comandos, do Node.js (podemos escrever código JavaScript);**



### File System

- **Core Module (não é necessário instalar - vêm junto com a instalação do Node);**
- **Utilizado para trabalhar com diretórios, arquivos, etc;**
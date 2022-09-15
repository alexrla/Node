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



### Módulos

- **Scripts reaproveitáveis (um conjuntos de funções e objetos JavaScript, que podemos utilizar nos nossos projetos);**

- **Os módulos são divididos em três categorias:**

  - **Internos: os módulos que nós mesmos desenvolvemos;**
  - **Core Modules: módulos que vêm junto a instalação do Node;**
  - **Externos: módulos que instalamos via `npm` (de terceiros);**

- **Módulos internos:**

  - **Ao criá-los, devemos exportá-los, utilizando a instrução `module.exports`;**

  - **Para utilizar o módulo, o importamos onde queremos utilizá-lo, através da instrução `require`;**

  - **Podemos utilizar as instruções `import` e `export`, para exportar e importar um módulo (novidade que chegou no ES6 - ECMAScript 6/ECMAScript 2015 - uma padronização JavaScript);**

    - **Para isso, devemos alterar a extensão do arquivo para `.mjs`;**

    - **Com isso, podemos utilizar a instrução `export default`, para realizar a exportação (existem o `export`, que importa várias "coisas", e o `export default`, que importa uma única "coisa");**

    - **Para importar, só utilizamos a instrução `import`;**

      ```javascript
      // operacoes.mjs
      function soma(a, b) {
          console.log(a + b);
      }
      
      function subtracao(a, b) {
          console.log(a - b);
      }
      
      function multiplicacao(a, b) {
          console.log(a * b);
      }
      
      function divisao(a, b) {
          console.log(a / b);
      }
      
      export { soma, subtracao, multiplicacao, divisao};
      
      // index.mjs
      import { soma, subtracao, multiplicacao, divisao } from './operacoes.mjs';
      
      soma(2, 4); // 6
      subtracao(10, 5); // 5
      multiplicacao(7, 8); // 56
      divisao(9, 3); // 3
      ```

- **Core Modules:**

  - **Para utilizá-los, devemos importá-los;**

- **Módulos externos:**

  - **Instalados via `npm`;**

  - **Para instalar pacotes de terceiros, devemos inicializar o `npm` no projeto, a partir da instrução: `npm init` (os módulos passam a ficar mapeados e é possível agora, instalá-los e um arquivo chamado `package.json`, é criado);**

  - **Os módulos instalados ficam salvos na pasta `node_modules`;**

  - **Para instalar pacotes de terceiros, já com o `npm` inicializado, geralmente, basta utilizarmos os comandos: **

    ```shell
    npm install nome_do_pacote
    
    OU
    
    npm i nome_do_pacote
    ```

  - **Ao dependências do projeto, podem ser vistas no arquivo `package.json`;**
  - **Utilizando o comando: `npm init -y`, podemos pular as perguntas;**



### Argumentos

- **Através do Node, podemos enviar argumentos pela linha de comando (eles são passados após a instrução de execução do arquivo);**
- **Esse argumentos ficam em um aray chamado: `process.argv`;**



### Input

- **Para receber a entrada do usuário, podemos utilizar um Core Module, chamado `readline` (desse módulo, utilizaremos o método `question`, onde realizaremos perguntas a serem respondidas pelo usuário e, em seguida, após o processamento da resposta do usuário, é entregue um retorno);**
- **Outro módulo que podemos utilizar para receber a entrada do usuário, é o módulo `inquirer` (módulo externo);**
  - **Mais completo para resgatar e lidar com a entrada do usuário;**
  - **Baseado em promises (torna a utilização mais simples);**



### Event Loop

- **Recurso da arquitetura do Node (o Node executa uma linha por vez, seguindo as instruções de cima para baixo);**
- **Garante que a execução do código seja de forma sequencial;**



### Sync e Async (Síncrono e Assíncrono)

- **Síncrono (Sync): o código esperar ser totalmente executado para prosseguir;**
- **Assíncrono (Async): o código continua progredindo e, em um ponto futuro, obtém a resposta da execução assíncrona;**



### Erro

- **Formas de gerar ou evidenciar erros:**

  - **`throw`: forma de encerrar um programa, gerando um novo erro:**

    ```javascript
    throw new Error("Mensagem de erro!");
    ```

  - **`try/catch`: forma de evidenciar algo que deu errado em um bloco de código e exibir uma mensagem de erro:**

    ```javascript
    try {
        
        caso de sucesso...
        
    } catch(error) {
        
        caso de erro..
        
    }
    ```

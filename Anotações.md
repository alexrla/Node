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



### Core Modules

- **`http`**
  - **Cria servidores HTTP;**
  - **Por exemplo, podemos receber uma requisição e enviar um código HTML;**
  - **A aplicação deve ficar rodando, para podermos acessar o nosso servidor;**
- **`path`**
  - **Nos possibilita a extração de diversas informações sobre caminhos e arquivos (nome do diretório, do arquivo, extensão do arquivo, etc.);**
- **`fs`**
  - **Utilizado para trabalhar com arquivos e diretórios;**
  - **Podemos ler e escrever em arquivos;**
  - **Utilização interessante: logs do sistema;**
- **`url`**
  - **Utilizado para "decompor" uma URL;**
  - **Podemos resgatar: `host`, `path`, `search`, `query`, etc;**

- **`os`**
  - **Nos possibilita a extração das informações do do sistema operacional;**



### Rotas

- **São as "páginas" que acessamos nos sites;**
- **Através do Core Modules, podemos criar um sistema de roteamento;**
- **Ideia: identificar os arquivos acessados pela URL e retorná-los (se existirem);**



### Integração - Node.js e MySQL

#### Bancos Relacionais

- **São constituídos por algumas entidades:**
  - **Banco de dados: banco que guardar os dados;**
  - **Tabelas: onde categorizamos os dados e os inserimos;**
  - **Colunas: onde separamos os dados em uma tabela;**
  - **Dados: o que é inserido, modificado, atualizado e removido de uma tabela;**
  - **Relacionamentos: ligações entre as tabelas;**



#### MySQL

- **SGBD (Sistema Gerenciador de Banco de Dados);**
- **Nos ajudar a trabalhar com bancos relacionais;**
- **O mais utilizado, atualmente, em sistemas e aplicações;**



#### Instalação do MySQL no Ubuntu

**1 - `sudo apt update` (atualizando os pacotes);**

**2 - `sudo apt install mysql-server`;**

**3 - `sudo mysql_secure_installation`;**

**4 - `systemctl status mysql.service` (testando o serviço);**

**5 - `sudo mysql -u root` (acessando o MySQL);**

​	**5.1 - Ou: `mysql -u root -p`;**

**6 - `exit` (sair);**



#### Instalação do Workbench

- **Ferramenta do MySQL para a visualização de dados;**

- **Através dela, também podemos criar diagramas relacionais;**

- **Instalação:**

  **1 - `sudo apt update` (atualizando os pacotes);**

  **2 - `lsb_release -rs` (descobrir a versão do sistema);**

  **3 - `https://downloads.mysql.com/archives/workbench/` (baixar o arquivo);**

  **4 - `sudo dpkg -i nome_do_arquivo.deb` (instalar o arquivo baixado);**

  **5 - `sudo apt-get -f install` ( instalar as dependências e finalizar a instalação);**



#### Instalação HeidiSQL

- **Alternativa ao Workbench (outra ferramenta de visualização de dados, com requisitos menores para instalar e rodar);**

- **Funciona para a maioria dos SGBD's relacionais;**

- **Instalação:**

  **1 - `sudo apt update`;**

  **2 - `sudo apt install snapd` (caso o `snap` não esteja instalado);**

  **3 - `sudo snap install heidisql-wine --beta`;**



#### Intregação - Node.js e MySQL

- **Antes de tudo, precisaremos instalar o driver, um pacote chamado `mysql`, através do NPM;**
- **Em seguida, devemos conectar o nosso banco de dados (vamos inserir informações como: `host`, `user`, `password` e o `database`);**
- **`npm i mysql`;**



#### Criando tabela

- **Para manipular os dados, precisaremos criar tabelas e isso será feito via o Workbench;**
- **Para selecionar o banco, damos dois cliques nele e esperamos que ele fique com o texto em negrito;**



#### Inserindo dados

- **Para inserir dados, será necessário criar e executar uma `query`;**
  - **A `query` em si é uma string, seguindo os padrões MySQL;**
- **Já para executar, iremos utilizar o método `query` do pacote `mysql`;**
- **OBS.: para inserir os dados, faremos o uso da instrução `INSERT`;**



#### Resgatando dados

- **Também precisaremos criar uma `query`, que será um `SELECT`;**
  - **Poderemos escolher quais dados serão retornados, através das colunas;**
- **Agora, para resgatar um dado em específico, precisaremos utilizar o `WHERE` (desta forma, podemos filtrar por uma coluna e um valor);**



#### Editar dados

- **Primeiro passo:**
  - **Resgatar o dado;**
    - **Normalmente, preenchemos o formulário de dados com os dados que foram resgatados (SELECT). Isso faz com que o usuário lembre dos dados cadastrados e possa escolher o que editar;**
- **Último passo:**
  - **Criamos uma nova rota com o verbo `POST` e então fazemos uma `query` de `UPDATE` para processar a atualização (pegamos os dados que vieram no `POST`, do "body" da nossa requisição e colocamos esses dados na nossa `query` de `UPDATE`);**
  - **Também precisaremos passar o id no nosso formulário de exemplo;**



#### Remover itens

- **Utilizamos a `query` `DELETE`;**
  - **Precisaremos enviar para a rota, um `POST` com o id do dado a ser removido;**



#### Connection Pool

- **Recurso para otimizar as conexões, criando um cache e permitindo sua reutilização (retorna muito mais rápido a resposta);**
  - **O driver `mysql` tem este recurso desenvolvido, basta aplicarmos;**
  - **E com este recurso, podemos controlar as conexões abertas, fechando assim, as que se tornam inativas;**



#### Preparando queries

- **Forma de nos defendermos de `SQL Injection`;**
- **Podemos utilizar interrogações ao invés de valores e substituir através de um segundo passo, para a `query` ser executada corretamente;**
  - **Essa técnica deve ser utilizada em qualquer programa que vá para a produção;**



### Sequelize com Node.js

#### ORM

- **Object Relational Mapper (framework);**
  - **Abstrai a complexidade das `queries`, para trabalharmos com métodos (ao invés de criarmos as `queries`, teremos "métodos prontos" que nos ajudam a utilizar `queries` em determinada tabela);**
  - **Nos concentramos na regra de negócios e não nos comandos SQL;**
- **Uma ORM muito utilizada para Node.js, é a Sequelize;**
- **Em alguns casos, uma ORM pode trazer prejuízos de performance;**
  - **A `query` pura executa mais rapidamente do que a ORM;**
  - **E temos código "exagerado", que não evemos por baixo dos panos;**



#### Sequelize

- **Uma ORM para Node.js (pacote externo);**
- **Baseada em promises (then, catch);**
- **Integração com vários bancos relacionas (a exempldo do MySQL);**
- **Precisaremos sempre criar um Model, que é o reflexo da nossa tabela em uma classe;**
- **Para instalar o Sequelize, temos o comando: `npm i sequelize`;**
- **Para conectar, precisaremos dos mesmos dados que no pacote `mysql`: `host`, `user`, `password` e o `database`;**
  - **Instanciado a classe Sequelize, podemos checar a conexão com o método `authenticate`;**
  - **OBS.: em caso de erro (`Please install mysql2 package manually`): ` npm install mysql2` (o pacote do sequelize necessita desse pacote, para funcionar);**



#### Model

- **Para criar um Model, precisaremos instanciar uma classe que representará uma tabela (como no sequelize, não trabalhamos com `queries`,  linkamos as tabelas a partis dos models que criamos);**
  - **Por exemplo, um Model User, cria uma nova tabela chamada users;**
  - **Podemos colocar os campos e os tipos dele, como propriedade do Model;**
  - **Futuramente, ele será utilizado para as operações entre aplicações e banco;**
  - **O método `sync` faz a criação das tabelas baseadas nos models;**



#### Inserindo dados

-  **Para inserir um dado, precisaremos do Model que criamos (iremos importar ele no arquivo de execução do comando);**
  - **O método a ser utilizado é o `create`;**
  - **Ele leva como parâmetro, todos os campos e insere o registro na tabela;**



#### Lendo dados

- **Para ler os dados de uma tabela, utilizamos o método `findAll`;**
  - **Ele também requer o model;**
  - **Os dados vêm em um objeto especial e para transformá-lo em um array de objetos, temos que inserir o parâmetro `raw`, com o valor `true`;**



#### WHERE no sequelize

- **Para filtrar dados com o sequelize, utilizando o `WHERE`, precisaremos inserir um novo parâmetro chamado `where` (um objeto onde colocamos as propriedades e valores que queremos filtrar);**
  - **Para retornar apenas um resultado, podemos utilizar o método `findOne`;**



#### Removendo itens

- **Para remover itens, utilizamos o método `destroy`;**
  - **A função fica semelhante a função de resgatar/filtrar um usuário;**
  - **Só que ele será um `POST`, onde efetuaremos a remoção e depois realizamos o redirecionamento;**
  - **Também precisaremos criar um formulário no front-end;**



#### Editando itens

- **Primeiro passo:**
  - **Resgatar os dados a serem editados;**
    - **Com isso, podemos preencher o formulário, para depois fazer a atualização;**
    - **Vamos utilizar o método `findOne` e fazer o preenchimento do form na nossa view;**

- **Segundo passo:**
  - **Para realizar a `query` de `UPDATE`, vamos utilizar o método `update` do sequelize;**
    - **Nele, passamos o objeto atualizado do item;**
    - **Além de filtrarmos por meio do atributo `where`, que item vamos atualizar;**



#### Recriando tabelas

- **Podemos forçar a recriação das tabelas;**
  - **No método `sync`, onde são sincronizados os models e as tabelas, vamos colocar: `force: true`;**
  - **Os dados serão perdidos neste processo;**



#### Relacionamentos

- **Em bancos relacionais, podemos criar relacionamentos entre as tabelas;**
  - **Precisaremos crias pelos menos, dois models, para trabalhar isso no sequelize;**
  - **Em seguida, precisaremos inserir um método de relacionamento, em algum dos models que vai criar a relação;**
  - **Após o `sync`, uma coluna que faz a relação entre as tabelas, será criada (representandoa assim, a `FOREIGN KEY`);**



#####  Adicionando dados relacionados

- **Para adicionar um dado relacionado, precisaremos (além do que já foi visto), passar o id do item que o relaciona;**
  - **Isso pode ser feito com um input do tipo `hidden`, dentro do `form` que contém os dados do novo item e enviamos para uma nova rota do nosso sitema;**



##### Resgatando dados relacionados

- **Para isso, temos de definir as relações entre os models;**
- **Depois utilizaremos o operador `include` com o nome do model, onde estamos resgatando os dados;**
  - **Isso faz com que os registros associados, também venham na relação;**
  - **Como há dados relacionados, devemos remover o `raw`;**



##### Removendo dados relacionados

- **Para remover itens relacionados, utilizaremos aquilo que já foi visto: criaremos um formulário que envia o id do item e uma rota que recebe estas informações e executa a remoção, através do método `destroy`;**



### MVC

- **Model View Controller;**
- **Padrão de arquitetura de software, que deixa nossas aplicações mais organizadas;**
  - **A aplicação é dividida em camadas;**
  - **Teremos uma nova estrutura de arquivos e pastas;**
  - **A aplicação obedece um novo fluxo, que se repete para todas as ações;**
- **Aplicações em MVC tendem a ter uma manutenção/evolução mais fácil;**



#### Model

- **Camada onde vamos interagir com o banco de dados;**
  - **Normalmente, interage com os arquivos do Controller;**
- **Responsável por resgatar, atualizar, remover e criar dados;**
  - **É comum que cada tabela seja um Model, assim como vimos no setup do Sequelize;**
- **Controlam a arquitetura do sistema (é fácil entender a regra de negócios, analisando eles);**



#### View

- **Camada onde iremos apresentar os dados que estão no banco;**
- **Geralmente, interage com o Controller;**
- **Nela também temos a interação com o usuário, como formulários para inserir dados no sistema;**
- **É normal não haver lógica/regra de negócios na view, ou o mínimo possível;**
- **Normalmente, a exibição é feita através do HTML;**



#### Controller

- **Onde ocorrer a interação entre Model e View;**
  - **Nele podemos definir qual view será impressa;**
  - **Processar dados que foram enviados para o banco ou para a view;**
- **Os controller terão um código semelhante ao das rotas que já vimos;**



#### Estrutura MVC

- **`controllers`: pasta onde ficam os arquivos de Controller ;**
- **`models`:  pasta onde ficam os arquivos de Model;**
- **`views`: pasta onde ficam os arquivos de views ;**
- **`routes`: pasta onde ficam os arquivos de rotas ;**
- **`index.js`:  arquivo de inicialização da aplicação;**



#### Criando model

- **Criado dentro da pasta `models`;**
- **Necessário sincronizar para criar a tabela (vamos importar no arquivo `index.js`);**



#### Criando controller

- **Criado dentro da pasta `controllers`;**
  - **Classe que contém as funções com a lógica de cada rota;**
  - **Algumas só encaminharão as views;**
  - **Outras vão processar dados e passá-los para os Models (por isso, importamos o Model que o controller utiliza);**



#### Criando rotas

- **Criadas com a ajuda do `router`;**
  - **Cada arquivo será responsável por um controller;**
  - **Em cada rota utilizamos uma das funções do Controller;**
  - **Por isso, importamos o controller responsável pela lógica das rotas;**
  - **O router precisa ser importado no index da aplicação;**



### Integração - Node.js e MongoDB

#### NoSQL

- **Bancos de dados focados em documentos (`documents`);**
- **A modelagem de dados com relacionamentos, é opcional;**
- **Não utilizamos `queries` e sim métodos de classes para trabalhar com os dados;**
- **As tabelas não existem, temos as coleções (`collections`);**
  - **Não precisamos definir a estrutura da coleção previamente;**



#### MongoDB

- **Banco NoSQL;**
  - **Também é um banco de dados orientado a documento;**
  - **Os dados ficam salvos em estruturas parecidas com JSON (o BSON);**
- **Diferente do SQL, temos índices primários e secundários;**

- **Utilizamos um driver, semelhante ao MyQL e Sequelize, para conectar a aplicação com o MongoDB;**



#### Principais entidades

- **Database: onde ficam as coleções (`collections`) e os dados;**
- **Collections: são como as tabelas nos bancos relacionais, nelas vamos inserir os dados;**
  - **Podem ser criadas livremente, a qualquer momento, e não possuem colunas fixas para os dados;**
- **Documents: são os dados (no MongoDB, os dados possuem essa nomenclatura);**



#### MongoDB e JSON

- **O tipo de dado inserido na "tabela" é o `BSON` (uma variação de `JSON`);**
  - **O `BSON` é semelhante ao `JSON`, porém com alguns recursos a mais;**
  - **A forma de criar um `BSON`, é semelhante a forma de criar um `JSON`;**



#### Conectando o MongooDB ao Node.js

- **Primeiramente, devemos instalar o drive do MongoDB, um pacote NPM de nome `mongodb`;**
- **Em seguida, criamos a conexão, baseada em uma URL, com o protocolo: `mongodb://...`;**
  - **Isso é feito através da classe `MongoClient`;**



#### Inserindo dados

- **Utilizamos o método `insertOne`;**



#### Resgatando dados

- **Utilizamos o método `find`**;
  - **Os dados vem em um cursor e para utilizá-los, realizamos a conversão deles para um array, através do método `toArray`;**



#### Resgatando dados (de forma individual)

- **Utilizamos o método `findOne`;**



#### Removendo dados

- **Utilizamos o método `deleteOne`;**



#### Editando dados

- **Utilizamos o método `updateOne`;**


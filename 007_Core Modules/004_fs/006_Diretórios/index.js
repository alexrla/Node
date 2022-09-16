const fs = require("fs");

// Verificando a existência de um diretório
if(!fs.existsSync("./minhaPasta"))  {

    console.log("Diretório inexistente!");

} else {

    console.log("O diretório existe!");

}

// Criando diretório
fs.mkdirSync("diretorio_de_teste");

if(!fs.existsSync("./diretorio_de_teste"))  {

    console.log("Diretório inexistente!");

} else {

    console.log("O diretório existe!");
    
}

/*
    - exists: método utilizado para informar se um diretório 
    existe ou não;

    - mkdir: método utilizado para criar diretórios;
    OBS.: não tem como "criar" um diretório que já existe (com 
    o mesmo nome), iremos obter um error;
*/
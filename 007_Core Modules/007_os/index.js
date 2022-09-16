const os = require("os");

// Quantidade de CPUs do servidor
console.log(os.cpus());

// Quantidade de memória livre na máquina
console.log(os.freemem());

// Diretório principal da máquina
console.log(os.homedir());

// Sistema operacional que está rodando na máquina
console.log(os.type());
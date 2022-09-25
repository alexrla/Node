// Criando a conexão

import { Sequelize } from "sequelize";

import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
    
    host: process.env.DATABASE_HOST,
    
    // dialect: qual banco queremos integrar
    dialect: "mysql",

});

try {

    sequelize.authenticate();

    console.log("Sequelize conectado com sucesso!");
    
} catch (error) {
    
    console.log(error);

}

export default sequelize;
// Criando a conexão

import mysql from "mysql";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    // Mantendo no máximo 10 conexões (conexções inativas serão "matadas")
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

export default pool;
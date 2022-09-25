// Criando a conexão

import mysql from "mysql";

const pool = mysql.createPool({
    // Mantendo no máximo 10 conexões (conexções inativas serão "matadas")
    connectionLimit: 10,
    host: "hostname",
    user: "username",
    password: "user_password",
    database: "name_database"
});

export default pool;
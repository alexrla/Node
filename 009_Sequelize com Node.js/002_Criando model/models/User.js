// Propriedade que dá acesso a todos os tipos de dados que existem no banco
import { DataTypes } from "sequelize";

// Chamando a conexão do banco
import db from "../db/conn.js";

// O método .define(), define o módulo
const User = db.define("User", {

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }

});

export default User;

/*
    - O id é criado automaticamente;

    - allowNull: false (não aceita valores nulos);

    - required: true (torna o campo obrigatório - nada de campo vazio);
*/
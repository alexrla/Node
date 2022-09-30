import { MongoClient } from "mongodb";

import dotenv from "dotenv";
dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function run()    {

    try {

        await client.connect();

        console.log("MongoDB conectado com sucesso!"); 
        
    } catch (error) {

        console.log("Erro ao conectar o MongoDB");

        console.log(error);
        
    }

}

run();

export default client;
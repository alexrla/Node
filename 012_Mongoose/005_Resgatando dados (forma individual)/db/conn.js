import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

async function main()   {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB conectado com sucesso!"); 
}

main().catch((error) => console.log(error));

export default mongoose;
import mongoose, { Schema } from "mongoose";

// Criando a classe
const Product = mongoose.model(
    "Product",
    new Schema({
        name: { type: String, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true}
    })
);

export default Product;

/*
    - .model(): método onde inserimos o schema;
*/
import mongoose from "../db/connection.js";

const { Schema } = mongoose;

const Pizza = new Schema({
    name: String,
    price: Number,
    ingredients: [String]
})

export default Pizza;